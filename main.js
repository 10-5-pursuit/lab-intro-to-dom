
   let firstSection= document.querySelector('section')
   firstSection.classList.add('featured');
    let newArticle = document.createElement('article');
    newArticle.innerHTML = `
        <img src="./images/paul-gilmore-unsplash.jpg" alt="Image of a mountain in front of a lake." />
        <h3>Stop Planning</h3>
        <p>
            You -- yes you! You're an over-planner, I can tell. It's time to stop
            planning so much and instead focusing on relaxing. Taking a break at all is
            so stressful these days; why add to the stress by overworking yourself?
        </p>
        <aside>
            <p>
                <a href="#">Read more...</a>
            </p>
        </aside>
    `;
    document.querySelector('section.posts').appendChild(newArticle);

    let postsSection = document.querySelector('section.posts');
    let firstArticle = postsSection.firstElementChild;
    let secondArticle = firstArticle.nextElementSibling;
    postsSection.insertBefore(secondArticle, firstArticle);


    let order= document.querySelector('ul')
    let secondOrder=order.querySelector('li')
    secondOrder.remove();



    let parag = document.querySelector('section.featured article aside p');
    let span = parag.querySelector('span');
    span.remove();

    postsSection.querySelector('article:nth-child(3)').remove();

    let articles = postsSection.querySelectorAll('article');
    articles.forEach(article => {
    let h3 = article.querySelector('h3');
    if (h3) {
        h3.remove();
    }
    });

