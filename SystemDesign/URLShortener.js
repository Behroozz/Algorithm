//https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md

// ************************************************************
// Tiny URL Algorithm
// ************************************************************

// Algorithm:
// The Client sends a create paste request to the Web Server, running as a reverse proxy
// The Web Server forwards the request to the Write API server
// The Write API server does the following:
// Generates a unique url
// Checks if the url is unique by looking at the SQL Database for a duplicate
// If the url is not unique, it generates another url
// Saves to the SQL Database pastes table
// Saves the paste data to the Object Store
// Returns the url

// Table:
// shortlink char(7) NOT NULL
// expiration_length_in_minutes int NOT NULL
// created_at datetime NOT NULL
// paste_path varchar(255) NOT NULL
// PRIMARY KEY(shortlink)

// Take the MD5 hash of the user's ip_address + timestamp
// Base 62 encode the MD5 hash

// def base_encode(num, base=62)
// digits = []
// while num > 0
//   remainder = num % base
//   digits.push(remainder)
//   num = num /base
// digits = digits.reverse

// url = base_encode(md5(ip_address+timestamp))

// ************************************************************
// Tiny URL API
// ************************************************************
// Write
// POST, expiration_length_in_minutes": "60", content to encode

// READ,
// The Client sends a get paste request to the Web Server
// The Web Server forwards the request to the Read API server
// The Read API server does the following:
// Checks the SQL Database for the generated url
// If the url is in the SQL Database, fetch the paste contents from the Object Store
// Else, return an error message for the user


// ************************************************************
// Architect
// ************************************************************

// [Clinet] ---> DNS, CDN
//  |
// [Load Balancer1,2,3]
//  | 
// [Web Server1,2,3]  ---------                                 [Analytic]              
// |                         |                                      |
// [Wirte API]             [React API]                              |
//                           |                                      | 
//     |                 [Memory Cache]                             |
//     |                     |                                      |
//     SQL write          SQL Read Replica-------Object Store------- 
//     Master/Slave  



// ************************************************************
// Tech overview
// ************************************************************
// 1)[DNS]: Domain Name System translates a domain name such as www.example.com to an IP address. [Route 53]

// 2)[CDN]: content delivery network (CDN) is a globally distributed network of proxy servers, serving content 
// from locations closer to the user. Generally, static files such as HTML/CSS/JS, photos, and videos are 
// served from CDN, although some CDNs such as Amazon's CloudFront support dynamic content

// 3)[Load balancers]: distribute incoming client requests to computing resources such as application servers and databases

// 4)[Horizontal Scalling]: Load balancers can also help with horizontal scaling, improving performance and availability.
//  Scaling out using commodity machines is more cost efficient and results in higher availability than scaling up a 
//  single server on more expensive hardware, called Vertical Scaling.

// 5)[Web Server Security]:
// Secure the web server
// Open up only necessary ports
// Allow the web server to respond to incoming requests from:
// 80 for HTTP
// 443 for HTTPS
// 22 for SSH to only whitelisted IPs
// Prevent the web server from initiating outbound connections

// 6)[Object Store]
// Store static content separately
// Consider using a managed Object Store like S3 to store static content
// Highly scalable and reliable
// Server side encryption
// Move static content to S3
// User files
// JS
// CSS
// Images
// Videos

// 7)[Memory Cache]
// Move the following data to a Memory Cache such as Elasticache to reduce load and latency:
// Frequently accessed content from MySQL
// First, try to configure the MySQL Database cache to see if that is sufficient to relieve 
// the bottleneck before implementing a Memory Cache
// Session data from the Web Servers
// The Web Servers become stateless, allowing for Autoscaling
// Reading 1 MB sequentially from memory takes about 250 microseconds, while reading from SSD takes 4x and from disk takes 80x longer.1

// Most services are read-heavy vs write-heavy

// 8)[Add autoscaling]
// Consider a managed service such as AWS Autoscaling
// Create one group for each Web Server and one for each Application Server type, place each group in multiple availability zones
// Set a min and max number of instances
// Trigger to scale up and down through CloudWatch
// Simple time of day metric for predictable loads or
// Metrics over a time period:
// CPU load
// Latency
// Network traffic
// Custom metric

// 9)[Sharding] distributes data across different databases such that each database can 
// only manage a subset of the data. Taking a users database as an example, as the number 
// of users increases, more shards are added to the cluster.

// Similar to the advantages of federation, sharding results in less read and write traffic, 
// less replication, and more cache hits. Index size is also reduced, which generally improves 
// performance with faster queries. If one shard goes down, the other shards are still 
// operational, although you'll want to add some form of replication to avoid data loss. 
// Like federation, there is no single central master serializing writes, allowing you to 
// write in parallel with increased throughput.

// Common ways to shard a table of users is either through the user's last name initial
//  or the user's geographic location.

// Application [User(Behrooz)]
//    |
// Load Balancer
//   |             |           |       
// User[A-C]    User[C-M]   User[M-Z]


