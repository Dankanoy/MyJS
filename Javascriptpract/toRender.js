
const list = [{
  name: 'Hello',
  level: 100,
},{
  name: 'geyap',
  level: 24,
},{
  name: 'landon',
  level: '?????',
}
];

createList();


function createList(){
  
  for(let i = 0; i < list.length; i++){

    const {name, level} = list[i];
    
    const html = `<h1>${name}</h1>
    <h1>${level}</h1>`

    document.querySelector('.listing').innerHTML += html;

  }
}

function toRender(){

  const html = `<div style="padding:30px; ">Hello Finnaly! I got rendered</div>`;

  document.querySelector('.render').innerHTML = html;

}

toRender();

function toRender2 (){

  const html = `<h1>Hey i am the next render!</h1>`

  const nowRender = document.querySelector('.render2').innerHTML += html;

}


function toRender3(){
  const nowRender = document.querySelector('.render3').innerHTML = `<h1> hey i got minimized by the code!</h1>`;

}

toRender3()
