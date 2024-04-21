// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const fileReadCallBack = (error, data) => {
    if (error) {
        console.log('Error:', error); // Log the specific error
        console.log('Gagal membaca berkas');
        return;
    }
    console.log(data);
}

const filePath = path.resolve(__dirname, 'notes.txt');
fs.readFile(filePath, 'UTF-8', fileReadCallBack);

// const data = fs.readFileSync(filepath, 'UTF-8');
// console.log(data);

// EXECUTION COMMAND LINE in terminal:
// node ./filesystem/index.js