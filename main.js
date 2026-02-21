let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")

function add1h(){
    homeScore++
    homeEl.textContent = homeScore
}

function add2h(){
    homeScore+=2
    homeEl.textContent = homeScore
}

function add3h(){
    homeScore+=3
    homeEl.textContent = homeScore
}

function add1g(){
    guestScore++
    guestEl.textContent = guestScore
}

function add2g(){
    guestScore+=2
    guestEl.textContent = guestScore
}

function add3g(){
    guestScore+=3
    guestEl.textContent = guestScore
}
