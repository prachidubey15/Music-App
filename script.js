let progressbar = document.getElementById("progressbar");
let play = document.getElementById("playButton")
let recPlayed = document.querySelector("#recPlayed")
let chartsRec = document.querySelector("#chartsRec")
let recommended4u = document.querySelector("#recommended4u")
let coverImg = document.getElementById("cover");
let songName = document.querySelector("#playerlft h5");
let singerName = document.querySelector("#playerlft span");
let volumeBar = document.getElementById("volumeBar");
let volumeButton = document.getElementById("volume");
let volRange = document.getElementById("vol");
let previous = document.getElementById("pre");
let nextSong = document.getElementById("nxt");
let repeat = document.getElementById("repeat");
let cardeee = document.querySelectorAll(".card");
var num = 1;
let songIndex = Number(0);
let ch = 0;
let rec = 0;
let vol;

let recentlyPlayed = [
    { name: "Let Me Love You", details: "DJ Snake - Let Me Love You ft. Justin Bieber", cover: "https://upload.wikimedia.org/wikipedia/en/a/a5/DJSnakeLetMeLoveYou.jpg", filePath: "./songs/1.mp3" },
    { name: "Shape of You", details: "Ed Sheeran - Shape Of You", cover: "https://imgs.search.brave.com/PM01TSZDKb9a-xApkWwEMdsDk_Z3_bF9L8_M-HWFEu0/rs:fit:1200:1200:1/g:ce/aHR0cDovL2hlYWRs/aW5lcGxhbmV0LmNv/bS9ob21lL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE3LzAxL1No/YXBlLU9mLVlvdS1D/b3Zlci1lMTQ4NTEz/ODQ2NzczNC5qcGc", filePath: "./songs/2.mp3" },
    { name: "Darasal", details: "Singer-Atif Aslam", cover: "https://www.pagalworld.us/_big/raabta-2017-250.jpg", filePath: "./songs/3.mp3" },
    { name: "Baarishein", details: "Singer-Anuv Jain", cover: "./covers/4.jpg", filePath: "./songs/4.mp3" },
    { name: "Mazaak", details: "Singer-Anuv Jain", cover: "./covers/5.jfif", filePath: "./songs/5.mp3" },
    { name: "Maan Meri Jaan", details: "Singer-King", cover: "https://i.scdn.co/image/ab67616d0000b273d2e9ef109c65387881158b48", filePath: "./songs/6.mp3" },
    { name: "Pyaar Hota Kayi Baar", details: "Singer-Arijit Singh", cover: "https://thumb.mp3jio.com/thumb/sft166/82652_4.jpg", filePath: "./songs/7.mp3" },
    { name: "Kahani Suno", details: "Singer-Kaifi Khalil", cover: "https://www.pagalworldt.com/wp-content/uploads/2023/02/Kahani-Suno-2-0-mp3-image.jpg", filePath: "./songs/8.mp3" },
    { name: "Malang Sajna", details: "Singer-Sachet Parampara", cover: "https://c.saavncdn.com/303/Malang-Sajna-Hindi-2022-20221213190427-500x500.jpg", filePath: "./songs/9.mp3" },
    { name: "Ishq Nahi Karte", details: "Singer-B Praak", cover: "https://mobstatus.com/wp-content/uploads/2022/03/ishq-nahi-karte-status.jpg", filePath: "./songs/10.mp3" },

];
let charts = [
    { name: "Judaai", details: "Mitraz", cover: "https://pagalnew.com/coverimages/Judaai-Mitraz-500-500.jpg", filePath: "./songs/11.mp3" },
    { name: "Kesariya", details: "Arijit Singh", cover: "https://c.saavncdn.com/191/Kesariya-From-Brahmastra-Hindi-2022-20220717092820-500x500.jpg", filePath: "./songs/12.mp3" },
    { name: "Srivalli", details: "Javed Ali", cover: "https://i.scdn.co/image/ab67616d0000b273b53d8029dc2d52bd0384d922", filePath: "./songs/13.mp3" },
    { name: "Raatan Lambiyan", details: "Jubin Nautiyal, Asees Kaur", cover: "https://c.saavncdn.com/222/Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg", filePath: "./songs/14.mp3" },
    { name: "Pyaar Karte Ho Na", details: "Stebin Ben, Shreya Ghoshal", cover: "https://c.saavncdn.com/150/Pyaar-Karte-Ho-Na-Hindi-2021-20211123053301-500x500.jpg", filePath: "./songs/15.mp3" },
    { name: "Main Tera Ho Gaya", details: "Yasser Desai", cover: "https://c.saavncdn.com/741/Main-Tera-Ho-Gaya-Hindi-2021-20211007115439-500x500.jpg", filePath: "./songs/16.mp3" },
    { name: "Mehbooba", details: "Ananya Bhat", cover: "https://c-cl.cdn.smule.com/smule-gg-uw1-s-5/arr/2d/78/30dfeb06-b480-4097-a945-7c926255a13c.jpg", filePath: "./songs/17.mp3" },
    { name: "Jaadugar", details: "Paradox", cover: "https://c.saavncdn.com/140/Jaadugar-Hindi-2021-20230107085445-500x500.jpg", filePath: "./songs/18.mp3" },
    { name: "Woh", details: "Ikka, Dino James, Badshah", cover: "https://c.saavncdn.com/675/Woh-Punjabi-2019-20190527135034-500x500.jpg", filePath: "./songs/19.mp3" },
    { name: "Everything Sucks", details: "Arjun Kanungo, Vault Boy", cover: "https://i.scdn.co/image/ab67616d0000b2730a47a8c37f83710d4ce75362", filePath: "./songs/20.mp3" },
];
let recommend4u = [
    { name: "Perfect Lofi", details: "Jass Manak", cover: "https://c.saavncdn.com/951/Love-Thunder-Punjabi-2022-20220919195405-500x500.jpg", filePath: "./songs/21.mp3" },
    { name: "Gul", details: "Anuv Jain", cover: "https://i.scdn.co/image/ab67616d0000b27346b1b675145743583384dc24", filePath: "./songs/22.mp3" },
    { name: "Riha", details: "Anuv Jain", cover: "https://images.genius.com/621bdd4975845663c246fc8b8fdcee9c.1000x1000x1.jpg", filePath: "./songs/23.mp3" },
    { name: "Kali Kali Zulfon Ke", details: "Madhur Sharma", cover: "https://c.saavncdn.com/585/Kali-Kali-Zulfon-Ke-Lo-Fi--Hindi-2022-20220204190541-500x500.jpg", filePath: "./songs/24.mp3" },
    { name: "Kya Karein", details: "Ananya Birla, Ankur Tewari", cover: "https://i.scdn.co/image/ab67616d0000b273dc8c775858afd303d7b6d798", filePath: "./songs/25.mp3" },
    { name: "OOPS", details: "King", cover: "https://i.scdn.co/image/ab67616d0000b27365234917c3dc6c5714367508", filePath: "./songs/26.mp3" },
    { name: "Dil Galti Kar Baitha Hai", details: "Jubin Nautiyal", cover: "https://m.media-amazon.com/images/M/MV5BNGUzMDJiYjItNTUyZi00ZGNkLTk3ZmItNmU0N2MxNDFlYjhkXkEyXkFqcGdeQXVyOTE5MTczMTc@._V1_.jpg", filePath: "./songs/27.mp3" },
    { name: "Saami Saami", details: "Sunidhi Chauhan", cover: "https://i.scdn.co/image/ab67616d0000b27340ed2429b33f173ea6346287", filePath: "./songs/28.mp3" },
    { name: "Har Har Shambhu Shiv Mahadeva", details: "Abhilipsa Panda, Jeetu Sharma", cover: "https://c.saavncdn.com/626/Har-Har-Shambhu-Hindi-2022-20220628193332-500x500.jpg", filePath: "./songs/29.mp3" },
    { name: "Jaana", details: "Stebin Ben", cover: "https://c.saavncdn.com/400/Jaana-Hindi-2022-20220822053552-500x500.jpg", filePath: "./songs/30.mp3" },
];

