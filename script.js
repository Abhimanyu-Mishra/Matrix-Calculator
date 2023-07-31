function calculateIncome() {
    const joiningPackageFee = parseInt(document.getElementById("joining-package-fee").value);
    const productPrice = parseInt(document.getElementById("product-price").value);
    const matrixDepth = parseInt(document.getElementById("matrix-depth").value);
    const matrixWidth = parseInt(document.getElementById("matrix-width").value);
    const matrixBonusDepth = parseInt(document.getElementById("matrix-bonus-depth").value);
    const maximumPayout = parseInt(document.getElementById("maximum-payout").value);
    const adminCharges = parseInt(document.getElementById("admin-charges").value);
    const taxTDS = parseInt(document.getElementById("tax-tds").value);

    // Calculate total members
    const totalMembers = Math.pow(matrixWidth, matrixDepth);

    // Calculate income from additional product price
    const incomeFromAdditionalProductPrice = productPrice * totalMembers;

    // Calculate income from joining package purchase
    const incomeFromJoiningPackagePurchase = joiningPackageFee * totalMembers;

    const totalPair = totalMembers/2;
    const actualPair = Math.floor(totalPair)
    // Calculate total matrix bonus
    const totalMatrixBonus = matrixBonusDepth *actualPair ;
    const bonusCapped = (incomeFromJoiningPackagePurchase*60/100);
    
    const afterbonusCapped = incomeFromJoiningPackagePurchase-bonusCapped

    // Calculate total bonus TDS
    const totalBonusTDS = totalMatrixBonus * (taxTDS / 100);
    // Calculate company profit
    const totalAdminCharges = (adminCharges/100) * totalMatrixBonus;
    const companyProfit =incomeFromJoiningPackagePurchase - (incomeFromAdditionalProductPrice + totalMatrixBonus + totalBonusTDS + totalAdminCharges);

    // Display the results
    const mlmResult = document.getElementById("mlm-result");
    mlmResult.innerHTML = ""; // Clear previous results

    const unPair = totalMembers%2
    // Add calculated values to the result element
    const resultHtml = `
      <span class= "data">
        <h2>MLM Matrix Calculator Results:</h2>
        <p>No. of Levels: ${matrixDepth}</p>
        <p>Total Members: ${totalMembers}</p>
        <p>Total Maching Pair : ${Math.floor(totalPair)}</p>
        <p>Income from Additional Product Price: ${incomeFromAdditionalProductPrice}</p>
        <p>Income from Joining Package Purchase: ${incomeFromJoiningPackagePurchase}</p>
        <p>Total Matrix Bonus: ${totalMatrixBonus}</p>
        <p>Total Bonus TDS: ${totalBonusTDS}</p>
        <p>Admin Charges: ${totalAdminCharges}</p>
        <p>Total Capping Amount Max : ${bonusCapped}</p>
        <h2>Company Profit: ${companyProfit}</h2>
        <p> Total Unpair : ${unPair}</p>
      </span>
    `;
    mlmResult.innerHTML = resultHtml;
}
