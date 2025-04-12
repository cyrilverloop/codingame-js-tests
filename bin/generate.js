import FilesGenerator from "../lib/generator/FilesGenerator.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url)) + "/";

async function generate() {
    console.log('Starting generation.');

    const filesGenerator = new FilesGenerator(__dirname + '../');
    await filesGenerator.generate(
        __dirname + '../node_modules/@cyrilverloop/codingame-configuration/config/'
    );

    console.log('Generation complete.');
}

generate();
