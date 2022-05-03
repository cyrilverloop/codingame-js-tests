import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/frameThePicture/frameThePicture.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Frame the picture", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tiny picture, thin frame", function() {
        let inputFile = new File(__dirname + 'input/01 - tiny picture, thin frame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - tiny picture, thin frame.txt');
    });

    test("Small picture, thin frame", function() {
        let inputFile = new File(__dirname + 'input/02 - small picture, thin frame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small picture, thin frame.txt');
    });

    test("Small picture, 2-character frame", function() {
        let inputFile = new File(__dirname + 'input/03 - small picture, 2-character frame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - small picture, 2-character frame.txt');
    });

    test("Medium picture, 3-character frame", function() {
        let inputFile = new File(__dirname + 'input/04 - medium picture, 3-character frame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - medium picture, 3-character frame.txt');
    });

    test("Some art", function() {
        let inputFile = new File(__dirname + 'input/05 - some art.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - some art.txt');
    });
});
