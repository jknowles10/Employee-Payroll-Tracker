// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

//Object Constructor function

function Employee () {
  this.firstName = prompt("Enter First Name:");
  this.lastName = prompt("Enter Last Name:");
  //parseInt converts sting into integer
  this.salary = parseInt(prompt ("Enter numerical salary:"), 10);

//if non-number is entered into salary field, will return 0
  if(isNaN(this.salary)) {
    this.salary = 0;
  }
  
  console.log(this.firstName);
  console.log(this.lastName);
  console.log(this.salary);

}
// Need to create a function to capture user input data to create new array
const employeesArray = [];

// Collect employee data
const collectEmployees = function() {
  
  // function creates new employee, adds it to array until user selects cancel
  function newEmployee() {
    let addMore = true; 
    while (addMore) {
    const employee = new Employee();
    employeesArray.push(employee);

    addMore = confirm("Do you want to add another employee?");
    }
   //function is invoked to return array once user data is inputted
  }
  newEmployee();
  return employeesArray;
}

// Display the average salary
const displayAverageSalary = function(employeesArray) 
  // TODO: Calculate and display the average salary

 { let totalSalary= 0;
 for (let i = 0; i< employeesArray.length; i++) {
  totalSalary += employeesArray.salary[i];}
  averageSalary = totalSalary/employeesArray.length;
 }
 //totalSalary = totalSalary + employeesArray[i].salary};

console.log(`The average salary of all employees is ${averageSalary}`);

  


  const averageSalary = function(employeesArray)
{ 

 console.log(displayAverageSalary);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
