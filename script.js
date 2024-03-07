let leftButton = document.querySelector("#leftButton")
let rightButton = document.querySelector("#rightButton")
let background = document.querySelector("#background")
let wordList = document.querySelector("#wordList")
let fade = document.querySelector("#fade")

let backgroundList = [
    "background_image.jpg",
    "background_image_italy.jpg",
    "background_image_newyork.jpg",
    "background_image_parije.jpg",
    "background_image_maldives.jpg"
    ]

let backgroundCount = 0
let wordCount = 1

leftButton.addEventListener("click", async ()=>{
    if(backgroundCount != 0){
        backgroundCount-=1
    }
    if(wordCount != 1){
        wordCount-=1
    }

    wordList.children[wordCount].style.color = "white"
    wordList.children[wordCount+1].style.color = ""
    wordList.children[wordCount].style.setProperty('--chosen','-10%')
    wordList.children[wordCount+1].style.setProperty('--chosen','-120%')

    fade.style.opacity = "1"
    await new Promise(r => setTimeout(r, 400));
    background.style.backgroundImage = "url(img/"+backgroundList[backgroundCount]+")"
    fade.style.opacity = "0"
    console.log(wordCount);
})

rightButton.addEventListener("click", async ()=>{
    if(backgroundCount != 4){
        backgroundCount+=1
    }
    if(wordCount != 7){
        wordCount+=1
    }

    console.log(wordCount);
    wordList.children[wordCount].style.color = "white"
    wordList.children[wordCount-1].style.color = ""
    wordList.children[wordCount].style.setProperty('--chosen','-10%')
    wordList.children[wordCount-1].style.setProperty('--chosen','-120%')

    fade.style.opacity = "1"
    await new Promise(r => setTimeout(r, 400));
    background.style.backgroundImage = "url(img/"+backgroundList[backgroundCount]+")"
    fade.style.opacity = "0"
})