import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/shortAccountsMakeLongFriends/shortAccountsMakeLongFriends.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Short accounts make long friends", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Very simple", function() {
        let inputFile = new File(__dirname + 'input/01 - very simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - very simple.txt');
    });

    test("Bad bad bad", function() {
        let inputFile = new File(__dirname + 'input/02 - bad bad bad.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - bad bad bad.txt');
    });

    test("425", function() {
        let inputFile = new File(__dirname + 'input/03 - 425.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 425.txt');
    });

    test("889", function() {
        let inputFile = new File(__dirname + 'input/04 - 889.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 889.txt');
    });

    test("A division?", function() {
        let inputFile = new File(__dirname + 'input/05 - a division?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - a division?.txt');
    });

    test("Another division", function() {
        let inputFile = new File(__dirname + 'input/06 - another division.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - another division.txt');
    });
});
