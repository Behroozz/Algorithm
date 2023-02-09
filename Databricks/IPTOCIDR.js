// IP to CIDR
// An IP address is a formatted 32-bit unsigned integer where each group of 8 bits is printed as a decimal number and the dot character '.' splits the groups.

// For example, the binary number 00001111 10001000 11111111 01101011 (spaces added for clarity) formatted as an IP address would be "15.136.255.107".
// A CIDR block is a format used to denote a specific set of IP addresses. It is a string consisting of a base IP address, followed by a slash, followed by a prefix length k. The addresses it covers are all the IPs whose first k bits are the same as the base IP address.

// For example, "123.45.67.89/20" is a CIDR block with a prefix length of 20. Any IP address whose binary representation matches 01111011 00101101 0100xxxx xxxxxxxx, where x can be either 0 or 1, is in the set covered by the CIDR block.
// You are given a start IP address ip and the number of IP addresses we need to cover n. Your goal is to use as few CIDR blocks as possible to cover all the IP addresses in the inclusive range [ip, ip + n - 1] exactly. No other IP addresses outside of the range should be covered.

// Return the shortest list of CIDR blocks that covers the range of IP addresses. If there are multiple answers, return any of them.

// Example 1:

// Input: ip = "255.0.0.7", n = 10
// Output: ["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]
// Explanation:
// The IP addresses that need to be covered are:
// - 255.0.0.7  -> 11111111 00000000 00000000 00000111
// - 255.0.0.8  -> 11111111 00000000 00000000 00001000
// - 255.0.0.9  -> 11111111 00000000 00000000 00001001
// - 255.0.0.10 -> 11111111 00000000 00000000 00001010
// - 255.0.0.11 -> 11111111 00000000 00000000 00001011
// - 255.0.0.12 -> 11111111 00000000 00000000 00001100
// - 255.0.0.13 -> 11111111 00000000 00000000 00001101
// - 255.0.0.14 -> 11111111 00000000 00000000 00001110
// - 255.0.0.15 -> 11111111 00000000 00000000 00001111
// - 255.0.0.16 -> 11111111 00000000 00000000 00010000
// The CIDR block "255.0.0.7/32" covers the first address.
// The CIDR block "255.0.0.8/29" covers the middle 8 addresses (binary format of 11111111 00000000 00000000 00001xxx).
// The CIDR block "255.0.0.16/32" covers the last address.
// Note that while the CIDR block "255.0.0.0/28" does cover all the addresses, it also includes addresses outside of the range, so we cannot use it.
// Example 2:

// Input: ip = "117.145.102.62", n = 8
// Output: ["117.145.102.62/31","117.145.102.64/30","117.145.102.68/31"]

// Constraints:

// 7 <= ip.length <= 15
// ip is a valid IPv4 on the form "a.b.c.d" where a, b, c, and d are integers in the range [0, 255].
// 1 <= n <= 1000
// Every implied address ip + x (for x < n) will be a valid IPv4 address.

// Notes
// This is an interesting question for me to learn something about CIDR, but its description is poorly written.

// However, there's a buggy test case below that expects wrong result.

// "0.0.0.0"
// 2
// should return [ 0.0.0.0/31], the test case expects ["0.0.0.0/32","0.0.0.1/32"].

// Idea
// To get a list of CIDR starting from ip to match the number n, we need to increment the ip step by step to match them,
// Note that for each CIDR, it can cover 2^(32 - # of mask bits) ips. For example, 255.0.0.8/29, which has a binary form of 11111111 00000000 000000000 00001xxx can cover 2^3 = 8 ips.
// Also note that it does not mean you can always pick the largest number less or equal to n to increment. For example, for test case ip = "255.0.0.7", n = 10, you might want to pick mask bits = 29, so we can cover 8 ips in one step, however, it's not correct. Because the ip has a binary form of 11111111 00000000 00000000 00000111, with 29-bit mask, you get 11111111 00000000 00000000 00000xxx. This will include ip like 11111111 00000000 00000000 00000000, i.e., (255.0.0.0), which is smaller than the current ip.
// If you try a few examples you will see that the number of mask bits is determined by the minimum of
// the # of bits from rightmost 1 to the end bit of ip and
// the # of bits from leftmost 1 to the end bit of n.
// For example, for the test case ip = "255.0.0.7", n = 10,
// ip in binary form 11111111 00000000 00000000 00000111 , from rightmost 1 to end, there's 0 bits, and n in binary form 1010, from leftmost 1 to end, there're 3 bits. So we will increment ip by 2^0 = 1, and decrement n by 2^0 = 1. With # of mask bits = 32 - 0 = 32, we get CIDR: ${ip}/${# of mask bits} = 255.0.0.7/32.
// ip now becomes 11111111 00000000 00000000 00001000, from rightmost 1 to end, there're 3 bits, and n becomes 1001, from leftmost 1 to end, there're 3 bits. So we will increment ip by 2^3 = 8, and decrement n by 2^3 = 8. With # of mask bits = 32 - 3 = 29, we get CIDR: ${ip}/${# of mask bits} = 255.0.0.8/29.
// ip now becomes 11111111 00000000 00000000 00010000, from rightmost 1 to end, there're 4 bits, and n becomes 1, from leftmost 1 to end, there're 0 bits. So we will increment ip by 2^0 = 1, and decrement n by 2^0 = 1. With # of mask bits = 32 - 0 = 32, we get CIDR: ${ip}/${# of mask bits} = 255.0.0.16/32.
// n becomes 0, stop.
// First version without bit operation.

var ipToCIDR = function (ip, n) {
  // find number of bits from rightmost one to the right end
  const findBitNum = (num) => {
    // if (num == 0) return 0; // this is to pass the buggy test case
    let ans = 0,
      numStr = num.toString(2).padStart(32, "0");
    while (ans < 32 && numStr[31 - ans] != "1") ans += 1;
    return ans;
  };
  const numToIp = (num) =>
    [24, 16, 8, 0].map((i) => Math.floor(num / 2 ** i) % 256).join(".");

  const ans = [];
  let start = ip.split(".").reduce((acc, num) => 256 * acc + parseInt(num), 0);

  while (n > 0) {
    const len1 = findBitNum(start),
      len2 = n.toString(2).length - 1;
    const size = Math.min(len1, len2);
    ans.push(numToIp(start) + `/${32 - size}`);
    start += 2 ** size;
    n -= 2 ** size;
  }

  return ans;
};
// Second version with bit operation, slightly cleaner.

const ipToCIDR = function (ip, n) {
  // this findBitNum passes the buggy test case by coincidence.
  const findBitNum = (num) => num.toString(2).length - 1;
  const numToIp = (num) =>
    [24, 16, 8, 0].map((i) => (num >>> i) % 256).join(".");
  let start = ip.split(".").reduce((acc, x) => 256 * acc + parseInt(x), 0);

  const ans = [];
  while (n > 0) {
    // start & -start will clear all bits before rightmost 1
    const len1 = findBitNum(start & -start),
      len2 = findBitNum(n);
    const len = Math.min(len1, len2);
    ans.push(numToIp(start) + `/${32 - len}`);
    start += 1 << len;
    n -= 1 << len;
  }
  return ans;
};
