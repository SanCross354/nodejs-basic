// READABLE AND WRITEABLE STREAM
const fs = require('fs');
const path = require('path');

const filePathInput = path.resolve(__dirname, 'input.txt');
const filePathOutput = path.resolve(__dirname, 'output.txt');

/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const readableStream = fs.createReadStream(filePathInput, {
    highWaterMark: 15
});

const writableStream = fs.createWriteStream(filePathOutput);

readableStream.on('readable', () => {
    try {
        writableStream.write(`${readableStream.read()}\n`);
    } catch (error) {
        // catch the error when the chunk cannot be read.
    }
});

readableStream.on('end', () => {
    writableStream.end();
});

// EXECUTION COMMAND LINE in terminal:
// node ./stream/index.js