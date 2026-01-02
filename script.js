// List of sounds based on the project requirements
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const btnContainer = document.getElementById('buttons');

sounds.forEach((sound) => {
    const btn = document.createElement('button');
    
    // Requirement: Each sound button must have the class 'btn'
    btn.classList.add('btn');
    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopSongs(); // Stop other audio before playing
        
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
        
        // Temporary ID to help the stop function find active audio
        audio.id = 'current-audio'; 
        document.body.appendChild(audio);
    });

    btnContainer.appendChild(btn);
});

// Requirement: Stop button must have class 'stop'
const stopBtn = document.createElement('button');
stopBtn.classList.add('btn', 'stop');
stopBtn.innerText = 'stop';

stopBtn.addEventListener('click', () => {
    stopSongs();
});

btnContainer.appendChild(stopBtn);

// Function to stop and reset all audio
function stopSongs() {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.remove(); // Remove from DOM to keep it clean
    });
}