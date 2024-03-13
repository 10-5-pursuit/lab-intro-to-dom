let firstSection = document.querySelector("section");
firstSection.className = "featured";

// initialize article parent
let newArticle = document.createElement("article");

// initialize img child
let newImg = document.createElement("img");
newImg.setAttribute("src", "images/paul-gilmore-unsplash.jpg");
newImg.setAttribute("alt", "Image of a mountain in front of a lake.");

// initialize h3 child
let newHeader = document.createElement("h3");
newHeader.innerText = "Stop Planning";

// initialize p child
let newPara = document.createElement("p");
newPara.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";

// append new children to article
newArticle.append(newImg, newHeader, newPara);

// initialize aside
let newAside = document.createElement("aside");

// redeclare new p tag
newPara = document.createElement("p");

// initialize new span and strong tags
let newSpan = document.createElement("span");
let newStrong = document.createElement("strong");
newStrong.innerText = "Read Time:";
newSpan.append(newStrong, " 4 Minutes");

// initialize new a tag;
let newAnchor = document.createElement("a");
newAnchor.setAttribute("href", "#");
newAnchor.innerText = "Read more...";

// add children to 2nd p tag
newPara.append(newSpan, newAnchor);

// add p tag to aside
newAside.appendChild(newPara);

// add remaining children to article tag
newArticle.appendChild(newAside);

// add article to html
document.querySelector("section.posts").append(newArticle);

// swap first and second article
let posts = document.querySelector("section.posts");

let newFirst = posts.children[1];
let newSecond = posts.children[0];

posts.removeChild(posts.firstChild);
posts.removeChild(posts.firstChild);

posts.prepend(newFirst, newSecond);

// remove first anchor
document.querySelector("a").remove();

// remove span from .featured
firstSection.querySelector("span").remove();

// remove last post
posts.children[2].remove();

// remove post titles
for (child of posts.children) {
    child.querySelector("h3").remove();
}