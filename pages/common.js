function createCard(cont, data) {
    cont.innerHTML = `
        <div class="card">
            <div class="card-top">
               <img src="../../${data.src}" alt
                  id="card-img" class="card-img">
                    </div>
             <div class="card-bottom">
               <p>${data.title}</p>
                       <p class="price">${data.price} <span
                             class="old-price">${data.oldPrice}</span></p>
                         <p class="size"><span
                    class="size-text">Size</span>
                S,M,L,XL,XXL</p>
           </div>
      </div>
    `;
}

function displayCominSoon(){
  
}