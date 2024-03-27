function findBook() {
    const receiptNumber = document.getElementById("receiptNumber").value;
  
    if (isNaN(receiptNumber)) {
      alert("Please enter a valid number.");
      return;
    }
  
    const number = parseInt(receiptNumber);
  
    if (number < 10000 || number > 30000) {
      alert("Receipt number is out of range (10000-30000).");
      return;
    }
  
    const bookNumber = Math.floor((number - 10000) / 50) + 1;
    const result = `Receipt number ${number} belongs to Book ${bookNumber}`;
    document.getElementById("result").textContent = result;
  }
  