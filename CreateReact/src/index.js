// let rootInstance = null

// function render(element, container) {
//   console.log('render')
//   const prevInstance = rootInstance
//   // console.log('prevInstance', prevInstance)
//   const nextInstance = reconcile(container, prevInstance, element)
//   // console.log('nextInstance', nextInstance)
//   rootInstance = nextInstance
// }

// function reconcileChildren(instance, element) {
//   const dom = instance.dom
//   const childInstances = instance.childInstances
//   const nextChildElements = element.props.children || []
//   const newChildInstances = []
//   const count = Math.max(childInstances.length, nextChildElements.length)
//   for(let i=0; i< count; i++) {
//     const childInstance = childInstances[i]
//     const childElement = nextChildElements[i]
//     const newChildInstance = reconcile(dom, childInstance, childElement)
//     newChildInstances.push(newChildInstance)
//   }
//   return newChildInstances.filter(instance => instance !== null)
// }

// function reconcile(parentDom, instance, element) {
//   if(instance === null ) {
//     // create instance
//     const newInstance = instantiate(element)
//     parentDom.appendChild(newInstance.dom)
//     return newInstance
//   } else if(instance.element.type === element.type) {
//     // update instance
//     updateDomProperties(instance.dom, instance.element.props, element.props)
//     instance.childInstances = reconcileChildren(instance, element)
//     instance.element = element
//     return instance
//   } else {
//     console.log('replace instance')
//     // replace instance
//     const newInstance = instantiate(element)
//     parentDom.replaceChild(newInstance.dom, instance.dom)
//     return newInstance
//   }
// }

// function updateDomProperties(dom, prevProps, nextProps) {
//   const isListener = name => name.startsWith('on')
//   const isAttributes = name => !isListener(name) && name !== 'children'

//   Object.keys(prevProps).filter(isListener).forEach(name => {
//     const eventType = name.toLowerCase().substring(2)
//     dom.removeEventListener(eventType, prevProps[name])
//   })

//   Object.keys(prevProps).filter(isAttributes).forEach(name => {
//     dom[name] = null
//   })

//   Object.keys(nextProps).filter(isListener).forEach(name => {
//     const eventType = name.toLowerCase().substring(2)
//     dom.addEventListener(eventType, nextProps[name])
//   })

//   Object.keys(nextProps).filter(isAttributes).forEach(name => {
//     dom[name] = nextProps[name]
//   })
// }

// function instantiate(element) {
//   const { type, props } = element

//   const isTextElement = type === 'TEXT_ELEMENT'
//   const dom = isTextElement 
//   ? document.createTextNode('')
//   : document.createElement(type)

//   updateDomProperties(dom, [], props)

//   const childElements = props.children || []
//   // childElements.forEach(child => render(child, dom))
//   const childInstances = childElements.map(instantiate)
//   const childDoms = childInstances.map(childInstance => childInstance.dom)
//   childDoms.forEach(childDom => dom.appendChild(childDom))

//   const instance =  { dom, element, childInstances }
//   return instance

//   // parentContainer.appendChild(dom)
// }

// const TEXT_ELEMENT = 'TEXT_ELEMENT'

// function createTextElement(value) {
//   return createElement(TEXT_ELEMENT, { nodeValue: value })
// }

// function createElement(type, config, ...args) {
//   const props = Object.assign({}, config);
//   const hasChildren = args.length > 0;
//   const rawChildren = hasChildren ? [].concat(...args) : [];
  
//   props.children = rawChildren
//     .filter(c => c !== null && c !== false)
//     .map(c => c instanceof Object ? c : createTextElement(c))

//   return { type, props };
// }


// const Behrooz = {
//   render,
//   createElement
// }

// function clickText() {
//   // alert('Hello I got clicked!')
// }

// const linkElement = {
//   type: 'a',
//   props: {
//     href: '/bar',
//     onClick: clickText(),
//     children: [
//       {
//         type: 'TEXT_ELEMENT',
//         props: {
//           nodeValue: 'name'
//         }
//       }
//     ]
//   }
// }

// const container = document.getElementById('root')
// Behrooz.render(linkElement, container)

// const result = createElement(
//   'div',
//   { id: 'container' }, 
//   createElement(
//     'span',
//     { id: 'inner'},
//     'TEST'
//   )  
// )


// // console.log('result', result)


// const rootDom = document.getElementById('root')

// function tick() {
//   const time = new Date().toLocaleTimeString()
//   // const clockElement = <h1>{time}</h1>
//   const clockElement = createElement(
//     'h1',
//     null, 
//     time
//   )
//   Behrooz.render(clockElement, rootDom)
// }

// tick()
// setInterval(tick, 1000)













