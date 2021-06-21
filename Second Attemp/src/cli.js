const arg = require("arg");
const main = require("./main.js");
function parseOptionsFromArgs(rawArgs) {
  let args = arg(
    {
      "--project": String,
      "--component": String,
      "--service": String,
      "--page": String,
      "--help": Boolean,
      "-n": "--project",
      "-c": "--component",
      "-s": "--service",
      "-p": "--page",
      "-h": "--help",
    },
    {
      permissive: true,
      argv: rawArgs.slice(2),
    }
  );
  return {
    extra:args._,
    projectName: args["--project"],
    serviceName: args["--service"],
    componentName: args["--component"],
    pageName: args["--page"],
    help: args["--help"] || false,
  };
}
function cli(args) {
  let {extra,projectName,serviceName,componentName,pageName,
    help,
  } = parseOptionsFromArgs(args);
  
  if (projectName) {
    main.createProject(projectName);
  }

  if (serviceName) {
    main.createService(serviceName);
  }

  if (componentName) {
    main.createComponent(componentName,extra);
  }

  if (pageName) {
    main.createPage(pageName);
  }

  if(!pageName && !componentName && !serviceName && !projectName){
  
    console.log(
`${help ? ``:`incorrect command !!! please check the usage`} 
    Options:
      creating new project : hb -n <project_namr>
      creating new component  : hb -c <component_name> 
      creating new component with attribute : hb -c <component_name> --attrs <attribute_1> <attribute_2> <attribute_3>
      --project OR -n:create new Project,      
      --component OR -c:Create new component,
      --service OR -s:Create new service,
      --page OR -p:Create new page,
      --help OR -h:"Get help"
        `
      );
    
  }

}

module.exports = { cli };