let playElement = new Audio("./songs/1.mp3");

//progressBar Update
playElement.addEventListener("timeupdate", () => {
    progress = (playElement.currentTime / playElement.duration * 100);
    progressbar.value = progress;
    if (progress == 100) {
        //recentlyPlayed
        if (num > 0 && num < 11) {
            songIndex++;
            let x = songIndex;
            playElement.src = `${recentlyPlayed[x].filePath}`;
            playElement.play();
            coverImg.src = `${recentlyPlayed[x].cover}`;
            songName.textContent = `${recentlyPlayed[x].name}`;
            singerName.textContent = `${recentlyPlayed[x].details}`;
            play.classList.remove("ri-play-circle-fill")
            play.classList.add("ri-pause-circle-fill")
            num = (recentlyPlayed[x].filePath.split("/"))[2].split(".")[0];
        }
        else if (num > 10 && num < 21) {
            ch++;
            let x = ch;
            playElement.src = `${charts[x].filePath}`;
            playElement.play();
            coverImg.src = `${charts[x].cover}`;
            songName.textContent = `${charts[x].name}`;
            singerName.textContent = `${charts[x].details}`;
            play.classList.remove("ri-play-circle-fill")
            play.classList.add("ri-pause-circle-fill")
            num = (charts[x].filePath.split("/"))[2].split(".")[0];
        }
        //recommend4u
        else if (num > 20 && num < 31) {
            rec++;
            let x = rec;
            playElement.src = `${recommend4u[x].filePath}`;
            playElement.play();
            coverImg.src = `${recommend4u[x].cover}`;
            songName.textContent = `${recommend4u[x].name}`;
            singerName.textContent = `${recommend4u[x].details}`;
            play.classList.remove("ri-play-circle-fill")
            play.classList.add("ri-pause-circle-fill")
            num = (recommend4u[x].filePath.split("/"))[2].split(".")[0];
        }
    }
    //changing progressBar color
    var color = `linear-gradient(90deg,orangered ${progress}%,#dadada ${progress}%)`;
    progressbar.style.background = color;
})

