const arr = [1,2,3,4,5,6,7,8,9,10];
arr.reverse();
const used = process.memoryUsage().heapUsed / 1024 / 1024;
console.log(`The script uses approximately ${used} mb`);
