export function checkPassword(password, confirmPassword) {

    const minPasswordLength = 6;

    let confirmation = {
        match: false,
        length: false,
        number: false,
        capital: false,
        lower: false,
        specialChar: false,
        success: false
    }

    confirmation.match = password === confirmPassword;
    confirmation.length = password.length >= minPasswordLength;
    confirmation.number = /[0-9]/.test(password);
    confirmation.capital = /[A-Z]/.test(password);
    confirmation.lower = /[a-z]/.test(password);
    confirmation.specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    confirmation.success = Object.keys(confirmation)
        .filter((key) => key !== 'success')
        .every((key) => confirmation[key]);

    return confirmation;
}