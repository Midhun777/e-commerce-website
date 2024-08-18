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

setInterval(changeImage, 2000);


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
