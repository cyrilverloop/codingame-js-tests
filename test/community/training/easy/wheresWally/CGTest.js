import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/wheresWally/wheresWally.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Where's Wally", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Alone (Exemple)", function() {
        let inputFile = new File(__dirname + 'input/01 - alone (exemple).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "6 1"
        );
    });

    test("Hidden in the crowd", function() {
        let inputFile = new File(__dirname + 'input/02 - hidden in the crowd.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 4"
        );
    });

    test("Hard", function() {
        let inputFile = new File(__dirname + 'input/03 - hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "28 17"
        );
    });

    test("Very hard", function() {
        let inputFile = new File(__dirname + 'input/04 - very hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9 65"
        );
    });
});
