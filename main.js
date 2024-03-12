const firstSection = document.querySelector('main > section');
firstSection.classList.add('featured');

const newArticleHTML = `<article>
    <img
        src="images/paul-gilmore-unsplash.jpg"
        alt="Image of a mountain in front of a lake." />
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
</article>`;

const sectionPosts = document.querySelector('section.posts');
const newArticle = document.createElement('div');
newArticle.innerHTML = newArticleHTML;
sectionPosts.append(newArticle.firstChild);

const articles = sectionPosts.querySelectorAll('article');
sectionPosts.insertBefore(articles[1], articles[0]);

const allPostsLink = document.querySelector('header nav ul li');
allPostsLink.remove();

const readTimeSpan = firstSection.querySelector('aside span');
readTimeSpan.remove();

const lastArticle = sectionPosts.querySelector('article:last-of-type');
lastArticle.remove();

const nonFeaturedArticles = sectionPosts.querySelectorAll('article h3');
nonFeaturedArticles.forEach(title => title.remove());