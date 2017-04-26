$('#add-employee').on('click', function(){

var employee = $("#employee-input").val().trim();
var role = $("#role-input").val().trim();
var start = $("#start-input").val().trim();
var rate = $("#rate-input").val().trim();
var monthsWorked;
var totalBilled = parseInt(monthsWorked) * parseInt(rate);

var newRow = $('<tr>');

var newEmployee = $('<td>');
newEmployee.append(employee);
console.log('newEmployee');
newRow.append(newEmployee);
var newRole = $('<td>');
newRole.append(role);
newRow.append(newRole);
var newStart = $('<td>');
newStart.append(start);
newRow.append(newStart);
var newRole = $('<td>');
newRate.append(rate);
newRow.append(newRate);

$(".employee-display").append(newEmployee);
$(".role-display").append(role);
$(".startdisplay").append(start);
$(".rate-display").append(rate);

});
