import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/stallTilt/stallTilt.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Stall tilt", function() {
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

    test("Stalling", function() {
        let inputFile = new File(__dirname + 'input/02 - stalling.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - stalling.txt');
    });

    test("Real case", function() {
        let inputFile = new File(__dirname + 'input/03 - real case.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - real case.txt');
    });

    test("Just a little one", function() {
        let inputFile = new File(__dirname + 'input/04 - just a little one.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - just a little one.txt');
    });

    test("Duel", function() {
        let inputFile = new File(__dirname + 'input/05 - duel.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - duel.txt');
    });
});
