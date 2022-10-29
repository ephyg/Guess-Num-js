
// random Number
var randomNumber = Math.floor(Math.random() * 20)
// make text field empty when restart button
document.querySelector('#restart').addEventListener('click', function () {
    window.location.reload()
})
// check the guess when the button is clicked
var i = 0;
document.querySelector('#check-button').addEventListener("click", function () {
    if ((document.querySelector('#guess-yours').value).length == 0) {
        console.log("Enter Number")
    }
    else if (Number(document.querySelector('#guess-yours').value) == randomNumber) {
        document.querySelector('#Secret-number').textContent = randomNumber
        document.querySelector('.checkup').textContent = "Correct"
        i++
        document.querySelector('#score').textContent = "Score: " + i
    }
    else if (Number(document.querySelector('#guess-yours').value) > randomNumber) {
        document.querySelector('.checkup').textContent = "Too High"
        i++
        document.querySelector('#score').textContent = "Score: " + i
    }
    else if (Number(document.querySelector('#guess-yours').value) < randomNumber) {
        document.querySelector('.checkup').textContent = "Too Low"
        i++
        document.querySelector('#score').textContent = "Score: " + i
    }
    else {
        document.querySelector('#guess-yours').value = "Click and Enter Number"
    }

})