// ************************************************************
// NO SQL TYPE
// ************************************************************
// 1) Key-Value Store: [Redis, Dynamo DB]
// A key-value store generally allows for O(1) reads and writes and is often backed 
// by memory or SSD

// Key-Value store is a storage system where data is stored in form of key and value pairs. 
// When we say in-memory key-value store, by that we mean that the key-value pairs are stored 
// in primary memory(RAM)

// Limitation:
// Primary memory is limited(much lesser size and expensive than secondary) 
//therefore Redis cannot store large files or binary data

// As we saw that Redis stores everything in primary memory. Primary memory is volatile 
// and therefore we will loose all stored data once we restart our Redis server or computer. 
// Therefore we need a way for datastore persistance

// 2) Document Store [MongoDB, Dynamo DB]
// A document store is centered around documents (XML, JSON, binary, etc), where a document 
// stores all information for a given object. Document stores provide APIs or a query language 
// to query based on the internal structure of the document itself.

// 3) Graph Database [NeoJs]
// In a graph database, each node is a record and each arc is a relationship between two nodes. 
// Graph databases are optimized to represent complex relationships with many foreign keys or 
// many-to-many relationships.
// Graphs databases offer high performance for data models with complex relationships, such as a social network

// ************************************************************
// SQL vs NO SQL
// ************************************************************
// Reasons for SQL:
// Structured data
// Strict schema
// Relational data
// Need for complex joins
// Transactions
// Clear patterns for scaling
// More established: developers, community, code, tools, etc
// Lookups by index are very fast


// Reasons for NoSQL:
// Semi-structured data
// Dynamic or flexible schema
// Non-relational data
// No need for complex joins
// Store many TB (or PB) of data
// Very data intensive workload
// Very high throughput for IOPS


// ************************************************************
// Caching
// ************************************************************

// 1) Client Caching:
// 1-1) Redux
// 1-2) Cookies are used to store configuration related information, rather than actual data itself.
// 1-3) Web storage supports persistent data storage, similar to cookies but with a greatly enhanced capacity and no information stored in the HTTP request header. [1]

// 2) CDN Caching
// 3) Web server caching (Nginx)

// 4) Database caching

// 5) Application caching
// In-memory caches such as Memcached and Redis are key-value stores between your application 
// and your data storage

// Suggestion for caching:
//   User sessions
//   Fully rendered web pages
//   Activity streams
//   User graph data


// ************************************************************
// Messaging Queue [Redis, Amazon SQS]
// ************************************************************

// Message queues receive, hold, and deliver messages. If an operation is too slow to 
// perform inline, you can use a message queue with the following workflow:

// An application publishes a job to the queue, then notifies the user of job status
// A worker picks up the job from the queue, processes it, then signals the job is complete

// The user is not blocked and the job is processed in the background. During this time, 
// the client might optionally do a small amount of processing to make it seem like the task 
// has completed. For example, if posting a tweet, the tweet could be instantly posted to your 
// timeline, but it could take some time before your tweet is actually delivered to all of 
// your followers.

// ************************************************************
// HTTP Request
// ************************************************************

// A basic HTTP request consists of a verb (method) and a resource (endpoint). 
// Below are common HTTP verbs:

// Verb	    Description	                                                Idempotent*	Safe	   Cacheable
// GET	    Reads a resource	                                          Yes	              	 Yes
// POST	    Creates a resource or trigger a process that handles data	  No	         	       Yes if response contains freshness info
// PUT	    Creates or replace a resource	                              Yes	        	       No
// PATCH	  Partially updates a resource	                              No	          	     Yes if response contains freshness info
// DELETE	  Deletes a resource	                                        Yes	            	   No

// *Can be called many times without different outcomes.



// ************************************************************
// Tiny URL Implementation Encoding
// ************************************************************


// A Better Solution is to use the integer id stored in the database and 
// convert the integer to a character string that is at most 6 characters long. 
// This problem can basically seen as a base conversion problem where we have a 10 digit 
// input number and we want to convert it into a 6 character long string.

// Below is one important observation about possible characters in URL.

// A URL character can be one of the following
// 1) A lower case alphabet [‘a’ to ‘z’], total 26 characters
// 2) An upper case alphabet [‘A’ to ‘Z’], total 26 characters
// 3) A digit [‘0’ to ‘9’], total 10 characters

// There are total 26 + 26 + 10 = 62 possible characters.

// So the task is to convert a decimal number to base 62 number.

// To get the original long URL, we need to get URL id in the database. 
// The id can be obtained using base 62 to decimal conversion.

// function to generate a short URL from int ID
function idToShortURL(id, base) {
  allPossibleChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  // console.log('allPossibleChars', allPossibleChars)

  let shortURL = []
  for(let i=0; i< id; i++) {
    const char = allPossibleChars.charAt(Math.floor(Math.random() * allPossibleChars.length))
    shortURL.push(char)
  }

  console.log('shortURL', shortURL)
}

idToShortURL(5)
