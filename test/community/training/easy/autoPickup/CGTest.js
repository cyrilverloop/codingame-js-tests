import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/autoPickup/autoPickup.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Auto pickup", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("just a item drop", function() {
        let inputFile = new File(__dirname + 'input/01 - just a item drop.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "001001010"
        );
    });

    test("more than 1 drop", function() {
        let inputFile = new File(__dirname + 'input/02 - more than 1 drop.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "00100010001001011"
        );
    });

    test("other packets", function() {
        let inputFile = new File(__dirname + 'input/03 - other packets.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "00100011"
        );
    });

    test("In between", function() {
        let inputFile = new File(__dirname + 'input/04 - in between.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "001001011"
        );
    });

    test("that is a long one", function() {
        let inputFile = new File(__dirname + 'input/05 - that is a long one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0010011101001100011100011"
        );
    });
});
