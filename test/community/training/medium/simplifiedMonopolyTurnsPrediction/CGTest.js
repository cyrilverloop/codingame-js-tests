import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/simplifiedMonopolyTurnsPrediction/simplifiedMonopolyTurnsPrediction.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Simplified Monopoly™ turns prediction", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Start from Go", function() {
        let inputFile = new File(__dirname + 'input/01 - start from Go.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - start from Go.txt');
    });

    test("Not start from Go", function() {
        let inputFile = new File(__dirname + 'input/02 - not start from Go.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - not start from Go.txt');
    });

    test("Around the board", function() {
        let inputFile = new File(__dirname + 'input/03 - around the board.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - around the board.txt');
    });

    test("Lucky doubles", function() {
        let inputFile = new File(__dirname + 'input/04 - lucky doubles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - lucky doubles.txt');
    });

    test("Go to jail", function() {
        let inputFile = new File(__dirname + 'input/05 - go to jail.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - go to jail.txt');
    });

    test("Early release", function() {
        let inputFile = new File(__dirname + 'input/06 - early release.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - early release.txt');
    });

    test("Friends forever", function() {
        let inputFile = new File(__dirname + 'input/07 - friends forever.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - friends forever.txt');
    });

    test("Big run", function() {
        let inputFile = new File(__dirname + 'input/08 - big run.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - big run.txt');
    });
});
