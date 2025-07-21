import * as salaryService from "./services/salary-service.js";
import Employee from "./models/employee.js";

const data = document.getElementById("grossSalaryInput").innerHTML.split("\n");

const employee = new Employee(data[0], Number(data[1]));
const netSalary = salaryService.netSalary(employee);
console.log(
  `Funcionário = ${
    employee.name
  }\nSalario bruto = ${employee.grossSalary.toFixed(
    2
  )}\nSalario liquido = ${netSalary.toFixed(2)}`
);
