// Task 3.0 
// Copy the following data structure to the top of script.js:
// Menu data structure
// const menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];
//Update the menuLinksarray in script.js to this:

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];

//============Task1================
//Select and cache the <main>element in a variable named mainEl.
const mainEl=document.querySelector('main');
console.log(mainEl);
//Set the background color of mainElto the value stored in the --main-bgCSS custom property.
// Hint: Assign a string that uses the CSS var()function like this: 'var(--main-bg)'
mainEl.style.backgroundColor='var(--main-bg)';

//Set the content of mainElto <h1>SEI Rocks!</h1>.
mainEl.innerHTML='<h1>SEI Rocks!</h1>'


//Add a class of flex-ctrto mainEl.
//Hint: Element.classList API
mainEl.classList.add('flex-ctr');
// console.log(mainEl);
//ProgressCheck

//==============Task2================
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
// const topMenuEl = document.querySelector(#top-menu);
//Set the height topMenuElelement to be 100%.
topMenuEl.setAttribute('height','100%')
//Set the background color of topMenuElto the value stored in the --top-menu-bgCSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
//Add a class of flex-aroundto topMenuEl
topMenuEl.classList.add('flex-around');

console.log(topMenuEl);
console.log(mainEl.innerHTML);
console.dir(mainEl.innerHTML);

//============Task3=============


//Iterate over the entire menuLinksarray and for each "link" object:
for(elem of menuLinks){
// Create an <a>element.
const a = document.createElement('a');
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
a.setAttribute('href',elem.href);
// Set the new element's content to the value of the textproperty of the "link" object.
a.textContent = elem.text;
// Append the new element to the topMenuElelement.
topMenuEl.appendChild(a)
}
//Abraham ways of doing this taught in class
// menuLinks.forEach(obj => {
//     const a = document.createElement('a');
//     a.setAttribute('href',obj.href);
//     a.textContent =obj.text;
//     topMenuEl.appendChild(a)
// })
//when we use map() we have to use the return key not console.log()
//===========Task4============

//Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
//Set the height subMenuElelement to be 100%.
subMenuEl.style.height =  '100%'
//Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
//Add the class of flex-aroundto the subMenuElelement.
subMenuEl.classList.add('flex-around');

//Progress Check:
console.log(subMenuEl);
console.dir(subMenuEl)

//Set the CSS positionproperty of subMenuElto the value of absolute.
document.getElementById("sub-menu").style.position = "absolute";
//Set the CSS topproperty of subMenuElto the value of 0.
document.getElementById("sub-menu").style.top = "0";

//=========Task5=================

// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.
const topMenuLinks = document.querySelectorAll('a')
//kadir said this-const topMenuLinks = topMenuEl.getElementsByTagName("a");
// Declare a global showingSubMenuvariable and initialize it to false;
let showingSubMenuvariable = Boolean(false)

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click',function(event){


// The first line of code of the event listener function should call the event object's preventDefault()method.
event.preventDefault();
// The second line of code function should immediately return if the element clicked was not an <a>element.
console.log(event);
if(event.target.tagName.toLowerCase() !== 'A'){
  return;
}
// console.logthe content of the <a>to verify the handler is working.
console.log(event.target.text);
//Progress Check
// Ensure that clicking ABOUT, CATALOG, etc. logs out about, catalog, etc. when a link is clicked.
// Clicking anywhere other than on a link should do nothing.

//Next in the event listener, if the clicked <a>link has a class of active:
if(event.target.className==='active'){
// Remove the activeclass from the clicked <a>element.
event.target.remove('active');
// Set the showingSubMenuto false.
showingSubMenu=Boolean(false);
// Set the CSS topproperty of subMenuElto 0.
subMenuEl.top='0'
// returnto exit the handler.
return;
}
// Next, the event listener should remove a class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
// Hint: Removing a non-existent class from an element does not cause an error, so just remove it!
topMenuLinks.forEach(a => a.classList.remove('active') );
event.target.className.add('active');

topMenuLinks.addEventListener('click',makeActive);
})
/







