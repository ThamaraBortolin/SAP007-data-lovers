import { searchCharacter, filterAlfa}
from './data.js';
import data from './data/ghibli/ghibli.js';

//print personagens

const peopleImage = document.getElementById('cardsCharacters');
  function showCharacter(arrPeople) {
    peopleImage.innerHTML = arrPeople.map((item) =>
     `
    <div class="card">
      <div class="flip-card">
      <div class="frontCard">
      <img src= "${item.img}" class="characterPoster">
      </div>
      <div class="backCard">
      <p class= "nomePersonagem"><strong>Name: </strong>${item.name}</p><br>
      <p class= "caracPersona"><strong>Age: </strong> ${item.age}</p><br>
      <p class= "caracPersona"><strong>Specie: </strong> ${item.specie}</p><br>
      <p class= "caracPersona"><strong>Gender: </strong> ${item.gender}</p><br>
      </div>
      </div>
    </div>
`).join('');
}
const characters = data.films.map(arrPeople => arrPeople.people)
const arrCharacters = [].concat.apply([], characters);

showCharacter(arrCharacters);

//filtro buscar por nome
const namePerson= document.getElementById('searchCharac');

const filterName = () => {
  const typeName = namePerson.value
   const selectedCharacter = searchCharacter(arrCharacters, typeName);
  showCharacter(selectedCharacter);
};
namePerson.addEventListener('keyup', filterName);


//ordem alfabética
const orderFilter = (a)=>{
  const orderSelec = a.target.value;
  if(orderSelec !== ""){
    const filterOrder = filterAlfa(arrCharacters, orderSelec)
    showCharacter(filterOrder)
  }
}

const order = document.getElementById("selecOrder")
order.addEventListener ("change", orderFilter)



