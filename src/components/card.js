const Card = ( {headline, authorPhoto, authorName} ) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a ----->listener<--- for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card");

  const headlineWrapper = document.createElement("div");
  headlineWrapper.classList.add("headline");
  headlineWrapper.textContent = headline;

  const authorWrap = document.createElement("div");
  authorWrap.classList.add("author");

  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const authorPic = document.createElement("img");
  authorPic.src = authorPhoto;

  const name = document.createElement("span");
  name.textContent = `By ${authorName}`

  // console.log(article.authorName)

  cardWrapper.appendChild(headlineWrapper);
  cardWrapper.appendChild(authorWrap);
  authorWrap.appendChild(imgContainer);
  authorWrap.appendChild(authorPic);
  cardWrapper.appendChild(name);

  console.log("this is the author card ---> ", cardWrapper)


  cardWrapper.addEventListener("click", evt => {
    console.log(headline);
  })

  return cardWrapper

}

Card({ headline: "THIS JUST IN", authorPhoto: "http://www.simpleimageresizer.com/_uploads/photos/b5491434/kindpng_2204295_1_25.png", authorName: "kim" })

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
