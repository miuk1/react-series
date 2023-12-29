const reactElement = {
    type: 'a',
    props: {
        href: 'http://www.google.com',
        target: '_blank'
    },
    style: {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
        textDecoration: 'underline',
        cursor: 'pointer',
        textAlign: 'center',
        lineHeight: '50px',
        margin: '10px',
        padding: '10px',
        border: '1px solid red',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        display: 'block',
        width: '400px',
        height: '50px',
        boxSizing: 'border-box',
        backgroundColor: 'yellow'
    },
    children: 'Click me to visit Google.'
}


const rootContainer = document.getElementById('root')

function customRender(reactElement, rootContainer) {
    domElement = document.createElement(reactElement.type)
    domElement.href = reactElement.props.href
    domElement.target = reactElement.props.target
    domElement.innerHTML = reactElement.children

    Object.keys(reactElement.style).forEach((styleName) => {
        domElement.style[styleName] = reactElement.style[styleName]
    })

    return rootContainer.appendChild(domElement)
}

customRender(reactElement, rootContainer)