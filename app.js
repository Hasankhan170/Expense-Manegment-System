const form = document.querySelector('form')
const expense = document.querySelector('.expense')
const amount = document.querySelector('.amount')
const showValue = document.querySelector('tbody')
let arr = []

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const expenseShow = expense.value.trim()
    const amountShow = amount.value.trim()

    console.log(expenseShow);
    console.log(amountShow);

    if(expense === '' || amount === ''){
        alert('Please fill all fields');
        return;
    }

    arr.push({expenseShow,amountShow})

    expense.value = ''
    amount.value = ''

    rendarEntries()
}) 

function rendarEntries(){

    showValue.innerHTML = '';

    arr.forEach((entry)=> {
        const row = `
            <tr>
                <td data-label="Expense">${entry.expenseShow}</td>
                <td data-label="Amount">${entry.amountShow}</td>
            </tr>
        `;
        showValue.innerHTML += row;
    });
}


