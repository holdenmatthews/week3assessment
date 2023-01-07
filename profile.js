const colorBtn = document.querySelector("#color")

const favColor = () => {
    alert('My favorite color is Red.')
}

colorBtn.addEventListener("click", favColor)

const placeBtn = document.querySelector("#place")

const favPlace = () => {
    alert('My favorite place is The Netherlands.')
}

placeBtn.addEventListener("click", favPlace)

const ritualBtn = document.querySelector("#ritual")

const favRitual = () => {
    alert("I don't know what my favorite ritual is...")
}

ritualBtn.addEventListener("click", favRitual)