//audio seek
progressbar.addEventListener("change", () => {
    progress = (progressbar.value * playElement.duration / 100)
    playElement.currentTime = progress;
})

//play/pause
play.addEventListener("click", () => {
    if (playElement.currentTime == 0 || playElement.paused) {
        playElement.play();
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
    }
    else {
        playElement.pause();
        play.classList.add("ri-play-circle-fill")
        play.classList.remove("ri-pause-circle-fill")
    }
})


//Recent Played Loader
var clutter = ""
recentlyPlayed.forEach((elem, i) => {
    // console.log(elem);
    clutter += `<div class="card">
    <div class="image">
        <img src="${elem.cover}" alt="">
        <i class="ri-play-circle-fill" id = "${i}"></i>
    </div>
    <div class="text">
        <h3>${elem.name}</h3>
        <span>${elem.details}</span>
    </div>
</div>`
    document.querySelector("#recPlayed").innerHTML = clutter

})

//Recent Played Player
recPlayed.addEventListener("click", function (details) {
    var x = (details.target.id);
    playElement.src = `${recentlyPlayed[x].filePath}`;
    playElement.play();
    coverImg.src = `${recentlyPlayed[x].cover}`;
    songName.textContent = `${recentlyPlayed[x].name}`;
    singerName.textContent = `${recentlyPlayed[x].details}`;
    play.classList.remove("ri-play-circle-fill")
    play.classList.add("ri-pause-circle-fill")
    songIndex = parseInt(x);
    num = (recentlyPlayed[x].filePath.split("/"))[2].split(".")[0];
})

//Chart Loader
var clutter2 = ""
charts.forEach((elem2, i2) => {
    // console.log(elem);
    clutter2 += `<div class="card">
    <div class="image">
        <img src="${elem2.cover}" alt="">
        <i class="ri-play-circle-fill" id = "${i2}"></i>
    </div>
    <div class="text">
        <h3>${elem2.name}</h3>
        <span>${elem2.details}</span>
    </div>
</div>`
    document.querySelector("#chartsRec").innerHTML = clutter2

})

//Chart Player
chartsRec.addEventListener("click", function (details) {
    var x = (details.target.id);
    // console.log(x);
    playElement.src = `${charts[x].filePath}`;
    playElement.play();
    coverImg.src = `${charts[x].cover}`;
    songName.textContent = `${charts[x].name}`;
    singerName.textContent = `${charts[x].details}`;
    play.classList.remove("ri-play-circle-fill")
    play.classList.add("ri-pause-circle-fill")
    ch = parseInt(x);
    num = (charts[x].filePath.split("/"))[2].split(".")[0];
})

//Recommende Loader
var clutter3 = ""
recommend4u.forEach((elem3, i3) => {
    // console.log(elem);
    clutter3 += `<div class="card">
    <div class="image">
        <img src="${elem3.cover}" alt="">
        <i class="ri-play-circle-fill" id = "${i3}"></i>
    </div>
    <div class="text">
        <h3>${elem3.name}</h3>
        <span>${elem3.details}</span>
    </div>
</div>`
    document.querySelector("#recommended4u").innerHTML = clutter3

})

//Recommended Player
recommended4u.addEventListener("click", function (details) {
    var x = (details.target.id);
    // console.log(x);
    playElement.src = `${recommend4u[x].filePath}`;
    playElement.play();
    coverImg.src = `${recommend4u[x].cover}`;
    songName.textContent = `${recommend4u[x].name}`;
    singerName.textContent = `${recommend4u[x].details}`;
    play.classList.remove("ri-play-circle-fill")
    play.classList.add("ri-pause-circle-fill")
    rec = parseInt(x);
    num = (recommend4u[x].filePath.split("/"))[2].split(".")[0];
})

