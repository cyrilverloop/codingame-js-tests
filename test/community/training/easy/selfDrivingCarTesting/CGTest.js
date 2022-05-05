import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/selfDrivingCarTesting/selfDrivingCarTesting.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Self-driving car testing", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A simple straight line", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple straight line.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - a simple straight line.txt');
    });

    test("Gentleman, start your engines", function() {
        let inputFile = new File(__dirname + 'input/02 - gentleman, start your engines.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - gentleman, start your engines.txt');
    });

    test("The Senna 'S'", function() {
        let inputFile = new File(__dirname + 'input/03 - the Senna S.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - the Senna S.txt');
    });

    test("Drunk car", function() {
        let inputFile = new File(__dirname + 'input/04 - drunk car.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - drunk car.txt');
    });
});
