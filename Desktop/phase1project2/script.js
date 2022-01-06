document.addEventListener('DOMContentLoaded', function() {



loadCharacters()
formHandler()

function loadCharacters() {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then(res => res.json())
    .then(data => data.forEach(renderOneCharacter))

//show Character 
function renderOneCharacter(character){

let hpcharacter = document.createElement('ul')
hpcharacter.className = 'hpcharacter'
hpcharacter.innerHTML = `<h4> ${character.name}</h4>`
// <hpcharacter.innerText="${character.name}">`

const charCard = document.getElementById('character-bar')

charCard.appendChild(hpcharacter)

hpcharacter.addEventListener('click', function() {
    document.getElementById('character-picture').src = character.image
    document.getElementById('name').innerText = character.name
    document.getElementById('house').innerText= character.house
    document.getElementById('ancestry').innerText= character.ancestry
}
)}
}

function formHandler(){

    const wizardForm = document.getElementById('formDiv')

    wizardForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        document.getElementById('name').innerText = event.target.wizardName.value
        document.getElementById('house').innerText = event.target.wizardHouse.value
        document.getElementById('ancestry').innerText = event.target.bloodType.value
        document.getElementById('image').src = event.target.newImage.value


    })
   }   })