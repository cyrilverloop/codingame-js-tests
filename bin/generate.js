import FilesGenerator from "../lib/generator/FilesGenerator.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)) + "/";

async function generate() {
    console.log('Starting generation.');

    const filesGenerator = new FilesGenerator(__dirname + '../templates/');
    await filesGenerator.generate(
        __dirname + '../config/',
        __dirname + '../lib/',
        __dirname + '../test/'
    );

    console.log('Generation complete.');
}

generate();
