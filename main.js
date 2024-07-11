function convertCurrency() {
    const usdAmount = document.getElementById('usdAmount').value;
    const conversionRate = 74.85; // Example conversion rate

    if (usdAmount && !isNaN(usdAmount)) {
        const inrAmount = (usdAmount * conversionRate).toFixed(2);
        document.getElementById('result').innerText = `₹${inrAmount}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid amount';
    }
}
