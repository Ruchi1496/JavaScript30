const panels= document.querySelectorAll('.panel');
function toggleOpen(){
  this.classList.toggle('open');
}
function toggleActive(e){
  console.log(e.propertyName);
  if(e.propertyName.includes('flex'))
  this.classList.toggle('open-active');
}
panels.forEach(panel => panel.addEventListener('click',toggleOpen));
                                                  // toggleOpen() runs on a page load. but here we are giving it only a reference to go to that function and run.
panels.forEach(panel => panel.addEventListener('transitionend',
toggleActive));
