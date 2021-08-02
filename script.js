
let student_option = document.querySelector(".student-option");
let staff_option = document.querySelector(".staff-option");
let staff_form = document.querySelector(".staff-form");
let student_form = document.querySelector(".student-form");



staff_option.addEventListener("click", myFunction);

function myFunction() {
    staff_option.style.color = "white";
    staff_option.style.backgroundColor = "#3CAE0B"
    student_option.style.backgroundColor = "#fff"
    student_option.style.color = "#000"
    staff_form.style.display = "inherit";
    student_form.style.display = "none";
}



student_option.addEventListener("click", myFunction2);

function myFunction2() {
    student_option.style.color = "white";
    student_option.style.backgroundColor = "#3CAE0B"
    staff_option.style.backgroundColor = "#fff"
    staff_option.style.color = "#000"
    student_form.style.display = "inherit";
    staff_form.style.display = "none";
}

