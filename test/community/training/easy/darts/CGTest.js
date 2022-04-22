import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/darts/darts.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Darts", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Hit and miss duos", function() {
        let inputFile = new File(__dirname + 'input/01 - hit and miss duos.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - hit and miss duos.txt');
    });

    test("Solo play", function() {
        let inputFile = new File(__dirname + 'input/02 - Solo play.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Will 30"
        );
    });

    test("Chaotic Ties", function() {
        let inputFile = new File(__dirname + 'input/03 - chaotic ties.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - chaotic ties.txt');
    });

    test("Circles", function() {
        let inputFile = new File(__dirname + 'input/04 - circles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - circles.txt');
    });
});
