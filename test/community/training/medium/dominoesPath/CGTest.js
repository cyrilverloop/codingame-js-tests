import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/dominoesPath/dominoesPath.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dominoes path", function() {
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
            "true"
        );
    });

    test("No path (easy)", function() {
        let inputFile = new File(__dirname + 'input/02 - no path (easy).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Longer path in order", function() {
        let inputFile = new File(__dirname + 'input/03 - longer path in order.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Broken path", function() {
        let inputFile = new File(__dirname + 'input/04 - broken path.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("Long path scrambled", function() {
        let inputFile = new File(__dirname + 'input/05 - long path scrambled.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("Long invalid sequence", function() {
        let inputFile = new File(__dirname + 'input/06 - long invalid sequence.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });
});
