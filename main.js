const ratingButtons = document.querySelectorAll('.rating-item');
const submitButton = document.getElementById('submit');
let a = 0;

// Highlight selected rating and store value
ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        ratingButtons.forEach(btn => btn.style.backgroundColor = '');
        button.style.backgroundColor = 'orange';
        a = button.value;
    });
});

// On submit: toggle screens and update rating text
submitButton.addEventListener('click', () => {
    const main1 = document.getElementsByClassName('main1')[0];
    const main2 = document.getElementsByClassName('main2')[0];
    main1.classList.toggle('display');
    main2.classList.toggle('display');

    const el = document.getElementsByClassName('rate')[0];
    el.innerHTML = a;
});
