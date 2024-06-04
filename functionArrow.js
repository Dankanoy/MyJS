//this is the traditional function of js 

const add = function(a, b){

  return a + b;
};

console.log(add(2, 3));

//this is an arrow function
const add1 = (a, b)=> {
return a + b;
};

//with no block and only a single expression
const add2 = (a, b) => a + b;

//arrow funtion with no parameter
const noParameters  = () => console.log("hello no parameters");

noParameters();

//arrow function with 1 parameter

const add3 = a => a = console.log("hello world");
add3()

// arrow function with object literals 

const objectL = (name,age) => ({name, age})

console.log(objectL("John", 25));

const  person = {
  name: "John",
  age: 23,
  greet: function(){ console.log(`My name is ${this.name}`)}

}

person.greet()


//syntax of the arrow funtion is const *FunctionName = () => {}

//function arrow practice 

const hello = (a, b) => {
  return a + b
};

const hi = (b,c) =>{
  console.log("hi")
}

const hey = (d, e ) => {
  return d + e ;
}

const huy = () => {

console.log("huy")
}

const dataSection = document.getElementById('sectionData');

const dataInputing = () => {
  return dataSection.innerHTML = "SECTION";
}

dataInputing();


const naming = document.getElementById('nameInput');
const submitBot = document.getElementById('submit');
const inputedName = document.getElementById('inputedName');


const ign = () => {
  inputedName.innerHTML += naming.value;
}
