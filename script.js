const container = document.querySelector('.container')
const text = document.querySelector('#text')

const totalTime = 10000              // In milliseconds
const breatheInOut = (totalTime / 5) * 2
const holdTime = totalTime / 5

breathingAnimation()

function breathingAnimation () {
    text.innerHTML = 'Inhale'
    container.className = 'container expand'

    setTimeout(() => {
        text.innerText = 'Hold...'

        setTimeout(() => {
            text.innerText = 'Exhale'
            container.className = 'container shrink'
        }, holdTime)
    }, breatheInOut)
}

setInterval(breathingAnimation, totalTime)

