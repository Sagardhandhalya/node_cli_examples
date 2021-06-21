const fs = require('fs')
const data = require('./content.js')
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'blue'; 
    spinner.text = 'crating File..';
}, 1000);

setTimeout(() => {
	spinner.color = 'cyan';
	
    spinner.succeed("all file created !!")
}, 4000);
// function createFolder(name){
//     fs.mkdir(name,()=>{
//         console.log(`${name} is created ---`);
//     })
// }

// data.MAIN_FOLDER.forEach(element => {
//     createFolder(element)
// });

// data.FOLDER_IN_JS.forEach(path =>{
//     createFolder(`js/${path}`)
// })

// fs.writeFile('index.html', `${data.HOME_PAGE_CONTENT}`, function (err) {
//     if (err) throw err;
//   });
//   fs.writeFile('css/style.css', `${data.STYLE_CONTENT}`, function (err) {
//     if (err) throw err;
//   });

module.exports={}


