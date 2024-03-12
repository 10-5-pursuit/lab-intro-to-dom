const firstSection = document.querySelector('section');
firstSection.classList.add('featured');

const postsSection = document.querySelector('section.posts');
const newArticle = document.createElement('article');
newArticle.innerHTML = `
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
  </aside>
`;
postsSection.appendChild(newArticle);

const firstArticle = postsSection.querySelector('article:first-child');
const secondArticle = postsSection.querySelector('article:nth-child(2)');
postsSection.insertBefore(secondArticle, firstArticle);

const ul = document.querySelector('ul');
const li = ul.querySelector('li')
li.remove();

const p = document.querySelector('section.featured article aside p');
const span = p.querySelector('span');
span.remove();

postsSection.querySelector('article:nth-child(3)').remove();

const articles = postsSection.querySelectorAll('article');
articles.forEach(article => {
    const h3 = article.querySelector('h3');
    if (h3) {
        h3.remove();
    }
});