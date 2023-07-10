console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.aac');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Palak Muchhal - Kaun Tujhe", filePath: "E:/aumya's project/Spotify Clone/songs/1.aac", coverPath: "covers/1.jpeg"},
    {songName: "Alka Yagnik - Tum mile Dil khile", filePath: "songs/2.mpeg", coverPath: "covers/2.jpeg"},
    {songName: "Darshan Raval - Asal Mein", filePath: "songs/3.mpeg", coverPath: "covers/3.jpeg"},
    {songName: "Sunil Kamath - Kinna Sona", filePath: "songs/4.aac", coverPath: "covers/4.jpeg"},
    {songName: "Vishal Mishra x Shreya Ghoshal - Zilhaal-e-Miskin", filePath: "songs/5.mpeg", coverPath: "covers/5.jpeg"},
    {songName: "Armaan Malik - Wajah Tum Ho", filePath: "songs/6.mpeg", coverPath: "covers/6.jpeg"},
    {songName: "Darshan Raval - Hawa Banke", filePath: "songs/7.mpeg", coverPath: "covers/7.jpeg"},
    {songName: "Rapper King - Maan Meri Jaan", filePath: "songs/8.mpeg", coverPath: "covers/8.jpeg"},
    {songName: "Arijit Singh - Tera Fitoor", filePath: "songs/9.mpeg", coverPath: "covers/9.jpeg"},
    {songName: "Armaan Malik - Pehla Pyaar", filePath: "songs/10.mpeg", coverPath: "covers/10.jpeg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})