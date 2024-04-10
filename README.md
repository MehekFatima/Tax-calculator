# Tax Calculator

This is a simple tax calculator web application that calculates the tax to be paid based on gross annual income, extra income, applicable deductions, and age group.

## Features

- Input fields for gross annual income, extra income, age group, and total applicable deductions.
- Tooltip icons with helpful information for each input field.
- Validation to ensure that all fields are filled with valid numeric values.
- Calculation of total income after deductions and tax based on the provided inputs.
- Display of the calculated total income and tax in a modal with comma-separated numbers for better readability.
- Modal window to display the final calculated values in a visually appealing format.
- Responsive.

## How Tax is Calculated

The tax calculation is based on the following criteria:
- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
    - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
  - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax

- If the total income after deductions is greater than ₹800,000:
  - For individuals under 40 years: 30% of the income over ₹800,000 is taxed.
  - For individuals aged 40 to 60 years: 40% of the income over ₹800,000 is taxed.
  - For individuals aged 60 or above: 10% of the income over ₹800,000 is taxed.
 

## Deployment

The application is deployed and accessible at [Tax Calculator](https://tax-calculator1.netlify.app/).

## Screenshots

![Screenshot 1](https://github.com/MehekFatima/Tax-calculator/blob/main/fiveTh.png?raw=true)
![Screenshot 2](https://github.com/MehekFatima/Tax-calculator/blob/main/fiveThTax.png?raw=true)
![Screenshot 3](https://github.com/MehekFatima/Tax-calculator/blob/main/TaxIncome.png?raw=true)
![Screenshot 4](https://github.com/MehekFatima/Tax-calculator/blob/main/tooltip.png?raw=true)
![Screenshot 5](https://github.com/MehekFatima/Tax-calculator/blob/main/wrongInput.png?raw=true)

## Tech Stack
- HTML
- CSS
- JavaScript
