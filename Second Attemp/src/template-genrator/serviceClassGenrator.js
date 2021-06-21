function serviceClassGenrator(name){
return `const ${name} =(()=>{
    return {

    }
})();

export default ${name};
`
}
module.exports = {serviceClassGenrator}
