function calculateProfit() {
  const joiningFees = parseFloat(document.getElementById("joiningFees").value);
  const numberOfLegs = parseInt(document.getElementById("numberOfLegs").value);
  const depthValues = document.getElementById("depthValues").value.trim();

  // Convert depth values to an array and validate input
  const depthArray = depthValues.split(",").map(depth => parseInt(depth.trim()));
  if (depthArray.length !== numberOfLegs || depthArray.some(isNaN)) {
    alert("Please enter valid depth values for each leg.");
    return;
  }
  const  abc = depthValues.split(",")
  console.log(abc);

  const bonus = parseFloat(document.getElementById("bonus").value);
  const tds = parseFloat(document.getElementById("tds").value);
  const adminCharges = parseFloat(document.getElementById("adminCharges").value);

  // Calculate total pair and bonus income
  const totalPairs = Math.floor(numberOfLegs / 2);

  // Calculate bonus income based on depth levels and pair matching in different legs
  let totalBonusIncome = 0;
  for (let i = 0; i < depthArray.length; i++) {
    const depthBonusRate = depthArray[i];

    // Calculate pairs for each leg
    const pairsInThisLeg = Math.floor(depthArray[i] / 2);
    totalBonusIncome += pairsInThisLeg * bonus * depthBonusRate;
  }

  // Calculate total profit
  const totalProfit = totalBonusIncome - (tds + adminCharges) - joiningFees;

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `Total Pairs: ${totalPairs}<br>
                             Total Bonus Income: ${totalBonusIncome}<br>
                             Total Profit: ${totalProfit}`;
}
