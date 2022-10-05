const musicInfoCont = document.getElementById("music-for-all")
let currentPosition = 0;

// function nextAndPrevPlays(sOne,nsOne,psOne,npOne,ppOne,npsOne,ppsOne) {
//     if (sOne.paused == true) {
//         nsOne.pause()
//         npOne.style.display = "block"
//         npsOne.style.display = "none"
//     }
//     else{
//         sOne.pause()
//         npOne.style.display = "none"
//         npsOne.style.display = "block"
//         nsOne.play()
//         console.log("no");
//     }

//     if (sOne.paused == true) {
//         psOne.pause()
//         ppOne.style.display = "block"
//         ppsOne.style.display = "none"
//     }
//     else{
//         sOne.pause()
//         ppOne.style.display = "none"
//         ppsOne.style.display = "block"
//         psOne.play()
//         console.log("no");
//     }
// }
function playlist(play,pause,next,prev) {
    play.forEach((p)=>{
        p.addEventListener("click",()=>{
            let sound = p.parentElement.parentElement.querySelector(".audios")
            let pauseIcon = p.parentElement.querySelector(".pause")
            let imgCont = p.parentElement.parentElement.parentElement.querySelector(".img-cont")
            sound.play()
            p.style.display = "none"
            pauseIcon.style.display = "block"
            imgCont.classList.add("spin-coupe")
            // console.log(p.parentElement.parentElement.parentElement.querySelector(".img-cont"));
        })
    })
   
    pause.forEach((pa)=>{
        pa.addEventListener("click",()=>{
            let sound = pa.parentElement.parentElement.querySelector(".audios")
            let playIcon = pa.parentElement.querySelector(".play")
            let imgCont = pa.parentElement.parentElement.parentElement.querySelector(".img-cont")
            sound.pause()
            pa.style.display = "none"
            playIcon.style.display = "block"
            imgCont.classList.remove("spin-coupe")
        })
    })

    next.forEach((n)=>{
        n.addEventListener("click",()=>{
            let nextSound = n.parentElement.parentElement.parentElement.nextSibling.querySelector(".audios")
            let nextPlayBtn = n.parentElement.parentElement.parentElement.nextSibling.querySelector(".play")
            let nextPauseBtn = n.parentElement.parentElement.parentElement.nextSibling.querySelector(".pause")
            let sound = n.parentElement.parentElement.querySelector(".audios")
            console.log(nextSound);

            // nextAndPrevPlays(sound,nextSound,prevSound,nextPlayBtn,prevPlayBtn,nextPauseBtn,prevPauseBtn)
            if (sound.paused == true) {
                nextSound.pause()
                nextPlayBtn.style.display = "block"
                nextPauseBtn.style.display = "none"
            }
            else{
                sound.pause()
                nextPlayBtn.style.display = "none"
                nextPauseBtn.style.display = "block"
                nextSound.play()
                console.log("no");
            }
            currentPosition += 1;
            console.log(currentPosition);                                  
            if (currentPosition == allSongs.length) {
                currentPosition = 0
            }
                    for (let index = 0; index < allSongs.length; index++) {
                    allSongs[index].style.transform = `translateX(-${currentPosition}00%)`
                    
                }
        })
    })

    prev.forEach((pr)=>{
        pr.addEventListener("click",()=>{
            let prevSound = pr.parentElement.parentElement.parentElement.previousSibling.querySelector(".audios")
            let prevPlayBtn = pr.parentElement.parentElement.parentElement.previousSibling.querySelector(".play")
            let prevPauseBtn = pr.parentElement.parentElement.parentElement.previousSibling.querySelector(".pause")
            let sound = pr.parentElement.parentElement.querySelector(".audios")
            console.log(prevSound);
            if (sound.paused == true) {
                prevSound.pause()
                prevPlayBtn.style.display = "block"
                prevPauseBtn.style.display = "none"
            }
            else{
                sound.pause()
                prevPlayBtn.style.display = "none"
                prevPauseBtn.style.display = "block"
                prevSound.play()
                console.log("no");
            }
            if (currentPosition == 0) {
                console.log(allSongs.length);
                currentPosition = 10
            }
            currentPosition -= 1
            console.log(currentPosition);

            for (let index = 0; index < allSongs.length; index++) {
                allSongs[index].style.transform = `translateX(-${currentPosition}00%)`
                
            }
        })
    })

}


