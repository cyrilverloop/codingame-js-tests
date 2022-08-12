import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/MCxxxxMicrocontrollerSimulation/MCxxxxMicrocontrollerSimulation.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("MCxxxx microcontroller simulation", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple I/O", function() {
        let inputFile = new File(__dirname + 'input/01 - simple IO.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2"
        );
    });

    test("Double I/O", function() {
        let inputFile = new File(__dirname + 'input/02 - double IO.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2"
        );
    });

    test("Buffering with dat & acc", function() {
        let inputFile = new File(__dirname + 'input/03 - buffering with dat & acc.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 1"
        );
    });

    test("First grade arithmetics", function() {
        let inputFile = new File(__dirname + 'input/04 - first grade arithmetics.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7 1"
        );
    });

    test("Third grade arithmetics", function() {
        let inputFile = new File(__dirname + 'input/05 - third grade arithmetics.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "35"
        );
    });

    test("NOT what you think", function() {
        let inputFile = new File(__dirname + 'input/06 - NOT what you think.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "100 0 0 0"
        );
    });

    test("Labels, jumps and unnecessary text", function() {
        let inputFile = new File(__dirname + 'input/07 - labels, jumps and unnecessary text.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4"
        );
    });

    test("One last time", function() {
        let inputFile = new File(__dirname + 'input/08 - one last time.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0"
        );
    });

    test("What the heck ?", function() {
        let inputFile = new File(__dirname + 'input/09 - what the heck ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1"
        );
    });

    test("Overflow !!!", function() {
        let inputFile = new File(__dirname + 'input/10 - overflow !!!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-999 999 999"
        );
    });

    test("Conditional execution I", function() {
        let inputFile = new File(__dirname + 'input/11 - conditional execution I.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-1"
        );
    });

    test("Conditional execution II", function() {
        let inputFile = new File(__dirname + 'input/12 - conditional execution II.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 1"
        );
    });

    test("Conditional execution III", function() {
        let inputFile = new File(__dirname + 'input/13 - conditional execution III.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 -1"
        );
    });

    test("Digit manipulation I", function() {
        let inputFile = new File(__dirname + 'input/14 - digit manipulation I.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 2 1 0"
        );
    });

    test("Digit manipulation II", function() {
        let inputFile = new File(__dirname + 'input/15 - digit manipulation II.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "999 900"
        );
    });

    test("Concrete example", function() {
        let inputFile = new File(__dirname + 'input/16 - concrete example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2 4 8 16 32 64 128 256 512"
        );
    });

    test("JUMP JUMP JUMP !!!", function() {
        let inputFile = new File(__dirname + 'input/17 - JUMP JUMP JUMP !!!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2 3 4 5 6"
        );
    });
});
