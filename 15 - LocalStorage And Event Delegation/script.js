const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault(); //prevents the page from reloading after submitting(sending the data to an external source)
  const text=(this.querySelector('[name=item]')).value; // 'this' is the whole form here as its running on addItems
  const item={
    text, //we can also use ES6 property for writing text: text
    done: false
  }
  items.push(item);
  populateList(items,itemsList);
  localStorage.setItem('items',JSON.stringify(items)); //localStorage is just a (key,value) store so we may only use strings
  this.reset();
}

function populateList(plates=[], platesList) {  //plates = [] sets the default value of plates to an empty array
                                                // platesList will be an html element
  platesList.innerHTML= plates.map((plate,i)=>{ //by using lable for item${i} it will check the box when we click on the lable //id and for are the same things
    return `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `;
  }).join(''); //map will return an array and we need to assign a string to innerHTML

}

function toggleDone(e) {
  if (!e.target.matches('input')) return; // skip this unless it's an input
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
}

addItems.addEventListener('submit',addItem);
itemsList.addEventListener('click', toggleDone);

populateList(items,itemsList);
