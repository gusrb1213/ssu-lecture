const generateButton = document.getElementById('generate');
const numberElements = document.querySelectorAll('.number');

function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

async function displayNumber(numbers) {
    // Reset balls
    numberElements.forEach(el => {
        el.classList.remove('animate');
        el.style.opacity = '0';
        el.style.transform = 'scale(0.5)';
    });

    // Small delay before starting
    await new Promise(resolve => setTimeout(resolve, 100));

    for (let i = 0; i < numbers.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 150));
        numberElements[i].textContent = numbers[i];
        numberElements[i].classList.add('animate');
    }
}

generateButton.addEventListener('click', async () => {
    generateButton.disabled = true;
    const newNumbers = generateNumbers();
    await displayNumber(newNumbers);
    generateButton.disabled = false;
});
