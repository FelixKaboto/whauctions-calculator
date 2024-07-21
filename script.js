function calculateTotal() {
    const hammerPrice = parseFloat(document.getElementById('hammerPrice').value);
    const buyersPremiumRate = parseFloat(document.getElementById('buyersPremium').value) / 100;
    const taxRateHammerPrice = parseFloat(document.getElementById('taxRateHammerPrice').value) / 100;
    const taxRateBuyersPremium = parseFloat(document.getElementById('taxRateBuyersPremium').value) / 100;
    const taxRateCharges = parseFloat(document.getElementById('taxRateCharges').value) / 100;

    const buyersPremium = hammerPrice * buyersPremiumRate;
    const taxOnHammerPrice = hammerPrice * taxRateHammerPrice;
    const taxOnBuyersPremium = buyersPremium * taxRateBuyersPremium;
    const charges = hammerPrice * taxRateCharges;

    const totalAmount = hammerPrice + buyersPremium + taxOnHammerPrice + taxOnBuyersPremium + charges;

    document.getElementById('totalAmount').textContent = `Total Amount: ZAR ${totalAmount.toFixed(2)}`;
    document.getElementById('breakdown').innerHTML = `
        Breakdown:<br>
        Hammer Price: ZAR ${hammerPrice.toFixed(2)}<br>
        Buyer's Premium: ZAR ${buyersPremium.toFixed(2)}<br>
        Tax on Hammer Price: ZAR ${taxOnHammerPrice.toFixed(2)}<br>
        Tax on Buyer's Premium: ZAR ${taxOnBuyersPremium.toFixed(2)}<br>
        Charges: ZAR ${charges.toFixed(2)}<br>
    `;
}
