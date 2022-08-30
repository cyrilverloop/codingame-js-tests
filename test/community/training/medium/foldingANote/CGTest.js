import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/foldingANote/foldingANote.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Folding a note", function() {
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

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A"
        );
    });

    test("LOL", function() {
        let inputFile = new File(__dirname + 'input/02 - LOL.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LMAO"
        );
    });

    test("Brooo...", function() {
        let inputFile = new File(__dirname + 'input/03 - brooo....txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Duuuuuuuuuuuude!"
        );
    });

    test("Piggy", function() {
        let inputFile = new File(__dirname + 'input/04 - piggy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "The supervisor looks like a hog! Oink oink... I want some bacon."
        );
    });

    test("I really like detention.", function() {
        let inputFile = new File(__dirname + 'input/05 - i really like detention.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - i really like detention.txt');
    });
});
