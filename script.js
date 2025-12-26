// 1. Array of sound names based on your provided screenshot
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

// 2. Loop through the array to create buttons dynamically
sounds.forEach(sound => {
    const btn = document.createElement('button');
    
    // Requirement: Set class as 'btn'
    btn.classList.add('btn');
    
    btn.innerText = sound;

    // Event listener to play the specific sound
    btn.addEventListener('click', () => {
        stopSongs(); // Ensure only one sound plays at a time
        document.getElementById(sound).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

// 3. Create the Stop Button separately
const stopBtn = document.createElement('button');

// Requirement: Set class as 'stop'
stopBtn.classList.add('stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

document.getElementById('buttons').appendChild(stopBtn);

// 4. Helper function to stop all audio and reset progress
function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound);
        if (song) {
            song.pause();
            song.currentTime = 0; // Rewind to the start
        }
    });
}