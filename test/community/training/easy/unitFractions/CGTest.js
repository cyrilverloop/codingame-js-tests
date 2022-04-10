import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/unitFractions/unitFractions.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Unit fractions", function() {
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

    test("12", function() {
        let inputFile = new File(__dirname + 'input/02 - 12.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 12.txt');
    });

    test("17", function() {
        let inputFile = new File(__dirname + 'input/03 - 17.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 17.txt');
    });

    test("100", function() {
        let inputFile = new File(__dirname + 'input/04 - 100.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 100.txt');
    });

    test("9999", function() {
        let inputFile = new File(__dirname + 'input/05 - 9999.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 9999.txt');
    });

    test("71339", function() {
        let inputFile = new File(__dirname + 'input/06 - 71339.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - 71339.txt');
    });

    test("104027", function() {
        let inputFile = new File(__dirname + 'input/07 - 104027.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - 104027.txt');
    });
});
