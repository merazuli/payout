const btnLogin = document.getElementById('btn-login')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const mobileNumber = 01618113827;
        const pinNumber = 1234;
        const mobileNumberValue = document.getElementById('phn-number').value;
        const mobileNumberValueConverted = parseInt(mobileNumberValue);
        // pin number 
        const pinNumberValue = document.getElementById('pin-number').value;
        const pinNumberValueConverted = parseInt(pinNumberValue);
        if (mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber) {
            window.location.href = 'main.html';
        } else {
            alert('Invalid')
        }


    })