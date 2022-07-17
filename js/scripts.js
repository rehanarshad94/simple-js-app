//Pokemon JS Project

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
] ;


//Loop for pokemonList 
for (let i=0; i<pokemonList.length; i++) {
   //the condition to which the height has to be within for output to be shown as 'big' or 'small' 
   if (pokemonList[i].height<=1 && pokemonList[i].height>=0) {
      //writes text for which pokemons have height below the value as "small"
      document.write('<br>' + pokemonList[i].name + ' (height:' + pokemonList[i].height + ') -"Small Pokemon!" '); 
   } else {
      //writes text for which pokemons have height above the value as "big"
      document.write('<br>' + pokemonList[i].name + ' (height:' +pokemonList[i].height + ') -"Big Pokemon!" '); 
   }
}

