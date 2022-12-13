import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/numeralSystem/numeralSystem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Numeral system", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/01 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Normal", function() {
        let inputFile = new File(__dirname + 'input/02 - normal.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            17
        );
    });

    test("Corner case min", function() {
        let inputFile = new File(__dirname + 'input/03 - corner case min.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Corner case max", function() {
        let inputFile = new File(__dirname + 'input/04 - corner case max.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            36
        );
    });

    test("Minimum valid system", function() {
        let inputFile = new File(__dirname + 'input/05 - minimum valid system.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });
});