let showSongs = allMusicInfo.map((m)=>{
    return `<div class="shrink-0 w-full flex p-8 flex-wrap flex-col items-center all-songs">
                <div class="md:w-2/5 flex flex-col justify-between">
                    <div class="border-4 p-1.5 border-zinc-900 rounded-full img-cont" id="song-img">
                        <img src="${m.songImage}" alt="" class="h-full w-full rounded-full">
                    </div>
                    <div class="text-end md:text-lg text-zinc-400" id="album-name">
                        <p class="">${m.album}</p>
                    </div>
                </div> 
                <div class="w-full md:w-3/5 md:pl-8 flex flex-col h-3/6 mt-4 md:mt-24">
                        <div>
                            <p class="text-lg md:text-5xl md:pb-2">${m.songName}</p>
                            </div>
                            <p class="md:text-2xl text-zinc-300">${m.artist}</p>
                    <div>
                        <audio controls class="maintape bg-zinc-800 hidden audios">
                            <source src="${m.songLink}" type="audio/ogg">
                        </audio> 
                        <div class="mt-10 md:mt-20 mb-8">
                            <div id="length" class="md:w-8/12 h-2.5 bg-zinc-300 rounded-l-full rounded-r-full">
                                <div class="h-full bg-white rounded-l-full rounded-r-full relative" id="timer">
                                    <div class="absolute w-5 h-5 bg-white inset-full top-1/4 rounded-full cursor-pointer" id="current-lo"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-8/12 flex justify-between items-center">
                        <i class="fa-solid fa-backward text-4xl md:text-6xl cursor-pointer prev hover:bg-zinc-700 md:p-2.5 rounded-full md:pr-3.5"></i>
                        <i class="fa-solid fa-play text-7xl cursor-pointer play  hover:bg-zinc-700 md:p-2.5 rounded-full md:px-5"></i>
                        <i class="fa-solid fa-pause hidden text-7xl cursor-pointer pause hover:bg-zinc-700 md:p-2.5 rounded-full md:px-5"></i>
                        <i class="fa-solid fa-forward text-4xl md:text-6xl cursor-pointer next hover:bg-zinc-700 md:p-2.5 rounded-full md:pl-3.5"></i>
                    </div>
                    <div class="mt-20 md:mt-20 mb-8 flex justify-center items-center  md:w-8/12">
                    <i class="fa-solid fa-volume-low"></i>
                        <div id="length" class="w-5/6 md:w-4/12 mx-2.5 h-1.5 bg-zinc-300 rounded-l-full rounded-r-full">
                            <div class="h-full bg-white rounded-l-full rounded-r-full relative " id="timer">
                                <div class="absolute w-2.5 h-2.5 bg-white inset-full top-1/4 rounded-full cursor-pointer" id="current-lo-volume">
                            </div>
                        </div>
                        </div>
                        <i class="fa-solid fa-volume-high"></i>
                </div>
                </div>
            </div>`
})

musicInfoCont.innerHTML = showSongs.join("")
let songImg = document.querySelectorAll(".img-cont")
let playBtn = document.querySelectorAll(".play")
let pauseBtn = document.querySelectorAll(".pause")
let prevBtn = document.querySelectorAll(".prev")
let nextBtn = document.querySelectorAll(".next")
let allSongs = document.querySelectorAll(".all-songs")

playlist(playBtn,pauseBtn,nextBtn,prevBtn)