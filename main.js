
const email = document.getElementById('email');
const form = document.getElementById('form-element');
const postalCode = document.getElementById('postal-code');
const country = document.getElementById('country');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

email.addEventListener('input',  () => {
    console.log(email.validity);
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please, provide correct e-mail address');
  } else {
    email.setCustomValidity('');
  }
});


const postalCodeRef = {
    NG: {
        country: "Nigeria",
        digits: 6,
        regex: /^[0-9]{6}$/,
    },
    KE: {
        country: "Kenya",
        digits: 5,
        regex: /^[0-9]{5}$/,
    },
    ZA: {
        country: "South Africa",
        digits: 4,
        regex: /^[0-9]{4}$/,
    },
};

//Postal code validation
postalCode.addEventListener('input',  () => {
    const targetPostalCodeRegex = postalCodeRef[country.value].regex;

    if (!targetPostalCodeRegex.test(postalCode.value)) {
    postalCode.setCustomValidity(`${
        postalCodeRef[country.value].country
    }'s postal code should be ${
        postalCodeRef[country.value].digits
    } digits long`);
    } else {
    postalCode.setCustomValidity('');
    }
});

password.addEventListener('input',  () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>])[^\s]{8,}$/;
    if (!passwordRegex.test(password.value)) {
    password.setCustomValidity(
        '- At least 8 characters long\n- At least 1 lowercase letter\n- At least 1 uppercase letter\n- At least 1 digit\n- At least 1 special character\n- No whitespace'
    );
    } else {
    password.setCustomValidity('');
    }
});

function validatePassword() {
    if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
    } else {
    confirmPassword.setCustomValidity('');
    }
}

confirmPassword.addEventListener('input',  validatePassword);

form.addEventListener('submit', function (event) {
    if (!email.checkValidity()) {
        event.preventDefault();
        email.reportValidity();
    }
    if (!postalCode.checkValidity()) {
        event.preventDefault();
        postalCode.reportValidity();
    }
    if (!password.checkValidity()) {
        event.preventDefault();
        password.reportValidity();
    }
    if (!confirmPassword.checkValidity()) {
        event.preventDefault();
        confirmPassword.reportValidity();
    }
});