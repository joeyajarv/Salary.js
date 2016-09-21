/**
 *   @author Jarvenpaa, Josiah (josiahjarvenpaa@live.com)
 *   @version 0.0.1
 *   @summary Salary.js code || created: 09.20.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let baseSalary, totalSales, commissionRate, totalSalary;

function main() {
    setBaseSalary();
    setTotalSales();
    setCommissionRate();
    setTotalSalary();
    giveTotalSalary();
}

main();

function setBaseSalary() {
    baseSalary = PROMPT.question(`\nPlease enter last base salary: `);
}

function setTotalSales() {
    totalSales = PROMPT.question(`\nPlease enter total sales: `);
}

function setCommissionRate() {
    commissionRate = PROMPT.question(`\nPlease enter commission rate: `);
}

function setTotalSalary() {
    totalSalary = baseSalary + totalSales * commissionRate;
}

function giveTotalSalary() {
    console.log(`\nTotal salary is: ${totalSalary}`);
}