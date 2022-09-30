import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/dynamicSorting/dynamicSorting.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dynamic sorting", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple name sorting", function() {
        let inputFile = new File(__dirname + 'input/01 - simple name sorting.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple name sorting.txt');
    });

    test("ThenBy", function() {
        let inputFile = new File(__dirname + 'input/02 - thenBy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - thenBy.txt');
    });

    test("Large dataset", function() {
        let inputFile = new File(__dirname + 'input/03 - large dataset.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - large dataset.txt');
    });

    test("3 sorting parameters", function() {
        let inputFile = new File(__dirname + 'input/04 - 3 sorting parameters.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 3 sorting parameters.txt');
    });

    test("4 sorting parameters", function() {
        let inputFile = new File(__dirname + 'input/05 - 4 sorting parameters.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 4 sorting parameters.txt');
    });
});
