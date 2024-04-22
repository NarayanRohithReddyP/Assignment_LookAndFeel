document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("start-button");
    var form = document.getElementById("fundraising-form");
    var previewModal = document.getElementById('preview-modal');

    
    form.style.display = "none";
    startButton.style.display = "block";

    
    startButton.addEventListener("click", function () {
        form.style.display = "block";
        startButton.style.display = "none"; 
    });

    
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        var reader = new FileReader();
        var file = document.getElementById('picture').files[0];

        reader.onload = function (e) {
            document.getElementById('preview-image').src = e.target.result;
        };

        if (file) {
            reader.readAsDataURL(file);
        } else {
            document.getElementById('preview-image').src = ''; 
        }

        
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

        
        previewModal.style.display = 'block';
    });

    
    document.querySelector('.close-button').addEventListener('click', function () {
        previewModal.style.display = 'none';
    });
});


function setPreview(id) {
    document.getElementById('preview-' + id).textContent = document.getElementById(id).value;
}

function editForm() {
    document.getElementById('preview-modal').style.display = 'none';
    document.getElementById('fundraising-form').style.display = 'block';
}

function deleteForm() {
    document.getElementById('fundraising-form').reset();
    document.getElementById('preview-modal').style.display = 'none';
    document.getElementById('start-button').style.display = 'block'; 
}

function submitForm() {
    alert('Form submitted!'); 
}
