const form = document.querySelector('form')
const expense = document.querySelector('.expense')
const amount = document.querySelector('.amount')
const tbody = document.querySelector('tbody')
let arr = []

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    console.log(expense.value);
    console.log(amount.value);

    if(expense === '' || amount === ''){
        alert('Please fill all fields');
        return;
    }

    arr.push({expense,amount})

    expense.value = ''
    amount.value = ''

    renderEntries()
}) 

// function rendarEntries(){

//     showValue.innerHTML = '';

//     arr.forEach((entry)=>{
//         const row = `
//             <tr>
//                 <td data-label="expense">${entry.expense}</td>
//                 <td data-label="amount">${entry.amount}</td>
//             </tr>
//         `;
//         showValue.innerHTML += row;
//     });
// }

function renderEntries() {

    tbody.innerHTML = '';

   
    arr.forEach((entry, index) => {
        const row = `
            <tr>
                <td data-label="Expense">${entry.expense}</td>
                <td data-label="Amount">${entry.amount}</td>
                <td data-label="Delete"><button onclick="deleteEntry(${index})">Delete</button></td>
                <td data-label="Edit"><button onclick="editEntry(${index})">Edit</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}




// const form = document.querySelector('form');
// const expenseInput = document.querySelector('.expense');
// const amountInput = document.querySelector('.amount');

// const tbody = document.querySelector('tbody');
// let arr = [];

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const expense = expenseInput.value.trim();
//     const amount = amountInput.value.trim();

//     if (expense === '' || amount === '') {
//         alert('Please fill all fields');
//         return;
//     }


//     arr.push({ expense, amount });

//     expenseInput.value = '';
//     amountInput.value = '';

//     renderEntries();
// });




