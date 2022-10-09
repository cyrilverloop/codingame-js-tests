import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/remainingCard/remainingCard.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Remaining card", function() {
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

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/02 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            14
        );
    });

    test("A little more", function() {
        let inputFile = new File(__dirname + 'input/03 - a little more.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            32
        );
    });

    test("A thick deck", function() {
        let inputFile = new File(__dirname + 'input/04 - a thick deck.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            530
        );
    });

    test("Heavy deck", function() {
        let inputFile = new File(__dirname + 'input/05 - heavy deck.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3368
        );
    });

    test("Getting serious", function() {
        let inputFile = new File(__dirname + 'input/06 - getting serious.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            171226
        );
    });

    test("Millions 1", function() {
        let inputFile = new File(__dirname + 'input/07 - millions 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            59004560
        );
    });

    test("Millions 2", function() {
        let inputFile = new File(__dirname + 'input/08 - millions 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            321640652
        );
    });

    test("Ultimate test", function() {
        let inputFile = new File(__dirname + 'input/09 - ultimate test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            926258176
        );
    });

    test("Boundary case", function() {
        let inputFile = new File(__dirname + 'input/10 - boundary case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });
});
