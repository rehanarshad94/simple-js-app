//Pokemon JS Project

//Title 
let h1Title = document.querySelector('h1');
h1Title.innerText = 'Pokedex';
document.write(h1Title);



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
   let pokelist = document.querySelector('.pokemon-list');
   let listItem = document.createElement('li');
   let button = document.createElement('button');
   button.innerText = pokemon.name;
   button.classList.add('button');
   button.addEventListener('click', function(event) {
      showDetails(pokemon)
   });
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
     item.type = details.types; //reponse to promise
   }).catch(function (e) {
     console.log(e); //error
   });
 }



 function showDetails(pokemon) {
   pokemonListRepository.loadDetails(pokemon).then(function () {
     console.log(pokemon);
   });
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

//pokemonListRepository.add({name:'Mewtwo',height:2, type:['psychic']});
//pokemonListRepository.add({name:'JigglyPuff',height:0.5, type:['fairy', 'normal']});
//console.log(pokemonListRepository.getAll());


pokemonListRepository.loadList().then(function () {
pokemonListRepository.getAll().forEach(function (pokemon) {
   pokemonListRepository.addListItem(pokemon);
   });
});

















































































