const kidsPage = document.getElementById('kids-card-cont');

kidsPageCollection.forEach(kidsItem => {
    const kidsCard = `
    <a href="#">
        <div class="card">
            <div class="card-top">
               <img src="${kidsItem.src}" alt
                  id="card-img" class="card-img">
                    </div>
             <div class="card-bottom">
               <p>${kidsItem.title}</p>
                       <p class="price">${kidsItem.price} <span
                             class="old-price">${kidsItem.oldPrice}</span></p>
                         <p class="size"><span
                    class="size-text">Size</span>
                S,M,L,XL,XXL</p>
           </div>
      </div>
    </a>`;
    kidsPage.innerHTML += kidsCard;
});


const phonesPage = document.getElementById('phones-card-cont');

phonesPageCollection.forEach(phonesItem => {
    const phonesCard = `
    <a href="#">
        <div class="card">
            <div class="card-top">
               <img src="${phonesItem.src}" alt
                  id="card-img" class="card-img">
                    </div>
             <div class="card-bottom">
               <p>${phonesItem.title}</p>
                       <p class="price">${phones.price} <span
                             class="old-price">${phonesItem.oldPrice}</span></p>
                         <p class="size"><span
                    class="size-text">Size</span>
                S,M,L,XL,XXL</p>
           </div>
      </div>
    </a>`;
    phonesPage.innerHTML += phonesCard;
});


const shoesPage = document.getElementById('shoes-card-cont');

shoesPageCollection.forEach(shoesItem => {
    const shoesCard = `
    <a href="#">
        <div class="card">
            <div class="card-top">
               <img src="${shoesItem.src}" alt
                  id="card-img" class="card-img">
                    </div>
             <div class="card-bottom">
               <p>${shoesItem.title}</p>
                       <p class="price">${shoesItem.price} <span
                             class="old-price">${shoesItem.oldPrice}</span></p>
                         <p class="size"><span
                    class="size-text">Size</span>
                S,M,L,XL,XXL</p>
           </div>
      </div>
    </a>`;
    shoesPage.innerHTML += shoesCard;
});
