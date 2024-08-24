
window.addEventListener("load", function () {
  setTimeout(function () {
    // document.getElementById("loading-screen").style.display = "none";
    // document.getElementById("content").style.display = "block";
  }, 200);
});

const heroDiv = document.getElementById('hero');

const newContent = `
    <div class="hero-left">
        <div class="hero-left-sub">
            <p class="hero-text-1">Trade in offer</p>
            <p class="hero-text-2 hero-text">Exclusive deals on your favourite brands</p>
            <p class="hero-text-3 hero-text">Grab It!</p>
            <button class="shop-button">shop now</button>
        </div>
    </div>

    <div class="hero-right">
        <img src="assets/mains/bg.png" alt="model-1" width="65%" class="hero-img">
    </div>
`;

heroDiv.innerHTML = newContent;

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
  categoryTextCommon.href = `${categoryObj.href}`;
  // categoryTextCommon.onclick=`${categoryObj.onclick}`;
  categoryTextCommon.onclick = function () {
    if (categoryObj.navSate == true) {
      demo();
    } else {
      categoryTextCommon.removeAttribute("href");
      popUp();
    }
  };
  categoryTextCommon.innerHTML = "show more";

  console.log(parentCategoryDiv);
  console.log(categoryTextCommon);

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



//<------NAV SECTION------>

const navSec = document.getElementById("nav-sec");

const navParent = document.createElement("div");
navParent.id = "nav-items-parent";
navParent.classList.add("nav-items-parent");
navSec.appendChild(navParent);

const navItemsCont = document.getElementById("nav-items-parent");

navItemsArr.forEach(navItems => {
  const navCard = `<a href="${navItems.href}" onClick="${navItems.onclick}" id="nav-sec-a">
        <div class="nav-items" id="nav-items">${navItems.title}</div>
     </a>
  `;
  const navSecA = document.getElementById("nav-sec-a");
  if (navItems.navSate == true) {
    demo();
  } else {
    categoryTextCommon.removeAttribute("href");
    popUp();
  }
  navItemsCont.innerHTML += navCard;

});

const navItemsElem = document.getElementById("nav-items");
navItemsCont.appendChild(navItemsElem);

//<------!------>

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


const womenCollectionContainer = document.getElementById('women-collection-container');

womensCollections.forEach(womenItem => {
  const womenCardHtml = `
    <div class="women-card">
      <div class="women-card-top">
        <img src="${womenItem.src}" alt="${womenItem.title}" class="women-img">
      </div>
      <div class="women-card-bottom">
        <p class="women-dec">${womenItem.title}</p>
        <p class="women-price">
          ${womenItem.price}
          <span class="price-strike">${womenItem.oldPrice}</span>
        </p>
      </div>
    </div>
  `;
  womenCollectionContainer.innerHTML += womenCardHtml;
});

function popUp() {
  alert("Sorry Page Not Yet Ready!!!");
}

function demo(e) {
  console.log(e);
}