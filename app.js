const form = document.querySelector('form');
const expense = document.querySelector('.expense');
const amount = document.querySelector('.amount');
const totalAmount = document.querySelector(".span")
const showValue = document.querySelector('tbody');
let arr = [];

form.addEventListener('submit' , (e)=>{
    e.preventDefault();

    const expenseShow = expense.value.trim();
    const amountShow = amount.value.trim();

    console.log(expenseShow);
    console.log(amountShow);


    arr.push({expenseShow,amountShow});



    expense.value = '';
    amount.value = '';

    rendarEntries();
  
});

function rendarEntries(){

    showValue.innerHTML = '';
    let total = 0

    arr.forEach((entry,index)=> {
        const row = `
            <tr>
                <td data-label="Expense">${entry.expenseShow}</td>
                <td data-label="Amount">${entry.amountShow}</td>
                <td><button class = "delete-btn" onclick="deleteEntry(${index})"><i class="fa-solid fa-trash"></i></button></td>
                <td><button class = "edit-btn" onclick="editEntry(${index})"><i class="fa-solid fa-pen-to-square"></i></button></td>
            </tr>
        `;
        showValue.innerHTML += row;
        total += parseFloat(entry.amountShow)
    });
    totalAmount.innerHTML = `Total Amount: ${total}`;
    console.log(total);
 
};

function deleteEntry(index){
    arr.splice(index,1)
    rendarEntries()
}

function editEntry(index){

    const newExpense = prompt('Update Expense');
    const newAmount = prompt('Update Amount');

    if(newExpense === null || newAmount === null){
        alert('please enter value')
        return;
    }
    if(newExpense === '' || newAmount === ''){
        alert('fill this value')
        return
    }
       

    arr[index].expenseShow = newExpense;
    arr[index].amountShow = newAmount;

    rendarEntries();

}
