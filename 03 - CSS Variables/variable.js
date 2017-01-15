const inputs=document.querySelectorAll('.controls input'); //this gives a list of nodes
//if we want to use methods of array then we have to convert nodelist to an array.

function handleUpdate(){
  const suffix=this.dataset.sizing || ''; // '' is for the attributes wihch doesnt need sizing i.e color
  //  console.log(suffix);
  //documentElement gives the current element i.e spacing,blur or base
  document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
  //this.value gives the new changed value of this element
  //data-sizing is a data- attribute
//dataset is an object that containes all data attribute from that specific element
}

inputs.forEach(input => input.addEventListener('change',handleUpdate) )
inputs.forEach(input => input.addEventListener('mousemove',handleUpdate) )
