const fs = require('fs');
const genders = ['M', 'F'];
const maleNames = ['Jacek', 'Adam', 'Zbigniew', 'Stanisław'];
const femaleNames = ['Anna', 'Franciszka', 'Beata', 'Dominika'];
const lastNames = ['Kowalska', 'Nowak', 'Truskawska', 'Toruńska'];
const people = [];
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
for (let i = 0; i < 20; i++) {
    const gender = randomChoice(genders);
    const firstName = gender === 'M' ? randomChoice(maleNames) : randomChoice(femaleNames);
    const lastName = randomChoice(lastNames);
    const age = Math.floor(Math.random() * 61) + 18; // age between 18 and 78
    const person = { gender, firstName, lastName, age };
    people.push(person);
}
fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) throw err;
    console.log('People saved to file');
});