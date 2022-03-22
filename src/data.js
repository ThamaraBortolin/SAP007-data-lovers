// estas funciones son de ejemplo

export const filterFilms = (films, valueSelec) =>
  films.filter(item => item.title.toUpperCase().includes(valueSelec.toUpperCase()))

/*export const filters = (films, orderSelec) => {
  if (orderSelec === "A-Z"){
    return films.sort((a,b) => a.title > b.title ? 1 : -1)
  }

  if (orderSelec === "Z-A"){
    return films.sort((a,b) => a.title > b.title ? -1 : 1)
  }
}
*/

//busca por nome
export const searchCharacter = (character, characterSelected) =>
character.filter(item => item.name.toUpperCase().includes(characterSelected.toUpperCase()));


//ordem alfabética
export const filterAlfa = (arrCharacters, orderSelec) => {
  if (orderSelec === "a-z"){
    return arrCharacters.sort((a,b) => a.name > b.name ? 1 : -1)
  }

  if (orderSelec === "z-a"){
    return arrCharacters.sort((a,b) => a.name > b.name ? -1 : 1)
  }
}
