const elementId = document.getElementById("myId");
const classId = document.getElementsByClassName('myClass');
const tagName = document.getElementsByTagName('h3')
const selector = document.querySelector('.selectorCon');
const multiSelect = document.querySelector('.mainCons .cons2')
const body = document.querySelector('body')

body.style.display = 'inline-block';
body.style.textAlign = 'center'


//element by ID example 
elementId.innerHTML = "Hello i am a get element by ID";
//elementbyclassname
for(let i = 0; i < classId.length; i++)
  {
    classId[i].style.backgroundColor = 'yellow';
  }
//elementbytagname 
for(let i = 0; i < tagName.length; i++)
  {
    tagName[i].style.color = 'Red';
  }

//element querySelector

selector.innerHTML = "hey, I am the quey selector ";


//choosig the specific query selector'
multiSelect.style.backgroundColor ='green'


  
  