import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/threeByNTiling/threeByNTiling.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("3×N tiling", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1×N possible", function() {
        let inputFile = new File(__dirname + 'input/01 - 1×N possible.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 1×N possible.txt');
    });

    test("1×N impossible", function() {
        let inputFile = new File(__dirname + 'input/02 - 1×N impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 1×N impossible.txt');
    });

    test("1×N mixed", function() {
        let inputFile = new File(__dirname + 'input/03 - 1×N mixed.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 1×N mixed.txt');
    });

    test("2×N simple", function() {
        let inputFile = new File(__dirname + 'input/04 - 2×N simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 2×N simple.txt');
    });

    test("2×N intermediate", function() {
        let inputFile = new File(__dirname + 'input/05 - 2×N intermediate.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 2×N intermediate.txt');
    });

    test("2×N advanced", function() {
        let inputFile = new File(__dirname + 'input/06 - 2×N advanced.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - 2×N advanced.txt');
    });

    test("3×N simple", function() {
        let inputFile = new File(__dirname + 'input/07 - 3×N simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - 3×N simple.txt');
    });

    test("3×N intermediate", function() {
        let inputFile = new File(__dirname + 'input/08 - 3×N intermediate.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - 3×N intermediate.txt');
    });

    test("3×N advanced", function() {
        let inputFile = new File(__dirname + 'input/09 - 3×N advanced.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - 3×N advanced.txt');
    });

    test("Mixed", function() {
        let inputFile = new File(__dirname + 'input/10 - mixed.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - mixed.txt');
    });

    test("You might want to check these", function() {
        let inputFile = new File(__dirname + 'input/11 - you might want to check these.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - you might want to check these.txt');
    });
});
