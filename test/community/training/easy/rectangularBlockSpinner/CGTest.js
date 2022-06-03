import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/rectangularBlockSpinner/rectangularBlockSpinner.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Rectangular block spinner", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Shine bright like a dimond", function() {
        let inputFile = new File(__dirname + 'input/01 - shine bright like a dimond.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - shine bright like a dimond.txt');
    });

    test("Small random 1", function() {
        let inputFile = new File(__dirname + 'input/02 - small random 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small random 1.txt');
    });

    test("Small random 2", function() {
        let inputFile = new File(__dirname + 'input/03 - small random 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - small random 2.txt');
    });

    test("Large random", function() {
        let inputFile = new File(__dirname + 'input/04 - large random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - large random.txt');
    });
});
