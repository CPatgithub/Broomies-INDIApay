// Get references to HTML elements
const addAmountInput = document.getElementById('addAmount');
const addButton = document.getElementById('addButton');
const walletAmount = document.getElementById('walletAmount');
const recipientIDInput = document.getElementById('recipientID');
const sendAmountInput = document.getElementById('sendAmount');
const sendButton = document.getElementById('sendButton');
const popupBox = document.querySelector('.popup');
const transactionHistoryButton = document.getElementById('transactionHistoryButton');

// Event listener for "Add" button
addButton.addEventListener('click', () => {
    const amount = parseInt(addAmountInput.value);

    if (Number.isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount.');
    } else {
        // Update wallet amount and show popup
        const currentBalance = parseInt(walletAmount.textContent.replace(/\D+/g, ''));
        const newBalance = currentBalance + amount;
        walletAmount.innerHTML = `&#x20B9; ${newBalance}`;
        showPopup('Amount added to your wallet.');
    }

    // Clear input
    addAmountInput.value = '';
});

// Event listener for "Send" button
sendButton.addEventListener('click', () => {
    const recipientID = recipientIDInput.value;
    const sendAmount = parseInt(sendAmountInput.value);
    const currentBalance = parseInt(walletAmount.textContent.replace(/\D+/g, ''));

    // Regex patterns for validation
    const upiPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+$/;

    if (!upiPattern.test(recipientID)) {
        alert('Please enter a correct recipient ID.');
    } else if (Number.isNaN(sendAmount) || sendAmount <= 0 || sendAmount > currentBalance) {
        alert('Please enter a valid amount to send.');
    } else {
        // Update wallet amount and show popup
        const newBalance = currentBalance - sendAmount;
        walletAmount.innerHTML = `&#x20B9; ${newBalance}`;
        showPopup('Payment Successful.');
    }

    // Clear inputs
    recipientIDInput.value = '';
    sendAmountInput.value = '';
});


// Event listener for "Transaction History" button
transactionHistoryButton.addEventListener('click', () => {
    // Implement your transaction history display logic here
    // This could involve showing a list of transactions, dates, amounts, etc.
});

// Function to show popup box
function showPopup(message) {
    popupBox.textContent = message;
    popupBox.style.display = 'block';
    setTimeout(() => {
        popupBox.style.display = 'none';
    }, 3000);
}
