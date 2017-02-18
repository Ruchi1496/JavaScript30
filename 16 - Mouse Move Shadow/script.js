(function(){
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 150; //100px
function shadow(e){
  // const width= hero.offsetWidth;
  // const height= hero.offsetHeight; OR
  const { offsetWidth: width, offsetHeight: height} = hero;
  let { offsetX:x , offsetY: y} = e; //same as e.offSetX and e.offSetY
  // console.log(x,y);
  if(this !== e.target){ //this and target might be different
      x=x+ e.offsetLeft;
      y=y+ e.offsetTop;
  }
  const xWalk= Math.round((x/width*walk)-(walk/2));
  const yWalk= Math.round((y/height*walk)-(walk/2));
  text.style.textShadow= `
        ${xWalk}px ${yWalk}px 0 rgba(255,0,0,0.7),
        ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
        ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
        ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
  `;
}

hero.addEventListener('mousemove',shadow);
})()
