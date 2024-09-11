// Code your solutions in this file
const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(array, event) {
    let messages = [];
    for (let i = 0; i < array.length; i++){
        const message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
        console.log(messages);
        debugger;
    }
    return messages;
}
writeCards(names, "surprise");

function countDown(num) {
    let countDown = num;
    while (countDown >= 0) {
        console.log(countDown--);
    }
}
countDown(10);