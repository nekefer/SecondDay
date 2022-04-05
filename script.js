const prev = document.getElementById('prev')
const next = document.getElementById('next')
const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle') 
let ActiveNow = 1

next.addEventListener('click', () => {
    ActiveNow++
    if(ActiveNow > circles.length) {
        ActiveNow = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    ActiveNow--
    if(ActiveNow < 1) {
        ActiveNow = 1
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < ActiveNow) {
            circle.classList.add('active')
            progress.style.width = idx * (100/3)+ '%'
        } else {
            circle.classList.remove('active')
        }
    })
    if(ActiveNow === 1) {
        prev.disabled = true
    } else if(ActiveNow === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}