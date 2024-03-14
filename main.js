const element1 = document.querySelector('section');
element1.classList.add('featured');

//const postSection = document.getElementsByClassName('posts');
const lastArticle = document.createElement("article");
// console.log(lastArticle);
lastArticle.innerHTML = `
<img
src="./images/paul-gilmore-unsplash.jpg"
alt="Image of a mountain in front of a lake."
/>

<h3>Stop Planning</h3>
<p>
You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?
</p>
<aside>
<p>
  <span><strong>Read Time:</strong> 4 Minutes</span
  ><a href="#">Read more...</a>
</p>
</aside>`;
let postsSection = document.querySelector('.posts');
postsSection.appendChild(lastArticle);

let postsSection2 = document.querySelector('.posts');
//console.log(postsSection2);
let test = postsSection2.removeChild(postsSection2.firstElementChild);
//console.log(test);
postsSection2.insertBefore(test, postsSection2.children[1]);

let firstUL = document.querySelector('ul');
let firstList = firstUL.querySelector('li')
firstList.remove();

const element2 = document.querySelector('.featured span');
element2.remove();

postsSection.removeChild(postsSection2.children[2]);

let headingThree = document.querySelectorAll('.posts h3');
//console.log(headingThree);
headingThree.forEach((a) => {
    a.remove();
});


