import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/reversedLookAndSay/reversedLookAndSay.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Reversed look-and-say", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1. An easy one", function() {
        let inputFile = new File(__dirname + 'input/01 - an easy one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Test 2. Not so easy", function() {
        let inputFile = new File(__dirname + 'input/02 - not so easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            111
        );
    });

    test("Test 3. Give it a try", function() {
        let inputFile = new File(__dirname + 'input/03 - give it a try.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2222122222
        );
    });

    test("Test 4. To infinity and beyond!", function() {
        let inputFile = new File(__dirname + 'input/04 - to infinity and beyond!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            22
        );
    });

    test("Test 5. Not a big deal", function() {
        let inputFile = new File(__dirname + 'input/05 - not a big deal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11123
        );
    });
});
