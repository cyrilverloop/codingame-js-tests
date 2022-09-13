import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/maze/maze.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Maze", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Single exit", function() {
        let inputFile = new File(__dirname + 'input/01 - single exit.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - single exit.txt');
    });

    test("Multiple exits", function() {
        let inputFile = new File(__dirname + 'input/02 - multiple exits.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - multiple exits.txt');
    });

    test("No way out", function() {
        let inputFile = new File(__dirname + 'input/03 - no way out.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Loops", function() {
        let inputFile = new File(__dirname + 'input/04 - loops.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - loops.txt');
    });

    test("All together, 21x21", function() {
        let inputFile = new File(__dirname + 'input/05 - all together, 21x21.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - all together, 21x21.txt');
    });
});
