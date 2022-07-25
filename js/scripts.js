//Pokemon JS Project


//For console.log
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

function add (pokemon) {
   pokemonList.push(pokemon);
}

return {
   getAll: getAll,
   add: add
}

})();



pokemonListRepository.add({name:'Mewtwo', height:2, type:['psychic']});
pokemonListRepository.add({name:'Jigglypuff', height:0.5, type:['fairy', 'normal']});
console.log(pokemonListRepository.getAll());






//For document.write
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

//forEach Loop
pokemonList.forEach(function (pokemonList) {
   if (pokemonList.height <= 1 && pokemonList.height >= 0 ) {
      document.write('<br>' + pokemonList.name + ' (height:' + ' ' + pokemonList.height + ') -"Small Pokemon');
   } else {
      document.write('<br>' + pokemonList.name + ' (height:' + ' ' + pokemonList.height + ') -"Big Pokemon');
   }
});






















/*
//For Loop 
for (let i=0; i<pokemonList.length; i++) {
   //the condition to which the height has to be within for output to be shown as 'big' or 'small' 
   if (pokemonList[i].height<=1 && pokemonList[i].height>=0) {
      //writes text for which pokemons have height below the value as "small"
      document.write('<br>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') -"Small Pokemon!" '); 
   } else {
      //writes text for which pokemons have height above the value as "big"
      document.write('<br>' + pokemonList[i].name + ' (height:' +pokemonList[i].height + ') -"Big Pokemon!" '); 
   }
};
*/
























