import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/boxOfCigars/boxOfCigars.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Box of cigars", function() {
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

    test("All valid", function() {
        let inputFile = new File(__dirname + 'input/02 - all valid.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Common difference = 1", function() {
        let inputFile = new File(__dirname + 'input/03 - common difference = 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test("Big test", function() {
        let inputFile = new File(__dirname + 'input/04 - big test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("50 cigars", function() {
        let inputFile = new File(__dirname + 'input/05 - 50 cigars.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("100 Cigars!", function() {
        let inputFile = new File(__dirname + 'input/06 - 100 cigars!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test("Millionare", function() {
        let inputFile = new File(__dirname + 'input/07 - millionare.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            19
        );
    });
});
