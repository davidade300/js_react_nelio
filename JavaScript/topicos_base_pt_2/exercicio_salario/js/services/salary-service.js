import * as taxService from "./taxService.js";
import * as pensionService from "./pensionService.js";

export function netSalary(employee) {
  const tax = taxService.tax(employee.grossSalary);
  const pension = pensionService.discount(employee.grossSalary);

  return employee.grossSalary - tax - pension;
}
