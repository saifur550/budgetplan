
// button click
document.getElementById('btn-calc').addEventListener('click' , function(){
   
    
    let incomeInput = document.getElementById('income')
    let incomeInputAmount = parseFloat(incomeInput.value)

   // function call 
    const foodInputAmount = input('food');
    const rentInputAmount = input('rent')
    const clothesInputAmount = input('clothes')
   
    //total expenses
    const totalExpenses = foodInputAmount + rentInputAmount + clothesInputAmount;
    document.getElementById('total-expenses').innerText = totalExpenses;
    // total balance
    var totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(incomeInputAmount) - parseFloat(totalExpenses) ; 

   
}) ;


// get input value from here
function getInputValue(id){
    const input = document.getElementById(id);
    const inputText = parseFloat(input.value);
    input.value = '';
    return inputText;
}

// function
function input (id){
    const inputValue = getInputValue(id);
    return inputValue;
    
}


// saving amount
document.getElementById('saving-btn').addEventListener('click', function(){
   
    const saveInput = document.getElementById('save-value');
    const saveText = parseFloat(saveInput.value);
    saveInput.value = '';
    
    const incomeInput = document.getElementById('income');
    const inputText = parseFloat(incomeInput.value);
   

    const percentage = parseFloat((inputText/100) * saveText);
    document.getElementById('saving-amount').innerText = percentage;
    incomeInput.value = '';

    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;

    const getRemainBalance = parseFloat(totalBalanceText) - parseFloat(percentage)
    document.getElementById('remaining-balance').innerText = getRemainBalance;

})

