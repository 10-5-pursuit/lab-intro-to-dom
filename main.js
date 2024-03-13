/// Create elements 
const firstSection = document.querySelector('section');
firstSection.classList.add("featured");



const articleElement = document.createElement('article');
const imgElement = document.createElement('img');
const hThreeElement = document.createElement('h3');
const pFirst = document.createElement('p');
const pSecond = document.createElement('p');
const asideElement = document.createElement('aside');
const strongElement = document.createElement('strong');
const spanElement = document.createElement('span');
const fourMinText = document.createTextNode("4 Minutes");
const aTagElement = document.createElement('a');
const classPost = document.querySelector('.posts');
const arrayOfTags = [imgElement, hThreeElement, pFirst, asideElement];
const articleTags = document.querySelectorAll('.posts article');
const removeAllPostLink = document.querySelector("header nav ul li");
const allTitles = document.querySelectorAll("h3");


/// Modify elements
imgElement.src="./images/paul-gilmore-unsplash.jpg";
imgElement.alt="Image of a mountain in front of a lake.";
aTagElement.href = "#";
hThreeElement.innerText = "Stop Planning";
pFirst.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
strongElement.textContent = "Read Time:";
aTagElement.innerText = "Read more...";
classPost.insertBefore(articleTags[1], articleTags[0]);



/// appending child elements
arrayOfTags.forEach(tag => {
    articleElement.appendChild(tag);
})


spanElement.appendChild(strongElement);
spanElement.appendChild(fourMinText);
pSecond.appendChild(spanElement);
pSecond.appendChild(aTagElement);i
asideElement.appendChild(pSecond);
articleElement.appendChild(asideElement);
classPost.appendChild(articleElement);
classPost.lastChild.remove();

for (let title of allTitles) {
    title.remove();
}


