// Your code goes here

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('mouseout', event => {
        event.target.textContent = 'Tiff Tiff!!'
    })
})

const navButton = document.querySelector('a')
const secretPhoto = document.querySelector('.secret img')
console.log(secretPhoto)
navButton.addEventListener('click', () => {
    document.body.innerHTML = ""
    document.body.innerHTML = secretPhoto
})

// document.querySelector('nav').addEventListener('click', function (evt) {
//     evt.preventDefault()
// })                                       