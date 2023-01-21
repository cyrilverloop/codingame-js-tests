import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/ASCIIArtGlassStacking/ASCIIArtGlassStacking.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("ASCII ART : glass stacking", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("4 glasses", function() {
        let inputFile = new File(__dirname + 'input/01 - 4 glasses.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 4 glasses.txt');
    });

    test("10 glasses", function() {
        let inputFile = new File(__dirname + 'input/02 - 10 glasses.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 10 glasses.txt');
    });

    test("25 glasses", function() {
        let inputFile = new File(__dirname + 'input/03 - 25 glasses.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 25 glasses.txt');
    });

    test("A single glass", function() {
        let inputFile = new File(__dirname + 'input/04 - a single glass.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - a single glass.txt');
    });
});
