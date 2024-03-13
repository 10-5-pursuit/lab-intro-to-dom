const firstSection = document.querySelector('section').classList.add('featured');

const newArticle = document.createElement('article');

const image = document.createElement('img');
image.src = "./images/paul-gilmore-unsplash.jpg";
image.alt = "Image of a mountain in front of a lake.";
newArticle.appendChild(image);

const headerThree = document.createElement('h3');
headerThree.innerText = 'Stop Planning';
newArticle.appendChild(headerThree);

const firstParagraph = document.createElement('p');
firstParagraph.innerText = "You -- yes you! You're an over-planner, I can tell. It's time to stop planning so much and instead focusing on relaxing. Taking a break at all is so stressful these days; why add to the stress by overworking yourself?";
newArticle.appendChild(firstParagraph);

const aside = document.createElement('aside');

const secondParagraph = document.createElement('p');
const span = document.createElement('span');
span.innerHTML = '<strong>Read Time:</strong> 4 Minutes';
secondParagraph.appendChild(span);
const aLink = document.createElement('a');
aLink.innerText = 'Read more...';
secondParagraph.appendChild(aLink);

aside.appendChild(secondParagraph);
newArticle.appendChild(aside);

const postArticles = document.querySelectorAll('.posts article');

const sectionPost = document.querySelector('.posts');
sectionPost.appendChild(newArticle);

sectionPost.insertBefore(postArticles[1], postArticles[0]);

document.querySelector('header nav ul li').remove();
document.querySelector('main section article aside p span').remove();
document.querySelector('main .posts article:last-child').remove();

const h3Elements = document.querySelectorAll('main .posts article h3');
for (const elem of h3Elements) {
    elem.remove();
}