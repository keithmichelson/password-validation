export function checkPassword(passwordString, passwordConfirmString) {

    const stringCheckLength = 6;

    let confirmation = {
        match: false,
        length: false,
        number: false,
        capital: false,
        lower: false,
        specialChar: false,
        success: false
    }

    if (passwordString === passwordConfirmString) {
        confirmation.match = true;
    }
    if (passwordString.length >= stringCheckLength) {
        confirmation.length = true;
    }
    if (/[0-9]/.test(passwordString)) {
        confirmation.number = true;
    }
    if (/[A-Z]/.test(passwordString)) {
        confirmation.capital = true;
    }
    if (/[a-z]/.test(passwordString)) {
        confirmation.lower = true;
    }
    if (/[!@#$%^&*(),.?":{}|<>]/.test(passwordString)) {
        confirmation.specialChar = true;
    }

    confirmation.success = Object.keys(confirmation)
        .filter((key) => key !== 'success')
        .every((key) => confirmation[key]);

    return confirmation;
}