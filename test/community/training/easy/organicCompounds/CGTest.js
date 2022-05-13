import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/organicCompounds/organicCompounds.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Organic compounds", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Saturated hydrocarbon (valid)", function() {
        let inputFile = new File(__dirname + 'input/01 - saturated hydrocarbon (valid).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Unsaturated hydrocarbon (valid)", function() {
        let inputFile = new File(__dirname + 'input/02 - unsaturated hydrocarbon (valid).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Hydrocarbon with 1 substituent", function() {
        let inputFile = new File(__dirname + 'input/03 - hydrocarbon with 1 substituent.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Multiple substituents (invalid)", function() {
        let inputFile = new File(__dirname + 'input/04 - multiple substituents (invalid).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Unsaturated hydrocarbon with substituents", function() {
        let inputFile = new File(__dirname + 'input/05 - unsaturated hydrocarbon with substituents.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("INVALID", function() {
        let inputFile = new File(__dirname + 'input/06 - INVALID.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Cyclic hydrocarbon", function() {
        let inputFile = new File(__dirname + 'input/07 - cyclic hydrocarbon.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Cyclic hydrocarbon with substituents", function() {
        let inputFile = new File(__dirname + 'input/08 - cyclic hydrocarbon with substituents.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("2 carbon cycles", function() {
        let inputFile = new File(__dirname + 'input/09 - 2 carbon cycles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "VALID"
        );
    });

    test("Enormous compound", function() {
        let inputFile = new File(__dirname + 'input/10 - enormous compound.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Codingame", function() {
        let inputFile = new File(__dirname + 'input/11 - codingame.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });
});
