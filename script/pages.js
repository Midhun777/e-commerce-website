const mensPage = document.getElementById('card-cont');

mensPageCollection.forEach(menItem => {
    const mensCard = `
    <a href="#">
        <div class="card">
            <div class="card-top">
               <img src="${menItem.src}" alt
                  id="card-img" class="card-img">
                    </div>
             <div class="card-bottom">
               <p>${menItem.title}</p>
                       <p class="price">${menItem.price} <span
                             class="old-price">${menItem.oldPrice}</span></p>
                         <p class="size"><span
                    class="size-text">Size</span>
                S,M,L,XL,XXL</p>
           </div>
      </div>
    </a>`;
    mensPage.innerHTML += mensCard;
});