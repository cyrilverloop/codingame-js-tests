import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/lunarLockout/lunarLockout.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Lunar lockout", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One move", function() {
        let inputFile = new File(__dirname + 'input/01 - one move.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one move.txt');
    });

    test("A little more movement", function() {
        let inputFile = new File(__dirname + 'input/02 - a little more movement.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - a little more movement.txt');
    });

    test("A few more moves", function() {
        let inputFile = new File(__dirname + 'input/03 - a few more moves.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - a few more moves.txt');
    });

    test("Many more movements", function() {
        let inputFile = new File(__dirname + 'input/04 - many more movements.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - many more movements.txt');
    });

    test("The maximum of movements", function() {
        let inputFile = new File(__dirname + 'input/05 - the maximum of movements.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - the maximum of movements.txt');
    });
});
