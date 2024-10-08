const body = document.querySelector('body');
const blogContainer = document.querySelector('main');
const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');



let mode = 'light';

//themeSwitcher.addEventListener('click, function() {
  //  ');

//pulling input data from local storage into new blog page
 const storedEntries = JSON.parse(localStorage.getItem('entries'));

 for (let i=0; i < storedEntries.length; i++) {
 
   // entries[i].entry
    //entries[i].title
    //entries[i].content 

 const article= document.createElement('article');
 const postSubject = document.createElement('h1');
 
 postSubject.textContent= `${storedEntries[i].title}`;
 article.appendChild(postSubject);
 blogContainer.appendChild(article);
 }

