// const nav = document.createElement('nav');

// const divLogo = document.createElement('div');
// const aLogo = document.createElement('a');
// aLogo.href = '#';
// aLogo.className = 'logo';
// aLogo.textContent = 'emagine';
// divLogo.appendChild(aLogo);

// const navRight = document.createElement('div');
// navRight.className = 'nav-right';

// const ul = document.createElement('ul');

// links.forEach(linkText => {
//     const a = document.createElement('a');
//     a.href = '#';

//     const li = document.createElement('li');
//     li.className = 'list-items';
//     li.textContent = linkText;

//     a.appendChild(li);
//     ul.appendChild(a);
// });

// navRight.appendChild(ul);

// nav.appendChild(divLogo);
// nav.appendChild(navRight);

// document.body.appendChild(nav);

categoryItems.forEach(categoryObj => {

  const parentCategoryDiv = document.getElementById("parent-category");

  const categoryDiv = document.createElement("div");
  categoryDiv.classList.add("category");
  parentCategoryDiv.appendChild(categoryDiv);

  const categoryLeftDiv = document.createElement("div");
  categoryLeftDiv.classList.add("cate-left");
  categoryDiv.appendChild(categoryLeftDiv);

  const categoryRightDiv = document.createElement("div");
  categoryRightDiv.classList.add("cate-right");
  categoryDiv.appendChild(categoryRightDiv);

  const categoryImg = document.createElement("img");
  categoryImg.classList.add("category-icons");
  categoryLeftDiv.appendChild(categoryImg);
  categoryImg.src = `${categoryObj.src}`;

  const categoryText = document.createElement("p");
  categoryText.classList.add("cate-right-span-1")
  categoryRightDiv.appendChild(categoryText);
  categoryText.innerHTML = `${categoryObj.title}`;

  const categoryTextCommon = document.createElement("a");
  categoryTextCommon.classList.add("cate-right-span-2")
  categoryRightDiv.appendChild(categoryTextCommon);
  categoryTextCommon.href = "#";
  categoryTextCommon.innerHTML = "show more";

});

const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");

const numbers = [1, 2, 3, 4];
let a = numbers[0];
let b = numbers[1];
let isInitial = true;

// console.log("Initial values:", a, b);

function updateValues() {
  if (isInitial) {
    [a, b] = numbers.slice(2);
    isInitial = false;
  } else {
    [a, b] = numbers.slice(0, 2);
    isInitial = true;
  }
  // console.log("Updated values:", a, b);

  setTimeout(updateValues, 2000);
}

// updateValues();
image1.src = "assets/image-gallery/1.jpg";
image2.src = "assets/image-gallery/2.jpg";

function changeImage() {
  if (a == 1) {
    image1.src = "assets/image-gallery/1.jpg";
    image2.src = "assets/image-gallery/2.jpg";
  }

  if (a == 3) {
    image1.src = "assets/image-gallery/3.jpg";
    image2.src = "assets/image-gallery/4.jpg";
  }
}

// setInterval(changeImage, 2000);


const mensCollectionContainer = document.getElementById('mens-collection-container');

mensCollection.forEach(product => {
  const cardHtml = `
    <div class="men-card">
      <div class="men-card-top">
        <img src="${product.src}" alt="${product.title}" class="men-img">
      </div>
      <div class="men-card-bottom">
        <p class="men-dec">${product.title}</p>
        <p class="men-price">
          ${product.price}
          <span class="price-strike">${product.oldPrice}</span>
        </p>
      </div>
    </div>
  `;
  mensCollectionContainer.innerHTML += cardHtml;
});





const newCollectionContainer = document.getElementById('new-collection-container');

newCollections.forEach(newItem => {
  const newCardHtml = `
    <div class="new-card">
      <div class="new-card-top">
        <img src="${newItem.src}" alt="${newItem.title}" class="new-img">
      </div>
      <div class="new-card-bottom">
        <p class="new-dec">${newItem.title}</p>
        <p class="new-price">
          ${newItem.price}
          <span class="price-strike">${newItem.oldPrice}</span>
        </p>
      </div>
    </div>
  `;
  newCollectionContainer.innerHTML += newCardHtml;
});


