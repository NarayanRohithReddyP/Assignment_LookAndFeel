document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("start-button");
    var form = document.getElementById("fundraising-form");
    var previewModal = document.getElementById('preview-modal');

    // Initially hide the form and ensure start button is visible
    form.style.display = "none";
    startButton.style.display = "block";

    // Handle the start button click to show form
    startButton.addEventListener("click", function () {
        form.style.display = "block";
        startButton.style.display = "none"; // Hide start button once form is visible
    });

    // Event listener for form submission
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent traditional form submission

        var reader = new FileReader();
        var file = document.getElementById('picture').files[0];

        reader.onload = function (e) {
            document.getElementById('preview-image').src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            document.getElementById('preview-image').src = ''; // No image uploaded
        }

        // Set all other form field values for the preview
        setPreview('first-name');
        setPreview('last-name');
        setPreview('email');
        setPreview('phone');
        setPreview('address1');
        setPreview('address2');
        setPreview('city');
        setPreview('state');
        setPreview('country');
        setPreview('zipcode');
        setPreview('category');
        setPreview('raising-for');
        setPreview('starting-amount');
        document.getElementById('preview-message').textContent = document.getElementById('message').value || 'N/A';

        // Show modal
        previewModal.style.display = 'block';
    });

    // Close the modal
    document.querySelector('.close-button').addEventListener('click', function () {
        previewModal.style.display = 'none';
    });
});

// Helper function to set preview data
function setPreview(id) {
    document.getElementById('preview-' + id).textContent = document.getElementById(id).value;
}

// Functions for Edit, Delete, Submit
function editForm() {
    document.getElementById('preview-modal').style.display = 'none';
    document.getElementById('fundraising-form').style.display = 'block';
}

function deleteForm() {
    document.getElementById('fundraising-form').reset();
    document.getElementById('preview-modal').style.display = 'none';
    document.getElementById('start-button').style.display = 'block'; // Show start button again
}

function submitForm() {
    alert('Form submitted!'); // Placeholder for actual submission logic
}
