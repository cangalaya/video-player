const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward.addEventListener('click', handleBackward)
$forward.addEventListener('click', handleForward)

function handlePlay(){
    console.log('le diste click al boton de play')
    $video.play()
    $play.hidden = true
    $pause.hidden = false
}
function handlePause(){
    console.log('click al pausa')
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
}
function handleBackward(){
    $video.currentTime -= 10
    console.log("atrazar 5s")   

}
function handleForward(){
    $video.currentTime += 10
    console.log("adelantar 5s")

}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)


function handleLoaded(){
    $progress.max = $video.duration
    console.log('diracion del video:', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput(){
    $video.currentTime = $progress.value
}