const today = new Date();

const dateInput = document.getElementById('dateInput');
const validYear = today.getFullYear() - 21;
const validMonth = today.getMonth();
const validDay = today.getDate();

const checkbox = document.getElementById('checkbox');

const message = document.getElementById('message');
let messageText = "";
// messageText = "Checkbox is checked"
// messageText = `
//     ${messageText};
// `
// console.log("outside the function", checkbox.checked)
// console.log(today, dateInput, validYear, validMonth, validDay);
// console.log('the year is', validYear, 'the month is', validMonth, 'the day is', validDay);

const validate =()=> {
    message.innerHTML = `
    ${messageText}
    `
    // console.log("checkbox is checked", checkbox.checked);
    // console.log(messageText);
    const isChecked = checkbox.checked;
    if (!isChecked) {
        messageText = "Please check the box to verify your age"
        message.innerHTML = `
            ${messageText}
        `
    } else {
        messageText = "";
        getDOB();
    }
    return messageText;
}

const getDOB =()=> {
    const userDate = new Date (dateInput.value);
    const userYear = userDate.getFullYear();
    const userMonth = userDate.getMonth();
    const userDay = userDate.getDate();
    // console.log(userDate, userYear, userMonth, userDay);
    verifyAge(userYear, userMonth, userDay);
}

const verifyAge = (year, month, day) => {
    const userYear = year;
    const userMonth = month;
    const userDay = day;
    if (validYear >= userYear) {
        if (validMonth >= userMonth) {
            if (validDay >= userDay) {
                messageText = "Access Granted";
                message.innerHTML = `
                ${messageText};
            `
            }   else {
                messageText = "Access Denied";
                message.innerHTML = `
                ${messageText};
            `
            }
        } else {
            messageText = "Access Denied";
            message.innerHTML = `
            ${messageText};
        `
        }
    } else {
        messageText = "Access Denied";
        message.innerHTML = `
        ${messageText};
    `
    }
};

console.log(messageText);