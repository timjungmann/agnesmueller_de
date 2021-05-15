const el1 = document.getElementById('nl1');
const el2 = document.getElementById('nl2');
const el3 = document.getElementById('nl3');
const el4 = document.getElementById('nl4');
const el5 = document.getElementById('nl5');
const el6 = document.getElementById('nl6');
const el7 = document.getElementById('nl7');
const el8 = document.getElementById('nl8');
const el9 = document.getElementById('nl9');
const el10 = document.getElementById('nl10');

let elements = [el1, el2, el3, el4, el5, el6, el7, el8, el9, el10]

for(let element of elements){
  element.onclick = function(){
    element.classList.add('underline');
  }
  element.onauxclick = function(){
    element.classList.add('underline');
  }
}