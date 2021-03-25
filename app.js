/* 
    1 : get special-text-area,1-1 : get text content of it, 1-2 :make it empty
    2 : when window loaded,function start 
    3 : increase the var I , and till the @textspec has length type to the specia-text-area
    */
// 1
var specarea = document.querySelector('.special-text');
// 1-1
var textspec = specarea.textContent;
// 1-2
specarea.textContent = '';
// 2
var i = 0;
window.addEventListener('load',() => showspectitle());
function showspectitle(){
    // 3
    if(i < textspec.length){
      specarea.innerHTML += textspec.charAt(i);
      i++;
      setTimeout(showspectitle,150);
    }
}