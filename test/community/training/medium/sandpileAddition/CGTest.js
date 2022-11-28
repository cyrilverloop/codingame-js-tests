import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/sandpileAddition/sandpileAddition.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sandpile addition", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One simple addition", function() {
        let inputFile = new File(__dirname + 'input/01 - one simple addition.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one simple addition.txt');
    });

    test("One more simple case", function() {
        let inputFile = new File(__dirname + 'input/02 - one more simple case.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - one more simple case.txt');
    });

    test("A lot of redistribution", function() {
        let inputFile = new File(__dirname + 'input/03 - a lot of redistribution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - a lot of redistribution.txt');
    });

    test("Pretty packed", function() {
        let inputFile = new File(__dirname + 'input/04 - pretty packed.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - pretty packed.txt');
    });

    test("Two full sandpiles", function() {
        let inputFile = new File(__dirname + 'input/05 - two full sandpiles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - two full sandpiles.txt');
    });

    test("Bigger grid", function() {
        let inputFile = new File(__dirname + 'input/06 - bigger grid.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - bigger grid.txt');
    });

    test("Even bigger", function() {
        let inputFile = new File(__dirname + 'input/07 - even bigger.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - even bigger.txt');
    });

    test("Asymmetric", function() {
        let inputFile = new File(__dirname + 'input/08 - asymmetric.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - asymmetric.txt');
    });
});
