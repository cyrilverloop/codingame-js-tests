import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/gravityCentrifugeTuning/gravityCentrifugeTuning.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Gravity centrifuge tuning", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tumble", function() {
        let inputFile = new File(__dirname + 'input/01 - tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1"
        );
    });

    test("Double tumble", function() {
        let inputFile = new File(__dirname + 'input/02 - double tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2"
        );
    });

    test("Triple tumble", function() {
        let inputFile = new File(__dirname + 'input/03 - triple tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4"
        );
    });

    test("Octal, remember?", function() {
        let inputFile = new File(__dirname + 'input/04 - octal, remember?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "21"
        );
    });

    test("Dead beef!", function() {
        let inputFile = new File(__dirname + 'input/05 - dead beef!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1102000022051000"
        );
    });

    test("Wait, what?", function() {
        let inputFile = new File(__dirname + 'input/06 - wait, what?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0"
        );
    });

    test("Ramp it up! 1", function() {
        let inputFile = new File(__dirname + 'input/07 - ramp it up! 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "24000252252242"
        );
    });

    test("Ramp it up! 2", function() {
        let inputFile = new File(__dirname + 'input/08 - ramp it up! 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10112520124222245"
        );
    });

    test("Ramp it up! 3", function() {
        let inputFile = new File(__dirname + 'input/09 - ramp it up! 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5040251045220204524"
        );
    });

    test("Binary overflow", function() {
        let inputFile = new File(__dirname + 'input/10 - binary overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "10404120421225002512504412044244"
        );
    });

    test("Zeckendorf would be proud of you!", function() {
        let inputFile = new File(__dirname + 'input/11 - Zeckendorf would be proud of you!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - Zeckendorf would be proud of you!.txt');
    });
});
