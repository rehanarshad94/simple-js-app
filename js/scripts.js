//Pokemon JS Project


let pokemonListRepository = (function () {

let pokemonList = [ 

    {
        name: 'Blastoise',
        height: 1.6,
        type: [ 'water' ]
     } ,   
     {
        name: 'Pikachu',
        height: 0.4,
        type: [ 'electric' ]
     },

     {
        name: 'Charizard',
        height: 1.7,
        type: [ 'fire', 'flying']
     }
];




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
   button.addEventListener('click', showDetails (pokemon));
   listItem.appendChild(button); 
   pokelist.appendChild(listItem);
}

function showDetails(pokemon) {
   console.log(pokemon);
}


return {
   getAll: getAll,
   add:add,
   addListItem: addListItem,
}



})();

pokemonListRepository.add({name:'Mewtwo',height:2, type:['psychic']});
pokemonListRepository.add({name:'JigglyPuff',height:0.5, type:['fairy', 'normal']});
console.log(pokemonListRepository.getAll());

pokemonListRepository.getAll().forEach(function (pokemon) {
   pokemonListRepository.addListItem(pokemon);
});


























































