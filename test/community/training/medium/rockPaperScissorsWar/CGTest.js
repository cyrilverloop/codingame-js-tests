import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/rockPaperScissorsWar/rockPaperScissorsWar.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Rock-paper-scissors war", function() {
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

    test("Win and lose", function() {
        let inputFile = new File(__dirname + 'input/02 - win and lose.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - win and lose.txt');
    });

    test("Propagation", function() {
        let inputFile = new File(__dirname + 'input/03 - propagation.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - propagation.txt');
    });

    test("One fights a hundred", function() {
        let inputFile = new File(__dirname + 'input/04 - one fights a hundred.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - one fights a hundred.txt');
    });

    test("Linear 1", function() {
        let inputFile = new File(__dirname + 'input/05 - linear 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - linear 1.txt');
    });

    test("Linear 2", function() {
        let inputFile = new File(__dirname + 'input/06 - linear 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - linear 2.txt');
    });

    test("Random", function() {
        let inputFile = new File(__dirname + 'input/07 - random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - random.txt');
    });

    test("Diamonds", function() {
        let inputFile = new File(__dirname + 'input/08 - diamonds.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - diamonds.txt');
    });

    test("United kingdom", function() {
        let inputFile = new File(__dirname + 'input/09 - united kingdom.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - united kingdom.txt');
    });

    test("United states", function() {
        let inputFile = new File(__dirname + 'input/10 - united states.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - united states.txt');
    });
});
