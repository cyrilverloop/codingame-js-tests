import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/countAsICount/countAsICount.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Count as i count", function() {
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
            7
        );
    });

    test("To continue", function() {
        let inputFile = new File(__dirname + 'input/02 - to continue.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1776
        );
    });

    test("Only one", function() {
        let inputFile = new File(__dirname + 'input/03 - only one.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Near victory", function() {
        let inputFile = new File(__dirname + 'input/04 - near victory.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            176
        );
    });

    test("Impossible", function() {
        let inputFile = new File(__dirname + 'input/05 - impossible.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Strike !!!", function() {
        let inputFile = new File(__dirname + 'input/06 - strike !!!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16
        );
    });

    test("A lot", function() {
        let inputFile = new File(__dirname + 'input/07 - a lot.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16148
        );
    });

    test("A lot bis", function() {
        let inputFile = new File(__dirname + 'input/08 - a lot bis.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            16552
        );
    });
});
