import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/fireControl/fireControl.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Fire control", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Side-fire", function() {
        let inputFile = new File(__dirname + 'input/01 - side-fire.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            12
        );
    });

    test("Who cut those?", function() {
        let inputFile = new File(__dirname + 'input/02 - who cut those?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test("Should i plant some trees?", function() {
        let inputFile = new File(__dirname + 'input/03 - should I plant some trees?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "JUST RUN"
        );
    });

    test("Random centre", function() {
        let inputFile = new File(__dirname + 'input/04 - random centre.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            24
        );
    });

    test("Trees???", function() {
        let inputFile = new File(__dirname + 'input/05 - trees???.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "JUST RUN"
        );
    });

    test("Just RUN", function() {
        let inputFile = new File(__dirname + 'input/06 - Just RUN.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "JUST RUN"
        );
    });

    test("Who plant THIS???", function() {
        let inputFile = new File(__dirname + 'input/07 - who plant THIS???.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "JUST RUN"
        );
    });

    test("False alarm", function() {
        let inputFile = new File(__dirname + 'input/08 - false alarm.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "RELAX"
        );
    });
});
