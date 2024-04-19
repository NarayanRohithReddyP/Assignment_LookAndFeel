/**
 * Your JS code here
 */

document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("start-button");
    var form = document.getElementById("fundraising-form");

    startButton.addEventListener("click", function () {
        form.style.display = "block";
        startButton.style.display = "none";
    });
});


/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function () {
    var ulElement = document.getElementById('links');
    var liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode('created by main.js'));

    ulElement.appendChild(liElement);
});