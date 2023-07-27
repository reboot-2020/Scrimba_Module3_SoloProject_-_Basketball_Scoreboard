const homeWrapperEl = document.querySelector(".home-wrapper")
const guestWrapperEl = document.querySelector(".guest-wrapper")

const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

const homeFoulsEl = document.getElementById("home-fouls-el")
const guestFoulsEl = document.getElementById("guest-fouls-el")
let homeFouls = 0
let guestFouls = 0


function homePlusOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
    compareScores()
}

function homePlusTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
    compareScores()
}

function homePlusThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
    compareScores()
}

function guestPlusOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
    compareScores()
}

function guestPlusTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
    compareScores()
}

function guestPlusThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
    compareScores()
}

function compareScores() {
    if ( homeScore > guestScore ) {
        homeWrapperEl.style.boxShadow = "0 0px 25px #F94F6D"
        homeWrapperEl.style.border = "3px solid #F94F6D"
        guestWrapperEl.style.boxShadow = "none"
        guestWrapperEl.style.border = "3px solid #1B244A"
    } else if ( homeScore < guestScore ) {
        guestWrapperEl.style.boxShadow = "0 0px 25px #F94F6D"
        guestWrapperEl.style.border = "3px solid #F94F6D"
        homeWrapperEl.style.boxShadow = "none"
        homeWrapperEl.style.border = "3px solid #1B244A"
    }
}

function homeFoulsPlusOne() {
    homeFouls += 1
    homeFoulsEl.textContent = "Fouls: " + homeFouls
}

function guestFoulsPlusOne() {
    guestFouls += 1
    guestFoulsEl.textContent = "Fouls: " + guestFouls
}

function newGame() {
    homeScore = 0
    homeScoreEl.textContent = homeScore
    homeFouls = 0
    homeFoulsEl.textContent = "Fouls: " + homeFouls
    homeWrapperEl.style.boxShadow = "none"
    homeWrapperEl.style.border = "3px solid #1B244A"
    
    guestScore = 0
    guestScoreEl.textContent = guestScore
    guestFouls = 0
    guestFoulsEl.textContent = "Fouls: " + guestFouls
    guestWrapperEl.style.boxShadow = "none"
    guestWrapperEl.style.border = "3px solid #1B244A"
}