let cursorOne=document.querySelector('.cursor1');
let cursorTwo=document.querySelector('.cursor2');

document.addEventListener('mousemove',(event)=>
{
    cursorOne.style.top=`${event.clientY}px`;
    cursorOne.style.left=`${event.clientX}px`;
    cursorTwo.style.top=`${event.clientY}px`;
    cursorTwo.style.left=`${event.clientX}px`;
})
document.addEventListener('click',(event)=>
{
   cursorOne.classList.toogle('mouseSize');
    
})
document.addEventListener('mouseup',()=>
{
    cursorOne.style.width="50px";
    cursorOne.style.height="50px";

})