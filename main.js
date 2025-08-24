
// add money feature 

const validPin = 1234;
const transactionData = [];

// function to get input value 
function getInputValueNumber(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldValueNumber = parseInt(inputFieldValue);
    return inputFieldValueNumber;
}

function getInputValue(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    return inputFieldValue;
}

// function to get inner text 
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText;
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
// function to set inner text 
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('balance-available');
    availableBalanceElement.innerText = value;
}
// function toggle 
function toggleHandle(id) {
    const forms = document.getElementsByClassName('form');
    for (const form of forms) {
        form.style.display = "none";
    }
    document.getElementById(id).style.display = "block";
}
// function to toggle btn click for bg change 

function toggleButtonHandle(id) {
    const formBtns = document.getElementsByClassName("form-btn");
    for (const btn of formBtns) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
        btn.classList.add('border-gray-300')
    }
    document.getElementById(id).classList.remove("border-gray-300");
    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money 
const addMoneyBtn = document.getElementById('btn-admoney')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const bankInfo = getInputValue('bank');
        const accountNumber = getInputValue('account-number');
        const addAmount = getInputValueNumber('add-amount');
        if (addAmount <= 0) {
            alert('Invalid Amount');
            return;
        }
        const pin = getInputValueNumber('add-pin-number');

        const availableBalance = getInnerText('balance-available');
        if (accountNumber.length < 11) {
            alert('Please Give  11 Digit Account Number');
            return;
        }
        if (pin !== validPin) {
            alert('please provide valid pin number ');
        }

        const totalBalance = addAmount + availableBalance;
        setInnerText(totalBalance);

        const data = {
            name: "Add Money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);


    })



// cash out feature 
const cashOutBtn = document.getElementById('btn-out-money')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const agentNumber = getInputValue('agent-number');
        const outAmount = getInputValueNumber('out-amount');
        const outPin = getInputValueNumber('out-pin-number');

        const availableBalance = getInnerText('balance-available');
        if (outAmount >= availableBalance || outAmount <= 0) {
            alert('Invalid Amount');
            return;
        }

        if (agentNumber.length < 11) {
            alert('Please Provide 11 Digit Mobile Number');
            return;
        }
        if (validPin !== outPin) {
            alert('Invalid Pin Number')
        }

        const outAfterAvailableMoney = availableBalance - outAmount;
        setInnerText(outAfterAvailableMoney);
        const data = {
            name: "Cash Out",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);

    })

// transfer button 
const transferBtn = document.getElementById('btn-transfer-money').
    addEventListener('click', function (e) {
        e.preventDefault();
        const userAccNumber = getInputValue('user-account-number');
        const transferAmount = getInputValueNumber('transfer-amount');
        const transferPin = getInputValueNumber('transfer-pin-number');

        const availableBalance = getInnerText('balance-available');
        if (userAccNumber.length < 11) {
            alert('Please Provide 11 Digit Mobile Number');
            return;
        }
        if (validPin !== transferPin) {
            alert('Invalid Pin Number')
        }
        const transferAfterAvailableMoney = availableBalance - transferAmount;
        setInnerText(transferAfterAvailableMoney);

        const data = {
            name: "Transfer money",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);

    })
// get bonus 
const couponCode = 34567;
const couponBtn = document.getElementById('btn-bonus-coupon').
    addEventListener('click', function (e) {
        e.preventDefault();
        const couponBtn = getInputValue('user-coupon-number');
        if (couponBtn == couponCode) {
            const availableBalance = getInnerText('balance-available');
            const discountUnit = availableBalance * (2 / 100);
            const afterPrice = availableBalance - discountUnit;

            setInnerText(afterPrice);
        }
        else (alert('No Discount'));
        const data = {
            name: "Get Bonus",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);
    })

// pay out 
const payBtn = document.getElementById('btn-pay')
    .addEventListener('click', function (e) {
        e.preventDefault();
        const payInfo = getInputValue('pay-bank');
        const billerAccountNumber = getInputValue('biller-account-number');
        const payAmount = getInputValueNumber('pay-amount');
        const payPin = getInputValueNumber('pay-pin-number');
        const availableBalance = getInnerText('balance-available');
        if (billerAccountNumber.length < 11) {
            alert('Please Provide 11 Digit Mobile Number');
            return;
        }
        if (validPin !== payPin) {
            alert('Invalid Pin Number')
        }
        const afterPayBalance = availableBalance - payAmount;
        setInnerText(afterPayBalance);
        const data = {
            name: "Pay Out",
            date: new Date().toLocaleTimeString()
        }

        transactionData.push(data);

    })

// transaction 
const transactionBtn = document.getElementById('transaction-button')
    .addEventListener('click', function () {
        const transactionContainer = document.getElementById('transaction-container');
        transactionContainer.innerText = '';
        for (const data of transactionData) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="bg-white rounded-xl flex justify-between items-center p-2 mb-2">
                    <div class="">
                        <div class=" flex items-center">
                            <div class=" p-3 rounded-full bg-[#f4f5f7]">
                                <img src="./assets/wallet1.png" class="mx-auto" alt="">
                            </div>
                            <div class="ml-3">
                                <h1>${data.name}</h1>
                                <p>${data.date}</p>
                            </div>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>

                </div>
            `
            transactionContainer.appendChild(div);
        }
    })
// toggling feature 

document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        toggleHandle('add-money-parent');
        toggleButtonHandle('add-money-btn');

    })
document.getElementById('cash-out-btn')
    .addEventListener('click', function () {
        toggleHandle('cash-out-parent');
        toggleButtonHandle('cash-out-btn');
    })
document.getElementById('transfer-btn').
    addEventListener('click', function () {
        toggleHandle('transfer-money-parent');
        toggleButtonHandle('transfer-btn');
    })
document.getElementById('bonus-btn').
    addEventListener('click', function () {
        toggleHandle('get-bonus-money-parent');
        toggleButtonHandle('bonus-btn')
    })
document.getElementById('pay-bill-btn').
    addEventListener('click', function () {
        toggleHandle('pay-now-parent');
        toggleButtonHandle('pay-bill-btn')
    })
document.getElementById('transaction-button').
    addEventListener('click', function () {
        toggleHandle('transaction-parent');
        toggleButtonHandle('transaction-button')
    })

