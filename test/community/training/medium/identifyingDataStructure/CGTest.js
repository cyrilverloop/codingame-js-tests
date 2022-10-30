import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/identifyingDataStructure/identifyingDataStructure.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Identifying data structure", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Basic", function() {
        let inputFile = new File(__dirname + 'input/01 - basic.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - basic.txt');
    });

    test("More", function() {
        let inputFile = new File(__dirname + 'input/02 - more.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - more.txt');
    });

    test("Much more", function() {
        let inputFile = new File(__dirname + 'input/03 - much more.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - much more.txt');
    });

    test("Long ops", function() {
        let inputFile = new File(__dirname + 'input/04 - long ops.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - long ops.txt');
    });
});
