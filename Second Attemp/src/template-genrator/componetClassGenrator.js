
function convertCamelCaseToKababCase(str){
    
        return str.split('').map((letter, idx) => {
          return letter.toUpperCase() === letter
           ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
           : letter;
        }).join('');
}

function constructAttribute(attributesArray){
    return attributesArray.map((attr) =>{
     return ` 
  get ${attr}() {
    return this.getAttribute("${attr}");
  }
      `
    }).join('')
}

function componetClassGenrator(componentName,attributesArray){

return `class ${componentName} extends HTMLElement {
  ${constructAttribute(attributesArray)}
  connectedCallback() {
    this.render();
  }
  
  static get observedattributes() {
    return [""];
  }
  
  attributeChangedCallback(attrName, oldVal, newVal) {}
  
  render() {
    this.innerHTML = "<p>${componentName} is Working ...</p>";
  }
  
  constructor() {
    super();
  }
}

window.customElements.define('${convertCamelCaseToKababCase(componentName)+'-component'}', ${componentName});
`
}

module.exports = {componetClassGenrator,convertCamelCaseToKababCase}
