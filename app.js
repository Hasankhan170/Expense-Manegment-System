const form = document.querySelector('form')
const p = document.querySelector('p')
const expense = document.querySelector('.expense')
const amount = document.querySelector('.amount')

const expenseShow = document.querySelector('.expense-td')
const amountShow = document.querySelector('.amount-td')



let arr = []

form.addEventListener('submit' , (e)=>{
    e.preventDefault();


    console.log(expense.value);
    console.log(amount.value);

    expenseShow.innerHTML = `${expense.value}`
    amountShow.innerHTML = `${amount.value}`


    if(expense === '' || amount === ''){
        alert('Please fill all fields');
        return;
    }

    arr.push({expense,amount})
    expense.value = ''
    amount.value = ''
    form.reset

}) 