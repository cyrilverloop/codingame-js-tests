import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/inStereo/inStereo.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("In stereo", function() {
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

    test("Lattice", function() {
        let inputFile = new File(__dirname + 'input/02 - lattice.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - lattice.txt');
    });

    test("Diamond", function() {
        let inputFile = new File(__dirname + 'input/03 - diamond.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - diamond.txt');
    });

    test("ViewFullscreen", function() {
        let inputFile = new File(__dirname + 'input/04 - viewFullscreen.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - viewFullscreen.txt');
    });
});
