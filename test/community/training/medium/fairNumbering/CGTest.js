import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/fairNumbering/fairNumbering.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Fair numbering", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Examples", function() {
        let inputFile = new File(__dirname + 'input/01 - examples.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - examples.txt');
    });

    test("Typical cases", function() {
        let inputFile = new File(__dirname + 'input/02 - typical cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - typical cases.txt');
    });

    test("Wide range", function() {
        let inputFile = new File(__dirname + 'input/03 - wide range.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - wide range.txt');
    });

    test("Bigger numbers", function() {
        let inputFile = new File(__dirname + 'input/04 - bigger numbers.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - bigger numbers.txt');
    });

    test("Stress test 1", function() {
        let inputFile = new File(__dirname + 'input/05 - stress test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - stress test 1.txt');
    });

    test("Stress test 2", function() {
        let inputFile = new File(__dirname + 'input/06 - stress test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - stress test 2.txt');
    });

    test("Stress test 3", function() {
        let inputFile = new File(__dirname + 'input/07 - stress test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - stress test 3.txt');
    });
});
