import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/theMysticRectangle/theMysticRectangle.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The mystic rectangle", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example in description", function() {
        let inputFile = new File(__dirname + 'input/01 - example in description.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9.5
        );
    });

    test("Horizontal", function() {
        let inputFile = new File(__dirname + 'input/02 - horizontal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1.5
        );
    });

    test("Vertical", function() {
        let inputFile = new File(__dirname + 'input/03 - vertical.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1.2
        );
    });

    test("Diagonal", function() {
        let inputFile = new File(__dirname + 'input/04 - diagonal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2.5
        );
    });

    test("Precision", function() {
        let inputFile = new File(__dirname + 'input/05 - precision.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5.0"
        );
    });

    test("Askew long", function() {
        let inputFile = new File(__dirname + 'input/06 - askew long.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11.5
        );
    });

    test("Askew tall", function() {
        let inputFile = new File(__dirname + 'input/07 - askew tall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "12.0"
        );
    });

    test("East west wrapper", function() {
        let inputFile = new File(__dirname + 'input/08 - east west wrapper.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6.0"
        );
    });

    test("Double wrapped", function() {
        let inputFile = new File(__dirname + 'input/09 - double wrapped.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7.0"
        );
    });

    test("Travel on boundary", function() {
        let inputFile = new File(__dirname + 'input/10 - travel on boundary.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "16.0"
        );
    });

    test("Polar opposites", function() {
        let inputFile = new File(__dirname + 'input/11 - polar opposites.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "45.0"
        );
    });

    test("Random", function() {
        let inputFile = new File(__dirname + 'input/12 - random.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            22.5
        );
    });
});
