// Contact form functionality
let contactForm = document.getElementById('section-contact-form');
let allFields = contactForm.querySelectorAll('input, textarea');

// Error handling
allFields.forEach(input => {
    input.addEventListener('keyup', validateField);
});

function validateField(event, input = false) {
    let field = event ? event.target : input;
    let fieldName = field.name;
    let fieldValue = field.value;
    let fieldTest;

    switch (fieldName) {
        case 'name':
            fieldTest = /[A-Za-z]{1,}/;
            break;

        case 'email':
            fieldTest = /^[A-Za-z0-9]{2,}[\.\_]*[A-Za-z0-9]*@[A-Za-z]{2,}.[A-Za-z]{2,}$/;
            break;

        case 'message':
            fieldTest = /\w{1,}/;
            break;

        default:
            fieldTest = /\w{1,}/;
            break;
    }

    let fieldCheck = fieldTest.test(fieldValue);

    displayError(field, fieldCheck);
}

function validateAllFields() {
    allFields.forEach(input => {
        let e = false;
        validateField(e, input);
    });

    let checkForErrors = contactForm.querySelectorAll('.error, .section-contact-form-error.visible');

    if (checkForErrors.length > 0) {
        return true;
    }

    return false;
}

function displayError(field, status) {
    let errorField = field.nextElementSibling;

    if (status) {
        errorField.classList.remove('visible');
        field.classList.remove('error');
        return;
    }

    errorField.classList.add('visible');
    field.classList.add('error');
}

// Form submit
contactForm.addEventListener('submit', submitHandler);

function submitHandler(e) {
    e.preventDefault();
    let hasErrors = validateAllFields();

    if (!hasErrors) {
        let data = {};

        allFields.forEach(input => {
            data[input.name] = input.value;
        });

        fetch('./sendMail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // Display mail sent message
                if (data) {
                    document.getElementById('form-submit-success').classList.add('visible');
                    return;
                }

                document.getElementById('form-submit-error').classList.add('visible');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}
