// how react see the html which is return from function
// or we can say how react see after compiling 


// making customRender()
function customRender(reactElement, container){
    /*
    // element create
    const domElement = document.createElement(reactElement.type)
    
    // add children to it
    domElement.innerHTML = reactElement.children
    
    // setting attribute value one by one makes it hard coded
    // set attribute values
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    // add to main container
    container.appendChild(domElement)
    
    */
   
   // modular code
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children
   for (const prop in reactElement.props) {
        if(prop === 'children')    continue

        domElement.setAttribute(prop, reactElement.props[prop])
   }
   container.appendChild(domElement)

}

// react try to make tree from that element
const reactElement = {
    type: 'a',   // tells what type of element it is like 'a' or 'div' etc
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

// a method which render this
// this element adds to the root
// customRender(kya inject karu, kaha par inject karu)

customRender(reactElement, mainContainer)