import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/cylinders/cylinders.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Cylinders", function() {
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

    test("Caves to fill in", function() {
        let inputFile = new File(__dirname + 'input/02 - caves to fill in.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - caves to fill in.txt');
    });

    test("Harsh", function() {
        let inputFile = new File(__dirname + 'input/03 - harsh.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - harsh.txt');
    });

    test("Optimize your code", function() {
        let inputFile = new File(__dirname + 'input/04 - optimize your code.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - optimize your code.txt');
    });
});
