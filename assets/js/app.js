
let button = document.querySelector('#button')
let name   = document.querySelector('#name')



function getInfo() {

    updateInfoLoading()

    let randomNumber = Math.floor((Math.random() * 88) + 1)

    let apiUrl = 'http://swapi.dev/api/people/' + randomNumber


    axios.get(apiUrl).then(function(response){
        updateInfo(response.data)
    }).catch(e => {
        console.log(updateInfoError())
    })
}

function updateInfo(data) {
    name.innerText       = 'Name: ' + data.name
    height.innerText     = 'Height: ' + data.height + ' cm'
    mass.innerText       = `Mass: ${data.mass}`
    birth_year.innerText = `Birth year: ${data.birth_year}`
    gender.innerText     = `Gender: ${data.gender}`
    hair_color.innerText = 'Hair color: ' + data.hair_color
    skin_color.innerText = 'Skin solor: ' + data.skin_color
    eye_color.innerText  = 'Eye color: ' + data.eye_color
    homeworld.innerText  = 'Homeworld: ' + data.homeworld
}   


function updateInfoError() {
    name.innerText       = 'Oh no there is no data about this person.' 
    height.innerText     = 'Sory, try clicking again.'
    mass.innerText       = ''
    birth_year.innerText = ''
    gender.innerText     = ''
    hair_color.innerText = ''
    skin_color.innerText = ''
    eye_color.innerText  = ''
    homeworld.innerText  = ''
}   

function updateInfoLoading() {
    name.innerHTML       = '<i class="center fas fa-cog fa-3x fa-spin"></i>' 
    height.innerText     = ''
    mass.innerText       = ''
    birth_year.innerHTML = '<i class="center fas fa-cog fa-2x fa-spin"></i>'
    gender.innerText     = ''
    hair_color.innerHTML = '<i class="center fas fa-cog fa-5x fa-spin"></i>'
    skin_color.innerText = ''
    eye_color.innerHTML  = '<i class="center fas fa-cog fa-4x fa-spin"></i>'
    homeworld.innerText  = ''
}

button.addEventListener('click', getInfo);

