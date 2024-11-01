document.addEventListener("DOMContentLoaded", function () {
    const eventDate = new Date("December 15, 2024 05:30:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = eventDate - now;

        if (timeRemaining <= 0) {
            clearInterval(countdown);
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = days.toString().padStart(2, "0");
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }, 1000);
});

let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-player', {
        videoId: 'npT_R6QvWvY',
        playerVars: {
            'autoplay': 1,
            'controls': 0,
            'showinfo': 0,
            'modestbranding': 1,
            'loop': 1,
            'playlist': 'npT_R6QvWvY',
            'start': 4,
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    try {
        event.target.playVideo();
    } catch (error) {
        console.log("La reproducción automática fue bloqueada:", error);
        showPlayButton();
    }
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PAUSED) {
        showPlayButton();
    }
}

function showPlayButton() {
    const playButton = document.getElementById('play-sound-btn');
    playButton.style.display = 'block';
    playButton.onclick = () => {
        player.playVideo();
        playButton.style.display = 'none';
    };
}
