const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');

// The pattern looks like: "Cualquier etapa" / 8000
// Or: "Cualquiera de las 3 etapas" / 9000
// Or: "Cualquiera" / 8000
// We want to extract the number and replace the whole expression with just the number.
const pattern = /"[^"]*"\s*\/\s*(\d+)/g;

let count = 0;
const newContent = content.replace(pattern, (match, number) => {
    count++;
    return number;
});

console.log(`Replaced ${count} occurrences.`);

if (count > 0) {
    fs.writeFileSync('app.js', newContent, 'utf8');
    console.log('File app.js updated successfully.');
}
