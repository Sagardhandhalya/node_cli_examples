const fs = require("fs");
const data = require("./config.js");
const ora = require("ora");
const { componetClassGenrator } = require("./template-genrator/componetClassGenrator.js");
const { pageClassGenretor } = require("./template-genrator/PageClassGenrator.js");
const {serviceClassGenrator } = require("./template-genrator/serviceClassGenrator.js");

function showCommonError(name , spinner)
{
  spinner.fail(`creating ${name} opration Failed : Possible Errors `)
  spinner.info(" 1. you are not is right Folder , cd into project folder.. !")
  spinner.info(" 2. File system error File already exits") 
}

function createProject(projectName) {
  const spinner = ora("creating files ...").start();
  function createFolder(name) {
    fs.mkdir(`${projectName}/${name}`, { recursive: true }, (err) => {
      if (err) throw err;
      if (name === "css") {
        fs.writeFile(
          `${projectName}/css/style.css`,
          `${data.STYLE_CONTENT}`,
          { flag: "w" },
          function (err) {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${projectName}/index.html`,
          `${data.HOME_PAGE_CONTENT}`,
          { flag: "w" },
          function (err) {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${projectName}/readMe.md`,
          `${data.HOME_PAGE_CONTENT}`,
          { flag: "w" },
          function (err) {
            if (err) throw err;
          }
        );
        fs.writeFile(
          `${projectName}/.gitignore`,
          `${data.HOME_PAGE_CONTENT}`,
          { flag: "w" },
          function (err) {
            if (err) throw err;
          }
        );
      }
      else if(name === 'js')
      {
        fs.writeFile(
          `${projectName}/js/app.js`,
          `${data.APP_JS}`,
          { flag: "w" },
          function (err) {
            if (err) throw err;
          }
        );
      }
      spinner.succeed(`${name} is Cretaed `);
    });
  }
  data.MAIN_FOLDER.forEach(async (element) => {
    spinner.start();
    await createFolder(element);
  });

  data.FOLDER_IN_JS.forEach(async (path) => {
    await createFolder(`js/${path}`);
  });
}

function createComponent(name,attributesArray) {
  const spinner = ora(`creating componenet ${name} ...`).start();

  fs.mkdir(`js/components/${name}`, (err) => {
    if (err) {  
      showCommonError(name , spinner)  
      return;
    }
    let isAttributes = attributesArray.splice(0,1)[0] === '--attrs';
    if(!isAttributes && attributesArray.length > 0) {
      spinner.fail(`incorrect command ! not able to create ${name} component try with correct command again.`);
      spinner.info("usage : hb -c <component_name> --attrs <attribute_1_name> <attribute_2_name> <attribute_3_name>");
      return;
    }
    fs.writeFile(
      `js/components/${name}/${name}.component.js`,
      `${componetClassGenrator(name,attributesArray)}`,
      { flag: "w" },
      function (err) {
        if (err) {
          showCommonError(`${name}.component.js`,spinner)
          return;
        }
        spinner.succeed(
          `js/components/${name}/${name}.component.js file written `
        );
      }
    );
    fs.writeFile(
      `js/components/${name}/${name}.component.css`,
      ``,
      { flag: "w" },
      function (err) {
        if (err) {
          showCommonError(`${name}.component.css`,spinner)
          return;
        }
        spinner.succeed(
          `js/components/${name}/${name}.component.css file written.`
        );
      }
    );
  });
}

function createService(name) {
  const spinner = ora("creating files ...").start();
  fs.writeFile(
    `js/services/${name}.service.js`,
    `${serviceClassGenrator(name)}`,
    { flag: "w" },
    function (err) {
      if (err) {
        showCommonError(name , spinner)  
        return;
      }
      spinner.succeed(
        `js/services/${name}.service.js file written `
      );
    }
  );
}

function createPage(name) {
  const spinner = ora("creating files ...").start();
  fs.mkdir(`js/pages/${name}`, (err) => {
    if (err) {
      showCommonError(name , spinner)  
      return;
    }
    spinner.succeed(`js/pages/${name} created `);

    fs.writeFile(
      `js/pages/${name}/${name}.page.js`,
      `${pageClassGenretor(name)}`,
      { flag: "w" },
      function (err) {
        if (err){
          spinner.fail("you are not is right Folder , cd into project folder.. !");
          return;
        } 
        spinner.succeed(
          `js/pages/${name}/${name}.component.js file written `
        );

      }
    );
    fs.writeFile(
      `js/pages/${name}/${name}.page.css`,
      ``,
      { flag: "w" },
      function (err) {
        if (err) {
          spinner.fail("you are not is right Folder , cd into project folder.. !");
          return;
        }
        spinner.succeed(
          `js/pages/${name}/${name}.component.js file written `
        );
      }
    );
  });
}

module.exports = { createProject, createComponent, createService, createPage };
