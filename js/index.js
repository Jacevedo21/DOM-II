// Your code goes here

document.querySelectorAll('.btn').forEach(element => {
    element.addEventListener('mouseout', event => {
        event.target.textContent = 'OmegaLUL'
    })
})

const navButton = document.querySelector('a')
navButton.addEventListener('click', () => {
    document.body.innerHTML = ""

})

document.querySelectorAll('.subHeader').forEach(element => {
    element.addEventListener('mouseover', event => {
        event.target.textContent = "POOF!"
    })
})
document.querySelectorAll('p').forEach(element => {
    element.addEventListener('dblclick', event => {
        event.target.textContent = "POOF! AGAIN! HAHA!"
    })
})
document.querySelectorAll('.logo-heading').forEach(element =>{
    element.addEventListener('dblclick', eventObj =>{
        eventObj.target.textContent = "This is not the title anymore!"
    })
})
document.querySelectorAll('img').forEach(element => {
    element.addEventListener('dragend', event => {
        debugger
        event.target.innerHTML = "Nice, you lost it"
    })
})

// document.querySelector('nav').addEventListener('click', function (evt) {
//     evt.preventDefault()
// })                                       