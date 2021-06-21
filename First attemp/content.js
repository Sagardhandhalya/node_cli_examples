const HOME_PAGE_CONTENT = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>
</head>
<body>
    <div class="main">
    <h1 class="title">Project Created Successfully</h1>
    
</div>
    <link rel="stylesheet" href="./css/style.css">
</body>
</html>`;

const STYLE_CONTENT = `
.title{
    text-align:center;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    width: 50%;
    padding: 10%;
    font-size: 2rem;
    color: rgb(83, 114, 114);
}

.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}
`


let MAIN_FOLDER = ['icons','css','fonts','images','js','third-party']
let FOLDER_IN_JS = ['helpers','componenets','pages','services','config']



module.exports = {HOME_PAGE_CONTENT, MAIN_FOLDER, FOLDER_IN_JS, STYLE_CONTENT}