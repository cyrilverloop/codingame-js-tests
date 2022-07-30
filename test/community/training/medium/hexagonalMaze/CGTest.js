import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/hexagonalMaze/hexagonalMaze.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hexagonal maze", function() {
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

    test("Corner ...", function() {
        let inputFile = new File(__dirname + 'input/04 - corner.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - corner.txt');
    });

    test("... or not", function() {
        let inputFile = new File(__dirname + 'input/05 - or not.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - or not.txt');
    });

    test("Everything", function() {
        let inputFile = new File(__dirname + 'input/06 - everything.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - everything.txt');
    });

    test("Real hexagon", function() {
        let inputFile = new File(__dirname + 'input/07 - real hexagon.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - real hexagon.txt');
    });

    test("Nothing to change", function() {
        let inputFile = new File(__dirname + 'input/08 - nothing to change.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - nothing to change.txt');
    });
});
