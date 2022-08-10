import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/CGFungeInterpreter/CGFungeInterpreter.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("CGFunge interpreter", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Just math", function() {
        let inputFile = new File(__dirname + 'input/01 - just math.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "42"
        );
    });

    test("Simple text", function() {
        let inputFile = new File(__dirname + 'input/02 - simple text.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Simple text"
        );
    });

    test("Go all ways", function() {
        let inputFile = new File(__dirname + 'input/03 - go all ways.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CGCGCG"
        );
    });

    test("Very hello world", function() {
        let inputFile = new File(__dirname + 'input/04 - very hello world.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello, Hello, Hello, Hello World!"
        );
    });

    test("Sing me a song", function() {
        let inputFile = new File(__dirname + 'input/05 - sing me a song.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - sing me a song.txt');
    });

    test("Skip & short lines", function() {
        let inputFile = new File(__dirname + 'input/06 - skip & short lines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Yay!"
        );
    });
});
