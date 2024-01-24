document.addEventListener('DOMContentLoaded', function() {
    const spinButton = document.getElementById('spinButton');
    const wheel = document.getElementById('wheel');
    const result = document.getElementById('result');
    let isSpinning = false;

    // Initialize wheel sections
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFFF33', '#FF33FF', '#33FFFF', '#FF5733', '#57FF33'];
for (let i = 0; i < 8; i++) {
    const section = document.createElement('div');
    section.classList.add('wheel-section');
    // Set the index and color
    section.style.setProperty('--i', i);
    section.style.setProperty('--color', colors[i]);

    const textDiv = document.createElement('div');
    textDiv.classList.add('wheel-text');
    textDiv.textContent = '';
    textDiv.style.transform = `rotate(${45 * i}deg)`;

    section.appendChild(textDiv);


    wheel.appendChild(section);
}


    // Update wheel with input values
    function updateWheel() {
        for (let i = 1; i <= 8; i++) {
            const inputVal = document.getElementById(`input${i}`).value;
            wheel.children[i - 1].querySelector('.wheel-text').textContent = inputVal;
        }
    }

    spinButton.addEventListener('click', function() {
        updateWheel();
        if (isSpinning) return;
        isSpinning = true;
        const spinDegree = Math.floor(Math.random() * 360 + 720);
        wheel.style.transform = `rotate(${spinDegree}deg)`;
        setTimeout(function() {
            isSpinning = false;
            const selectedEntryIndex = Math.floor((spinDegree % 360) / (360 / 8));
            const selectedEntry = wheel.children[selectedEntryIndex].querySelector('.wheel-text').textContent;
            result.textContent = `Result: ${selectedEntry}`;
        }, 4000);
    });
});
