document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('.button');
    const modal = document.getElementById('modal');
    const modalResult = document.getElementById('modal-result');

    // Function to show alert icon
    function showIcon(input) {
        const icon = input.nextElementSibling;
        icon.style.display = 'inline-block';
    }

    // Function to hide alert icon
    function hideIcon(input) {
        const icon = input.nextElementSibling;
        icon.style.display = 'none';
    }

    // Event listener for submit button
    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission

        const incomeInput = document.querySelector('input[placeholder="Enter gross annual income"]');
        const extraIncomeInput = document.querySelector('input[placeholder="Enter extra income from other sources"]');
        const deductionsInput = document.querySelector('input[placeholder="Enter total applicable deductions"]');
        const ageGroupSelect = document.getElementById('ageGroup');

        // Check if any input is empty or not a number
        if (!incomeInput.value || !/^\d*\.?\d*$/.test(incomeInput.value) ||
            !extraIncomeInput.value || !/^\d*\.?\d*$/.test(extraIncomeInput.value) ||
            !deductionsInput.value || !/^\d*\.?\d*$/.test(deductionsInput.value) ||
            ageGroupSelect.value === "") {
            alert("Please fill out all the fields with valid numeric values.");
            return;
        }

        // Parse input values
        const income = parseFloat(incomeInput.value);
        const extraIncome = parseFloat(extraIncomeInput.value);
        const deductions = parseFloat(deductionsInput.value);
        const ageGroup = ageGroupSelect.value;

        // Calculate total income after deductions
        const totalIncome = income + extraIncome - deductions;

        // Calculate tax
        let tax = 0;
        if (totalIncome > 800000) {
            const incomeOver8Lakhs = totalIncome - 800000;
            if (ageGroup === "<40") {
                tax = 0.3 * incomeOver8Lakhs;
            } else if (ageGroup === "≥ 40 & < 60") {
                tax = 0.4 * incomeOver8Lakhs;
            } else if (ageGroup === "≥ 60") {
                tax = 0.1 * incomeOver8Lakhs;
            }
        }
        // Display the result in the modal with commas
        modalResult.innerHTML = `Total Income: ${totalIncome.toLocaleString()}<br>Tax to be Paid: ${tax.toLocaleString()}`;
        modal.style.display = 'block'; // Show the modal

    });

    // Close the modal when the user clicks on the close button
    document.querySelector('.close').addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Event listener for input fields to show/hide alert icons
    const incomeInput = document.querySelector('input[placeholder="Enter gross annual income"]');
    const extraIncomeInput = document.querySelector('input[placeholder="Enter extra income from other sources"]');
    const deductionsInput = document.querySelector('input[placeholder="Enter total applicable deductions"]');
    
    incomeInput.addEventListener('input', function() {
        if (!/^\d*\.?\d*$/.test(this.value)) {
            showIcon(this);
        } else {
            hideIcon(this);
        }
    });

    extraIncomeInput.addEventListener('input', function() {
        if (!/^\d*\.?\d*$/.test(this.value)) {
            showIcon(this);
        } else {
            hideIcon(this);
        }
    });

    deductionsInput.addEventListener('input', function() {
        if (!/^\d*\.?\d*$/.test(this.value)) {
            showIcon(this);
        } else {
            hideIcon(this);
        }
    });
});
