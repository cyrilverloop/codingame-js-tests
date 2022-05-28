import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/sweetSpot/sweetSpot.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Sweet spot", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("First attempt with A-bomb", function() {
        let inputFile = new File(__dirname + 'input/01 - first attempt with a-bomb.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - first attempt with a-bomb.txt');
    });

    test("First attempt with H-bomb", function() {
        let inputFile = new File(__dirname + 'input/02 - first attempt with h-bomb.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - first attempt with h-bomb.txt');
    });

    test("Real case : A/H-bomb", function() {
        let inputFile = new File(__dirname + 'input/03 - real case : A H-bomb.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - real case : A H-bomb.txt');
    });

    test("First attempt with B-bomb", function() {
        let inputFile = new File(__dirname + 'input/04 - first attempt with b-bomb.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - first attempt with b-bomb.txt');
    });

    test("Small map", function() {
        let inputFile = new File(__dirname + 'input/05 - small map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - small map.txt');
    });

    test("Real case : all bombs", function() {
        let inputFile = new File(__dirname + 'input/06 - real case : all bombs.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - real case : all bombs.txt');
    });

    test("Damaged map", function() {
        let inputFile = new File(__dirname + 'input/07 - damaged map.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - damaged map.txt');
    });

    test("No explosions", function() {
        let inputFile = new File(__dirname + 'input/08 - no explosions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - no explosions.txt');
    });
});
