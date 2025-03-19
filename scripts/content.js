//get the body of the website
const body = document.getElementsByTagName("body");

//create a new style sheet to modify content
const sheet = new CSSStyleSheet();

//how to modify content
//sheet.replaceSync("*{background-color: lightgrey;}");

//apply sheet to body
document.adoptedStyleSheets = [sheet];


//get the contents of the website
const content = document.getElementsByTagName("*");

//loop through contents
for(let i =0; i<content.length; i++){ 
  //get content's current font size
  var font = window.getComputedStyle(content[i], null).getPropertyValue('font-size');
  content.innerHTML = font+"";

  //create a new style sheet to modify content
  //const sheet = new CSSStyleSheet();

  //define how to modify content
  sheet.replaceSync("*{background-color: pink; font-size: "+1.5+"rem;}");

  //apply sheet to content
  content[i].adoptedStyleSheets = [sheet];
}
