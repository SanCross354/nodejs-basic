// TODO : Pasang package lodash pada proyek nodejs-basic
// Running command : npm install lodash

// TODO :Gunakan package lodash pada TODO sehingga index.js dapat dieksekusi dengan baik.
const _ = require('lodash');
 
const myOddEvenArray = _.partition([1, 2, 3, 4, 5, 6], (n) => n % 2);

console.log(myOddEvenArray);

// EXECUTION COMMAND LINE in terminal:
// node ./node-package-manager/index.js