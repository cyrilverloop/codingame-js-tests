import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/gravity/gravity.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Gravity", function() {
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

    test("One fall", function() {
        let inputFile = new File(__dirname + 'input/02 - one fall.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - one fall.txt');
    });

    test("Single", function() {
        let inputFile = new File(__dirname + 'input/03 - single.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - single.txt');
    });

    test("CodinGame", function() {
        let inputFile = new File(__dirname + 'input/04 - CodinGame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - CodinGame.txt');
    });

    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/05 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - simple.txt');
    });
});
