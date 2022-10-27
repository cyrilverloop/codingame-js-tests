import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/snakeEncoding/snakeEncoding.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Snake encoding", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Very easy", function() {
        let inputFile = new File(__dirname + 'input/01 - easy peasy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy peasy.txt');
    });

    test("More rows", function() {
        let inputFile = new File(__dirname + 'input/02 - more rows.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - more rows.txt');
    });

    test("More loops", function() {
        let inputFile = new File(__dirname + 'input/03 - more loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - more loops.txt');
    });

    test("Let's try everything", function() {
        let inputFile = new File(__dirname + 'input/04 - let\'s try everything.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - let\'s try everything.txt');
    });
});