//previous & next

//next song
nextSong.addEventListener("click", () => {
    //recentlyPlayed
    if (num > 0 && num < 11) {
        if (songIndex == recentlyPlayed.length - 1)
            songIndex = 0;
        else
            songIndex++;

        let x = songIndex;
        playElement.src = `${recentlyPlayed[x].filePath}`;
        playElement.play();
        coverImg.src = `${recentlyPlayed[x].cover}`;
        songName.textContent = `${recentlyPlayed[x].name}`;
        singerName.textContent = `${recentlyPlayed[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (recentlyPlayed[x].filePath.split("/"))[2].split(".")[0];
    }
    else if (num > 10 && num < 21) {
        if (ch == charts.length - 1)
            ch = 0;
        else
            ch++;

        let x = ch;
        playElement.src = `${charts[x].filePath}`;
        playElement.play();
        coverImg.src = `${charts[x].cover}`;
        songName.textContent = `${charts[x].name}`;
        singerName.textContent = `${charts[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (charts[x].filePath.split("/"))[2].split(".")[0];
    }
    //recommend4u
    else if (num > 20 && num < 31) {
        if (rec == recommend4u.length - 1)
            rec = 0;
        else
            rec++;

        let x = rec;
        playElement.src = `${recommend4u[x].filePath}`;
        playElement.play();
        coverImg.src = `${recommend4u[x].cover}`;
        songName.textContent = `${recommend4u[x].name}`;
        singerName.textContent = `${recommend4u[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (recommend4u[x].filePath.split("/"))[2].split(".")[0];
    }
})

//previous song
previous.addEventListener("click", () => {
    //Recently played
    if (num > 0 && num < 11) {
        if (songIndex == 0) {
            songIndex = 0;
            alert("Not previous Song Found")
        }
        else
            songIndex--;

        let x = songIndex;
        playElement.src = `${recentlyPlayed[x].filePath}`;
        playElement.play();
        coverImg.src = `${recentlyPlayed[x].cover}`;
        songName.textContent = `${recentlyPlayed[x].name}`;
        singerName.textContent = `${recentlyPlayed[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (recentlyPlayed[x].filePath.split("/"))[2].split(".")[0];
    }
    //charts
    else if (num > 10 && num < 21) {
        if (ch == 0) {
            ch = 0;
            alert("Not previous Song Found")
        }
        else
            ch--;
        let x = ch;
        playElement.src = `${charts[x].filePath}`;
        playElement.play();
        coverImg.src = `${charts[x].cover}`;
        songName.textContent = `${charts[x].name}`;
        singerName.textContent = `${charts[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (charts[x].filePath.split("/"))[2].split(".")[0];
    }
    //recommend4u
    else if (num > 20 && num < 31) {
        if (rec == 0) {
            rec = 0;
            alert("Not previous Song Found")
        }
        else
            rec--;

        let x = rec;
        playElement.src = `${recommend4u[x].filePath}`;
        playElement.play();
        coverImg.src = `${recommend4u[x].cover}`;
        songName.textContent = `${recommend4u[x].name}`;
        singerName.textContent = `${recommend4u[x].details}`;
        play.classList.remove("ri-play-circle-fill")
        play.classList.add("ri-pause-circle-fill")
        num = (recommend4u[x].filePath.split("/"))[2].split(".")[0];
    }
})

//repeat
let flag = 0;
repeat.addEventListener("click", () => {
    if (flag == 0) {
        repeat.style.backgroundColor = "#222"
        flag = 1;
        playElement.loop = true;
    }
    else {
        repeat.style.backgroundColor = "transparent"
        flag = 0
        playElement.loop = false;
    }
    // player(x++);
})

//suffel



//volume
function rangeSlide(value) {
    vol = value;
    document.getElementById("volumeBar").innerHTML = value;
    playElement.volume = value / 100;
    if (value == 0) {
        volumeButton.classList.remove("ri-volume-down-line");
        volumeButton.classList.add("ri-volume-mute-line")
    }
    else {
        volumeButton.classList.add("ri-volume-down-line");
        volumeButton.classList.remove("ri-volume-mute-line")
    }
}

//Changing VolumeBar Color
['mousemove', 'click'].forEach(evt => volRange.addEventListener(evt, function () {
    var color = `linear-gradient(90deg,orangered ${vol}%,#dadada ${vol}%)`;
    volRange.style.background = color;
}))