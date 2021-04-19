hideAll();
document.getElementById("login_div").style.display="block";
var income = 0;
var expense = 0;
drawChart();

function hideAll(){
    var divs = document.getElementsByTagName("div");
    for(var i=1;i<divs.length;i++)
    {
        divs[i].style.display="none";
    }
}

function onLogin() {
    hideAll();
    document.getElementById("profile").style.display="block";
    document.getElementById("options_div").style.display="block";
    document.getElementById("user_name").innerText = document.getElementById("username").value.toUpperCase();
}

function onChange(showDiv){
    hideAll();
    document.getElementById("profile").style.display="block";
    
    document.getElementById("back_button").style.display="block";
    document.getElementById(showDiv).style.display="block";
}

function drawChart(){
    document.getElementById("income_span").innerText = income;
    document.getElementById("expense_span").innerText = expense;
    
    var temp = income + expense;
    var income_percent = 0;
    var expense_percent = 0;

    if (temp > 0){
        income_percent = (100*(income/temp));
        expense_percent = (100*(expense/temp));
    }

    alert(income_percent+"% ("+income+") Income, " + expense_percent+"% ("+expense+") Expense");

    document.getElementById("income_chart").style.width = income_percent+"%";
    document.getElementById("expense_chart").style.width = expense_percent+"%";
}

function incomeAdd(){
    var temp = +document.getElementById("income_amt_text").value;
    document.getElementById("income_amt_text").value = "";
    document.getElementById("income_desc_text").value = "";
    income += temp;
    drawChart();
}

function expenseAdd(){
    var temp = +document.getElementById("expense_amt_text").value;
    document.getElementById("expense_amt_text").value = "";
    document.getElementById("expense_desc_text").value = "";
    expense += temp;
    drawChart();
}
