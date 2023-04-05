function findMax() {
    const numbersString = document.getElementById("input-numbers").value;
    const numbersArray = numbersString.split(",");
    let max = Number(numbersArray[0]);
    
    for (let i = 1; i < numbersArray.length; i++) {
      const currentNumber = Number(numbersArray[i]);
      if (currentNumber > max) {
        max = currentNumber;
      }
    }
    
    document.getElementById("result").textContent = `O maior número é ${max}`;
  }
  