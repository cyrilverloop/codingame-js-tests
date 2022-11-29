import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bloodTypes/bloodTypes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Blood types", function() {
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

    test("Child blood types", function() {
        let inputFile = new File(__dirname + 'input/02 - child blood types.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - child blood types.txt');
    });

    test("Parents blood types", function() {
        let inputFile = new File(__dirname + 'input/03 - parents blood types.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - parents blood types.txt');
    });

    test("All combins", function() {
        let inputFile = new File(__dirname + 'input/04 - all combins.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - all combins.txt');
    });
});
