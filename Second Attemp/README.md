This pkg will help you in seeting up folder structure. with help of command you will able to add component , pages and services , no need to copy paste boiler plate code.

these are some command you can use:

```
Options:
          creating new project : hb -n <project_namr>
          creating new component  : hb -c <component_name> 
          creating new component with attribute : hb -c <component_name> --attrs <attribute_1_name> <attribute_2_name> <attribute_3_name>"
          --project OR -n:create new Project,      
          --component OR -c:Create new component,
          --service OR -s:Create new service,
          --page OR -p:Create new page,
          --help OR -h:"Get help"
```

you can also run this pkg withoute instaling with npx , command for that,

```
create new project : npx cjp-cli hb -n "project_name"
create compnent with name aattribute : npx cjp-cli hb -c "component_name" --attrs name
```