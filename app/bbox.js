import fs from 'fs';

const svg = fs.readFileSync('public/favicon.svg', 'utf8');
const paths = svg.match(/d="([^"]+)"/g).map(m => m.slice(3, -1));

let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
let currentX = 0, currentY = 0;

// Very rough approximation by just extracting all numbers
const numbers = paths.join(' ').match(/-?\d+(\.\d+)?/g).map(Number);

for (let i = 0; i < numbers.length; i += 2) {
  const x = numbers[i];
  const y = numbers[i+1];
  if (x > 100 && x < 400 && y > 100 && y < 500) {
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    minY = Math.min(minY, y);
    maxY = Math.max(maxY, y);
  }
}

console.log(`minX: ${minX}, minY: ${minY}, maxX: ${maxX}, maxY: ${maxY}`);
console.log(`width: ${maxX - minX}, height: ${maxY - minY}`);
