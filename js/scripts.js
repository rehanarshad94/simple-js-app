// //Pokemon JS Project

const pokemonListRepository = (function () {
  const pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  /**
   * This function gets all of the pokemon's
   * @returns - pokemon list
   */
  function getAll() {
    return pokemonList;
  }

  /**
   * This function adds new pokmon to array
   * @param {*} pokemon - pokemon object
   */
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  /**
   * This function takes a pokemon object and appends it to an unordered list as list item
   * @param {*} pokemon - pokemon object
   */
  function addListItem(pokemon) {
    let pokelist = document.querySelector(".list-group");
    let listItem = document.createElement("li");
    listItem.classList.add("group-list-item");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button");
    button.classList.add("btn-outline-light", "btn-primary", "btn-lg");
    button.addEventListener("click", () => {
      showDetails(pokemon);
    });
    button.setAttribute("data-target", "#pokemonModal");
    button.setAttribute("data-toggle", "modal");
    listItem.appendChild(button);
    pokelist.appendChild(listItem);
  }

  /**
   * This function calls the pokemon api and gets the first 150 pokemon's
   * @returns - a promise object
   */
  function loadList() {
    return fetch(apiUrl)
      .then((response) => {
        return response.json(); //promise
      })
      .then((json) => {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          }; //response to promise
          add(pokemon);
          //  console.log(pokemon); //adds all pokemon in console
        });
      })
      .catch((e) => {
        console.log(e); //error
      });
  }

  /**
   * This function shows the stats for the pokemon's
   * @param {*} item - item object
   * @returns - stats of pokemon's
   */
  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then((response) => {
        return response.json(); //promise
      })
      .then((details) => {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.ability = details.abilities
          .map((ability) => ability.ability.name)
          .join(", ");
        item.weight = details.weight;
        item.type = item.types = details.types
          .map((type) => type.type.name)
          .join(", "); //reponse to promise
      })
      .catch((e) => {
        console.log(e); //error
      });
  }

  /**
   * This function shows details for pokemon's
   * @param {*} pokemon - pokemon object
   */
  function showDetails(pokemon) {
    pokemonListRepository.loadDetails(pokemon).then(() => {
      showModal(pokemon);
      //  console.log(pokemon);
    });
  }

  /**
   * This function displays modal for individual pokemon's with stats
   * @param {*} pokemon - pokemon object
   */
  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalBody.empty();
    modalTitle.empty();

    let nameElement = $("<h3>" + pokemon.name + "<h3>");
    let imageElement = $("<img class='modal-img' width=30%>");
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $("<p>" + "Height: " + pokemon.height + "<p>");
    let weightElement = $("<p>" + "Weight: " + pokemon.weight + "<p>");
    let typeElement = $("<p>" + "Type: " + pokemon.types + "<p>");
    let abilityElement = $("<p>" + "Abilities: " + pokemon.ability + "<p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElement);
    modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typeElement);
    modalBody.append(abilityElement);
  }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();

function findPokemon(findName) {
  pokemonListRepository.getAll().forEach((pokemon) => {
    if (pokemon.name.indexOf(findName) > -1) {
      pokemonListRepository.addListItem(pokemon);
    }
  });
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("keyup", () => {
  document.getElementById("list-group1").innerHTML = "";
  findPokemon(searchForm.value);
});

pokemonListRepository.loadList().then(() => {
  pokemonListRepository.getAll().forEach((pokemon) => {
    pokemonListRepository.addListItem(pokemon);
  });
});
