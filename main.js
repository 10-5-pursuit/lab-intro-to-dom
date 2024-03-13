const firstSection = document.querySelector("section")

firstSection.classList.add('featured')

const article = `<img
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
</aside>`
;

const articleElement = document.createElement("article")
articleElement.innerHTML = article;

document.querySelector(".posts").appendChild(articleElement);

const firstArticle = document.querySelector(".posts").children[0];
const secondArticle = document.querySelector(".posts").children[1];
document.querySelector(".posts").insertBefore(secondArticle, firstArticle);

const parent = document.getElementsByTagName("header")[0].getElementsByTagName("ul")[0];
const child = document.getElementsByTagName("li")[0];
parent.removeChild(child);

const aside = firstSection.querySelector("article").querySelector("aside")
const asideChild = aside.getElementsByTagName("p")[0].querySelector("span");

aside.getElementsByTagName("p")[0].removeChild(asideChild)

let posts = document.querySelector(".posts");

posts.removeChild(posts.lastChild)

let children = posts.querySelectorAll("article")
for(let i = 0; i < children.length; i++){
    children[i].querySelector("h3").remove()
}
