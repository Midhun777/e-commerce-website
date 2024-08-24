const mensPage = document.getElementById('page-card-cont');

mensPageCollection.forEach(menItem => {
  const cont = document.createElement("a");
  cont.setAttribute("href", "#");


  cont.onclick = function (e) {
    console.log(e);
    console.log(menItem);
  }

  createCard(cont, menItem);

  mensPage.appendChild(cont);
});
