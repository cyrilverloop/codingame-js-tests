import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/movesInMaze/movesInMaze.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Moves in maze", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/01 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy.txt');
    });

    test("Loop", function() {
        let inputFile = new File(__dirname + 'input/02 - loop.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - loop.txt');
    });

    test("Through borders", function() {
        let inputFile = new File(__dirname + 'input/03 - through borders.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - through borders.txt');
    });

    test("Through borders", function() {
        let inputFile = new File(__dirname + 'input/03 - through borders.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - through borders.txt');
    });

    test("Space", function() {
        let inputFile = new File(__dirname + 'input/04 - space.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - space.txt');
    });

    test("Unreachable", function() {
        let inputFile = new File(__dirname + 'input/05 - unreachable.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - unreachable.txt');
    });

    test("Everything", function() {
        let inputFile = new File(__dirname + 'input/06 - everything.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - everything.txt');
    });

    test("Blocked", function() {
        let inputFile = new File(__dirname + 'input/07 - blocked.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - blocked.txt');
    });
});
