const form = document.querySelector('form')



form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const expense = document.querySelector('.expense').value
    const amount = document.querySelector('.amount').value

    console.log(expense);
    console.log(amount);

}) 