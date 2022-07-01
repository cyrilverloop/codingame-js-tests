import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/someonesActingSus/someonesActingSus.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Someone's acting sus....", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Basic sus inspection", function() {
        let inputFile = new File(__dirname + 'input/01 - basic sus inspection.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - basic sus inspection.txt');
    });

    test("Can you handle number signs?", function() {
        let inputFile = new File(__dirname + 'input/02 - can you handle number signs?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - can you handle number signs?.txt');
    });

    test("Your hacks kinda broke :)", function() {
        let inputFile = new File(__dirname + 'input/03 - your hacks kinda broke :).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - your hacks kinda broke :).txt');
    });

    test("The big data test", function() {
        let inputFile = new File(__dirname + 'input/04 - the big data test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - the big data test.txt');
    });
});
