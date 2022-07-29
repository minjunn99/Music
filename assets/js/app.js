// Define class Music
class Music {
    #mixBtn = HTMLElement;
    #nextBtn = HTMLElement;
    #playBtn = HTMLElement;
    #prevBtn = HTMLElement;
    #repeatBtn = HTMLElement;
    #musicAudio = HTMLElement;

    #musics = Array;
    #isPlaying = Boolean;
    #currentSongIndex = Number;

    constructor(musics) {
        this.#mixBtn = document.querySelector("#musicMixBtn");
        this.#prevBtn = document.querySelector("#musicPrevBtn");
        this.#playBtn = document.querySelector("#musicPlayBtn");
        this.#nextBtn = document.querySelector("#musicNextBtn");
        this.#repeatBtn = document.querySelector("#musicRepeatBtn");
        this.#musicAudio = document.querySelector("#musicAudio");

        this.#musics = musics || [];
        this.#isPlaying = false;
        this.#currentSongIndex = 0;
    }

    #handleEvent() {
        const playHandle = this.#play.bind(this);
        const nextHandle = this.#next.bind(this);
        const prevHandle = this.#prev.bind(this);

        // Play / pause song
        this.#playBtn.onclick = playHandle;

        // Next song
        this.#nextBtn.onclick = nextHandle;

        // Prev song
        this.#prevBtn.onclick = prevHandle;
    }

    #show() {
        // Get info current song
        const { name, artist, imgSrc, audioSrc } =
            this.#musics[this.#currentSongIndex];

        // Show info
        const musicCdImage = document.querySelector(".music--cd img");
        const musicName = document.querySelector(".music--name");
        const musicArtist = document.querySelector(".music--artist");

        musicCdImage.setAttribute("src", imgSrc);
        musicName.innerText = name;
        musicArtist.innerText = artist;
        this.#musicAudio.setAttribute("src", audioSrc);
    }

    #spinCd() {
        const musicCd = document.querySelector(".music--cd");

        if (this.#isPlaying) {
            this.#playBtn.innerHTML = `<span class="material-icons"> pause </span>`;
            // Start spin image
            musicCd.setAttribute("data-spin", "true");
        } else {
            this.#playBtn.innerHTML = `<span class="material-icons"> play_arrow </span>`;
            // Pause spin image
            musicCd.setAttribute("data-spin", "false");
        }
    }

    #play() {
        this.#isPlaying = !this.#isPlaying;

        if (this.#isPlaying) {
            this.#musicAudio.play();
        } else {
            this.#musicAudio.pause();
        }

        this.#spinCd();
    }

    #next() {
        this.#currentSongIndex++;

        if (this.#currentSongIndex > this.#musics.length - 1) {
            this.#currentSongIndex = 0;
        }

        // Show song
        this.#show();

        // Play song
        this.#isPlaying = true;
        this.#musicAudio.play();

        // spin image
        this.#spinCd();
    }

    #prev() {
        this.#currentSongIndex--;
        if (this.#currentSongIndex < 0) {
            this.#currentSongIndex = this.#musics.length - 1;
        }

        // Show song
        this.#show();

        // Play song
        this.#isPlaying = true;
        this.#musicAudio.play();

        // spin image
        this.#spinCd();
    }

    start() {
        // Event listener
        this.#handleEvent();

        // Show song
        this.#show();
    }
}

// Variables
let musics = [
    {
        name: "2002",
        artist: "Anne Marie",
        imgSrc: "https://i1.sndcdn.com/artworks-000372374865-gkxr1g-t500x500.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/325932",
    },
    {
        name: "left and right",
        artist: "charlie puth, jungkook",
        imgSrc: "https://i.ytimg.com/vi/mxi14CfMjEk/hqdefault.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/414481",
    },
    {
        name: "glimpse of us",
        artist: "joji",
        imgSrc: "https://i.ytimg.com/vi/s0JJxPyhOH0/maxresdefault.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/408927",
    },
    {
        name: "double take",
        artist: "dhruv",
        imgSrc: "https://i.ytimg.com/vi/Tx_gaWQh42U/maxresdefault.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/288203",
    },
    {
        name: "abcdefu",
        artist: "gayle",
        imgSrc: "https://i.pinimg.com/originals/b2/93/e0/b293e0c3ca51d359106393ea1ed0afb2.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/361215",
    },
    {
        name: "that girl",
        artist: "olly murs",
        imgSrc: "https://i.ytimg.com/vi/3q2IXr6fjh0/maxresdefault.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/11",
    },
    {
        name: "Until I Found You",
        artist: "Stephen Sanchez",
        imgSrc: "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/until-i-found-you-dipopulerkan-oleh-penyanyi-stephen-sanchez.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/432324",
    },
    {
        name: "sugar",
        artist: "maroon 5",
        imgSrc: "https://avatar-nct.nixcdn.com/song/2018/06/22/0/c/c/b/1529655970762_640.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/116",
    },
    {
        name: "All Falls Down",
        artist: "Alan Walker, Noah Cyrus, Digital Farm Animals",
        imgSrc: "https://avatar-nct.nixcdn.com/song/2017/10/27/9/d/8/d/1509093543890_640.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/399",
    },
    {
        name: "faded",
        artist: "alan walker",
        imgSrc: "https://avatar-nct.nixcdn.com/song/2017/11/20/f/c/e/7/1511141429975_640.jpg",
        audioSrc: "https://tainhacmienphi.biz/download-music/413",
    },
];

// Function
function init() {
    let music = new Music(musics);
    music.start();
}

// Event Listener
document.addEventListener("DOMContentLoaded", init);
