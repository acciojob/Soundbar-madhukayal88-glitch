const sounds = ['applause', 'beeps', 'bubbles', 'camera', 'clay', 'confetti'];

sounds.forEach(sound => {
    // Create a button for each sound
    const btn = document.createElement('button');
    btn.classList.add('btn'); // Requirement: class as btn

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs(); // Stop other sounds before playing this one

        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

// Create the Stop button
const stopBtn = document.createElement('button');
stopBtn.classList.add('stop'); // Requirement: class as stop
stopBtn.innerText = 'STOP';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

document.getElementById('buttons').appendChild(stopBtn);

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0; // Reset the audio to the beginning
    });
}