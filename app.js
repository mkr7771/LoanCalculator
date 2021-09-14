function Calculator() {

	const amount = document.querySelector("#Amount").value;
    const rate  = document.querySelector("#Rate").value;
    const months = document.querySelector("#Months").value;
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest).toFixed(2);

    document.querySelector("#Total").innerHTML = "Total (Rs.) : "+total;
}
