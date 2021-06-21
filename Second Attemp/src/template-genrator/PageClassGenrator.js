const {convertCamelCaseToKababCase} = require('./componetClassGenrator')
function pageClassGenretor(name){
return `class ${name} extends HTMLElement {
  connectedCallback() {
    this.stateObserver = setInterval(this.observeState, 200);
    this.render();
  }
  
  disconnectedCallback() {
    clearInterval(this.stateObserver);
  }
  
  observeState = () => {
    if (JSON.stringify(Store.getinstance()) !== JSON.stringify(this.data)) {
      this.data = Store.getinstance();
      this.render();
      }
  };
  
  render() {
    this.innerHTML ="<p>${name} page is ready..</p>"
  }
  constructor() {
    super();
  }
}
window.customElements.define("${convertCamelCaseToKababCase(name)+"-page"}",${name});

`
}

module.exports = {pageClassGenretor}