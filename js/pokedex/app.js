const pokedex = document.getElementById("pokedex");
// console.log(pokedex);

const pokeCache = {}; //caching pokemon data so it doesn't need to make another get request

const fetchPokemon = async () => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=150`;
  const res = await fetch(url);
  const data = await res.json();
  const pokemon = data.results.map((result, index) => ({
    ...result,
    id: index + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
      index + 1
    }.png`,
  }));
  displayPokemon(pokemon);
};

const displayPokemon = (pokemon) => {
  const pokemonHTMLString = pokemon
    .map(
      (pokeman) => `
    <li class="card" onclick="selectPokemon(${pokeman.id})">
        <img class="card-image" src="${pokeman.image}"/>
        <h2 class="card-title"> ${pokeman.id}. ${pokeman.name}</h2>
    </li>`
    )
    .join("");
  pokedex.innerHTML = pokemonHTMLString; //setting the innerHTML property, pokedex is our order list
};

fetchPokemon();

// the if/else statement here checks if the pokemon does not exist in the cache, in which case it'll go fetch the pokemon, else it'll retrieve the pokemon from the cache

const selectPokemon = async (id) => {
  if (!pokeCache[id]) {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokeman = await res.json();
    pokeCache[id] = pokeman;
    console.log(pokeCache);
  } else {
    displayPopup(pokeCache[id]);
  }
};

const displayPopup = (pokeman) => {
  const type = pokeman.types.map((type) => type.type.name).join(", ");
  console.log(type);
  const image = pokeman.sprites["front_default"];
  const htmlString = `
  <div class="popup">
  <button id="closeBtn"
  onclick="closePopup()">Close</button>
  <div class="card">
        <img class="card-image" src="${image}"/>
        <h2 class="card-title"> ${pokeman.id}. ${pokeman.name}</h2>
        <p><small>Height: </small>${pokeman.height} | <small>Weight: </small>${pokeman.weight} | <small>Type: </small>${type}
    </div>
    </div>
  `;

  pokedex.innerHTML = htmlString + pokedex.innerHTML;
  console.log(htmlString);
};

const closePopup = () => {
  const popup = document.querySelector(".popup");
  popup.parentElement.removeChild(popup);
};
