import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/theElectricianApprentice/theElectricianApprentice.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The electrician apprentice", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1 switch 1 light", function() {
        let inputFile = new File(__dirname + 'input/01 - 1 switch 1 light.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LIGHT is ON"
        );
    });

    test("2 parallel switches 1 light", function() {
        let inputFile = new File(__dirname + 'input/02 - 2 parallel switches 1 light.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LIGHT is ON"
        );
    });

    test("2 series switches 1 light", function() {
        let inputFile = new File(__dirname + 'input/03 - 2 series switches 1 light.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LIGHT is OFF"
        );
    });

    test("Two lights", function() {
        let inputFile = new File(__dirname + 'input/04 - two lights.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - two lights.txt');
    });

    test("Series and parallel", function() {
        let inputFile = new File(__dirname + 'input/05 - series and parallel.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "LIGHT is ON"
        );
    });

    test("Mixed", function() {
        let inputFile = new File(__dirname + 'input/06 - mixed.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - mixed.txt');
    });

    test("Weird Home", function() {
        let inputFile = new File(__dirname + 'input/07 - weird home.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - weird home.txt');
    });

    test("Regular Home", function() {
        let inputFile = new File(__dirname + 'input/08 - regular home.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - regular home.txt');
    });
});
