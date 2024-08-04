#!/usr/bin/env node
import inquirer from "inquirer";
class Student {
    static counter = 1;
    id;
    name;
    courses;
    balance;
    constructor(n) {
        this.id = Student.counter++;
        this.name = n;
        this.courses = [];
        this.balance = 1000;
    }
    enroll(course) {
        this.courses.push(course);
    }
    view_balance() {
        console.log(`Balance for ${this.name} : ${this.balance}`);
    }
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount} Fees paid successfully for ${this.name}`);
        console.log(`${this.name} remaining balance is: ${this.balance}`);
    }
    show_status() {
        console.log(`ID:${this.id}`);
        console.log(`Name:${this.name}`);
        console.log(`Course:${this.courses}`);
        console.log(`Balance:${this.balance}`);
    }
}
class StudentManager {
    students;
    constructor() {
        this.students = [];
    }
    addStudents(name) {
        let student = new Student(name);
        this.students.push(student);
        console.log(`Student ${name} added successfully. Student id:${student.id}`);
    }
    enrollStudents(id, course) {
        let student = this.findStudents(id);
        if (student) {
            student.enroll(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    viewBalance(studentID) {
        let student = this.findStudents(studentID);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found!");
        }
    }
    payFees(id, amount) {
        let student = this.findStudents(id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("Student not found!!!");
        }
    }
    showStatus(id) {
        let student = this.findStudents(id);
        if (student) {
            student.show_status();
        }
    }
    findStudents(s) {
        return this.students.find(stu => stu.id === s);
    }
}
async function main() {
    console.log("Welcome To Student Management System:");
    console.log("-".repeat(80));
    let StudentManage = new StudentManager();
    while (true) {
        let choice = await inquirer.prompt([
            {
                name: "choices",
                type: "list",
                message: "Select an option",
                choices: [
                    "Add Student",
                    "Enroll Student",
                    "View Student Balance",
                    "Pay Fees",
                    "Show Status",
                    "Exit"
                ]
            }
        ]);
        if (choice.choices === "Add Student") {
            let name = await inquirer.prompt([
                {
                    name: "name",
                    type: "input",
                    message: "Enter Student Name:"
                }
            ]);
            StudentManage.addStudents(name.name);
        }
        ;
        if (choice.choices === "Enroll Student") {
            let course = await inquirer.prompt([
                {
                    name: "id",
                    type: "number",
                    message: "Enter Student ID:"
                },
                {
                    name: "course",
                    type: "input",
                    message: "Enter a Course:"
                }
            ]);
            StudentManage.enrollStudents(course.id, course.course);
        }
        if (choice.choices === "View Student Balance") {
            let bal = await inquirer.prompt({
                name: "id",
                type: "number",
                message: "Enter Student ID:"
            });
            StudentManage.viewBalance(bal.id);
        }
        if (choice.choices === "Pay Fees") {
            let payFee = await inquirer.prompt([
                {
                    name: "id",
                    type: "number",
                    message: "Enter Student ID:"
                },
                {
                    name: "amount",
                    type: "number",
                    message: "Enter amount to pay:"
                }
            ]);
            StudentManage.payFees(payFee.id, payFee.amount);
        }
        if (choice.choices === "Show Status") {
            let status = await inquirer.prompt({
                name: "show",
                type: "number",
                message: "Enter Student ID:"
            });
            StudentManage.showStatus(status.show);
        }
        if (choice.choices === "Exit") {
            console.log("Exiting...");
            break;
        }
    }
}
;
main();
