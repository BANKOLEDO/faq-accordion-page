// Select all the questions and their associated show/hide icons
const showContentButtons = document.querySelectorAll('.show-content');
const hideContentButtons = document.querySelectorAll('.hide-content');
const answers = document.querySelectorAll('.answer');

// Loop through each show-content button
showContentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
    // Display the corresponding answer
    answers[index].style.display = 'block';
    // Hide the show-content button and display the hide-content button
    button.style.display = 'none';
    hideContentButtons[index].style.display = 'block';
    });
});

// Loop through each hide-content button
hideContentButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
    // Hide the corresponding answer
    answers[index].style.display = 'none';
    // Hide the hide-content button and display the show-content button
    button.style.display = 'none';
    showContentButtons[index].style.display = 'block';
    });
});