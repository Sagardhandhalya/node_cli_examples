const HOME_PAGE_CONTENT = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Title</title>
  </head>
  <body>
    <div class="main">
      <h1 class="title">
        Project Created Successfully, Click the button !!
        <br />
        <button class="button_slide slide_diagonal" id="button1">
          Click Me
        </button>
      </h1>
    </div>
    <link rel="stylesheet" href="./css/style.css" />
    <script src="./js/app.js"></script>
  </body>
</html>`;

const APP_JS = 
`let button = document.getElementById('button1')
button.addEventListener('click',()=>alert('button is working..'))`


const STYLE_CONTENT = `
html {
    height: 100%;
  }
  
body{
    height: 100%;
    margin: 0;
    background: #162944;
}
.title{
    text-align:center;
    box-shadow: rgb(87, 30, 57) 0px 7px 29px 0px;
    width: 50%;
    padding: 10%;
    font-size: 2rem;
    color: rgb(233, 27, 123);
}

.main{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
}

.button_slide {
    color: white;
    border: 2px solid rgb(216, 2, 134);
    background-color: #162944;
    border-radius: 0px;
    padding: 18px 36px;
    display: inline-block;
    font-family: "Lucida Console", Monaco, monospace;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    box-shadow: inset 0 0 0 0 #D80286;
    -webkit-transition: ease-out 0.4s;
    -moz-transition: ease-out 0.4s;
    transition: ease-out 0.4s;
    margin-top: 50px;
}

.slide_diagonal:hover {
    box-shadow:inset 400px 0 0 0 #D80286;
  }

`


let MAIN_FOLDER = ['icons','css','fonts','images','js','third-party']
let FOLDER_IN_JS = ['helpers','components','pages','services','config']



module.exports = {HOME_PAGE_CONTENT, MAIN_FOLDER, FOLDER_IN_JS, STYLE_CONTENT , APP_JS}