// //Pokemon JS Project

let pokemonListRepository = (function () {  
let pokemonList = [];
let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';



function getAll () {
   return (pokemonList);
}

function add(pokemon) {
   pokemonList.push(pokemon);
}


function addListItem(pokemon) {
   let pokelist = document.querySelector('.list-group');
   let listItem = document.createElement('li');
   listItem.classList.add('group-list-item');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('button');
   button.classList.add('btn', 'btn-primary', 'btn-lg');
   button.addEventListener('click', function(event) {
      showDetails(pokemon)
   });
   button.setAttribute('data-target', '#pokemonModal');
   button.setAttribute('data-toggle', 'modal');
   listItem.appendChild(button); 
   pokelist.appendChild(listItem);
}



function loadList() {
   return fetch(apiUrl).then(function (response) {
     return response.json();//promise
   }).then(function (json) {
     json.results.forEach(function (item) {
       let pokemon = {
         name: item.name,
         detailsUrl: item.url
       };//response to promise
       add(pokemon);
       console.log(pokemon); //adds all pokemon in console
     });
   }).catch(function (e) {
     console.log(e);//error
   })
 }


 function loadDetails(item) {
   let url = item.detailsUrl;
   return fetch(url).then(function (response) {
     return response.json();//promise
   }).then(function (details) {
     // Now we add the details to the item
     item.imageUrl = details.sprites.front_default;
     item.height = details.height;
     item.ability = details.abilities.map((ability) => ability.ability.name).join(', ');;
     item.weight = details.weight;
     item.type = item.types = details.types.map((type) => type.type.name).join(', '); //reponse to promise
   }).catch(function (e) {
     console.log(e); //error
   });
 }



 function showDetails(pokemon) {
   pokemonListRepository.loadDetails(pokemon).then(function () {
     showModal(pokemon);
    //  console.log(pokemon);
   });
 }



 function showModal(pokemon) {
  let modalBody = $('.modal-body');
  let modalTitle = $('.modal-title');
  let modalHeader = $('.modal-header');

  modalBody.empty();
  modalTitle.empty();
 

  let nameElement = $('<h3>' + pokemon.name + '<h3>');
  let imageElement = $('<img class="modal-img" width=30%>');
  imageElement.attr('src', pokemon.imageUrl);
  let heightElement = $('<p>' + 'Height: ' + pokemon.height + '<p>');
  let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '<p>');
  let typeElement = $('<p>' + 'Type: ' + pokemon.types + '<p>');
  let abilityElement = $('<p>' + 'Abilities: ' + pokemon.ability + '<p>');

  modalTitle.append(nameElement);
  modalBody.append(imageElement);
  modalBody.append(heightElement);
  modalBody.append(weightElement);
  modalBody.append(typeElement);
  modalBody.append(abilityElement);

 }



return {
   getAll: getAll,
   add:add,
   addListItem: addListItem,
   loadList: loadList,
   loadDetails: loadDetails,
   showDetails: showDetails
}


})();


pokemonListRepository.loadList().then(function () {
pokemonListRepository.getAll().forEach(function (pokemon) {
   pokemonListRepository.addListItem(pokemon);
   });
});
