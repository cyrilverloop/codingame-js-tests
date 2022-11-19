import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/langtonsAnt/langtonsAnt.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Langton's ant", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small uniform grid, few turns", function() {
        let inputFile = new File(__dirname + 'input/01 - small uniform grid, few turns.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - small uniform grid, few turns.txt');
    });

    test("Uniform grid, lots of turns", function() {
        let inputFile = new File(__dirname + 'input/02 - uniform grid, lots of turns.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - uniform grid, lots of turns.txt');
    });

    test("Random grid, huge number of turns", function() {
        let inputFile = new File(__dirname + 'input/03 - random grid, huge number of turns.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - random grid, huge number of turns.txt');
    });

    test("Checkerboard", function() {
        let inputFile = new File(__dirname + 'input/04 - checkerboard.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - checkerboard.txt');
    });

    test("Attractor", function() {
        let inputFile = new File(__dirname + 'input/05 - attractor.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - attractor.txt');
    });
});
