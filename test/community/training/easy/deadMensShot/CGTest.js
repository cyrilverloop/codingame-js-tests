import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/deadMensShot/deadMensShot.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dead men's shot", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Square", function() {
        let inputFile = new File(__dirname + 'input/01 - square.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - square.txt');
    });

    test("Triangle", function() {
        let inputFile = new File(__dirname + 'input/02 - triangle.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - triangle.txt');
    });

    test("Five corners", function() {
        let inputFile = new File(__dirname + 'input/03 - five corners.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - five corners.txt');
    });

    test("Six sides", function() {
        let inputFile = new File(__dirname + 'input/04 - six sides.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - six sides.txt');
    });

    test("Ten sides", function() {
        let inputFile = new File(__dirname + 'input/05 - ten sides.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - ten sides.txt');
    });
});
