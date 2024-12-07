const imageElement = document.querySelector(".random-image");
const randomPokemon = Math.floor(Math.random() * 151) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`)
  .then(data => data.json())
  .then(({ sprites, name }) => {
    imageElement.src = sprites.other["official-artwork"].front_default;
    imageElement.alt = name;
  })
  .catch(error => console.log("Error al cargar el Pokémon:", error));