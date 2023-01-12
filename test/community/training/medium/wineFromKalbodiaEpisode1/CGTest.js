import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/wineFromKalbodiaEpisode1/wineFromKalbodiaEpisode1.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Wine from Kalbodia - episode 1", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Trivial solution", function() {
        let inputFile = new File(__dirname + 'input/01 - trivial solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - trivial solution.txt');
    });

    test("Differing lengths", function() {
        let inputFile = new File(__dirname + 'input/02 - differing lengths.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - differing lengths.txt');
    });

    test("Bulk orders", function() {
        let inputFile = new File(__dirname + 'input/03 - bulk orders.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - bulk orders.txt');
    });

    test("Similar languages", function() {
        let inputFile = new File(__dirname + 'input/04 - similar languages.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - similar languages.txt');
    });

    test("Small alphabets", function() {
        let inputFile = new File(__dirname + 'input/05 - small alphabets.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - small alphabets.txt');
    });

    test("What's the likelihood?", function() {
        let inputFile = new File(__dirname + 'input/06 - What\'s the likelihood?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - What\'s the likelihood?.txt');
    });

    test("Wall of text", function() {
        let inputFile = new File(__dirname + 'input/07 - wall of text.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - wall of text.txt');
    });

    test("Completely random", function() {
        let inputFile = new File(__dirname + 'input/08 - completely random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - completely random.txt');
    });
});
