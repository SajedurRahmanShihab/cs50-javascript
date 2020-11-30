let counter = 0;
function count() {
    counter++;
    document.querySelector('h1').innerHTML = counter;

    if (counter % 10 === 0) {
        alert(`Count is now ${counter}`)
    }
}

// Run this function after loading all html file
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('button').onclick = count;
});