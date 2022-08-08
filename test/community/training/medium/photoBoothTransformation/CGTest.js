import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/photoBoothTransformation/photoBoothTransformation.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Photo booth transformation", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("Size <= 10", function() {
        let inputFile = new File(__dirname + 'input/02 - size <= 10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - size <= 10.txt');
    });

    test("Size <= 20", function() {
        let inputFile = new File(__dirname + 'input/03 - size <= 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - size <= 20.txt');
    });

    test("Size <= 100", function() {
        let inputFile = new File(__dirname + 'input/04 - size <= 100.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - size <= 100.txt');
    });

    test("Size <= 500", function() {
        let inputFile = new File(__dirname + 'input/05 - size <= 500.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - size <= 500.txt');
    });

    test("Size <= 1000", function() {
        let inputFile = new File(__dirname + 'input/06 - size <= 1000.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - size <= 1000.txt');
    });

    test("Size <= 2000", function() {
        let inputFile = new File(__dirname + 'input/07 - size <= 2000.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - size <= 2000.txt');
    });
});
