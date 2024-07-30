var{addition, subtraction, multiplication, division}= require(`./calculations`);
//variables(given)
var grossincome= 7200;
var tax= 720;
var SSS= 1200;
var pagibigFund= 300;
var philhealth= 400;

//rates
var rateHours= 300;
var workDays= 4;
var workWeek= 6;

//calculations
var totalDeduction= tax + SSS + pagibigFund + philhealth;
var total= grossincome - totalDeduction;

//print
console.log('The gross income is ', grossincome);
console.log('Tax: ', tax);
console.log('SSS: ', SSS);
console.log('Pag-ibig fund: ', pagibigFund);
console.log('PhilHealth: ', philhealth);
console.log('Total Deductions: ', total);
console.log('The net salary is: ', totalDeduction);