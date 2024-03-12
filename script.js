//1
let sectionOne = document.getElementsByTagName("section")[0];

sectionOne.classList.add('featured')
//2
let newArticule = document.createElement('articule');

newArticule.innerHTML = `<img
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

let posts = document.querySelector('.posts');

posts.appendChild(newArticule);

//3 

let articuleOne = posts.children[0];
let articuleTwo = posts.children[1];

posts.removeChild(posts.children[0]);
posts.removeChild(posts.children[0]);
posts.removeChild(posts.children[0]);

posts.appendChild(articuleTwo);
posts.appendChild(articuleOne);
posts.appendChild(newArticule);

//4

let allPost = document.getElementsByTagName('li')[0];


allPost.style.display = 'none';

//5

let SpanOne = document.getElementsByTagName('span')[0];

SpanOne.remove();

//6

posts.removeChild(posts.children[2]);

//7

let postTitles = document.getElementsByTagName('h3');

console.log(postTitles)
for (let title of postTitles){
    title.style.display = 'none';
}
