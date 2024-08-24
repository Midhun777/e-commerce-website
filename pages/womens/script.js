const womensPage = document.getElementById('page-card-cont');

womensPageCollection.forEach(womenItem => {
  const cont = document.createElement("a");
  cont.setAttribute("href", "#");


  cont.onclick = function(e) {
    console.log(e);
    console.log(womenItem);
  }

  createCard(cont, womenItem);

    womensPage.appendChild(cont);
});