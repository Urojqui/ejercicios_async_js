const apiUrl = "https://thronesapi.com/api/v2/Characters";
const selectElement = document.getElementById("character-list");
const imageElement = document.querySelector(".character-image");

//Cargamos los personajes de la API utilizando el método "fácil" de async-await
const charactersGot = async () => {
  try {
    const data = await fetch(apiUrl);
    const characters = await data.json();

    //Añadir opción por cada personaje
    characters.forEach((character) => {
      const option = document.createElement("option");
      option.value = character.imageUrl;
      option.textContent = character.fullName;
      selectElement.appendChild(option);
    });

    // Agregar opción inicial por defecto
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "-- Selecciona un personaje --";
    selectElement.insertBefore(defaultOption, selectElement.firstChild); //Insertar el texto como primera opción (aquí he necesitado ayuda)
  } catch (error) {
    console.log("Error al cargar los personajes:", error);
  }
};
//Llamar a la función para cargar personajes al iniciar
charactersGot();

selectElement.addEventListener("change", (e) => { //Se puede escribir (e) como abreviatura de (event)
  const selectedImg = e.target.value;
  imageElement.src = selectedImg;
});
