import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/porcupineFever/porcupineFever.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Porcupine fever", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One sick cage", function() {
        let inputFile = new File(__dirname + 'input/01 - one sick cage.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one sick cage.txt');
    });

    test("No porcupines", function() {
        let inputFile = new File(__dirname + 'input/02 - no porcupines.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("One cage goes extinct", function() {
        let inputFile = new File(__dirname + 'input/03 - one cage goes extinct.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - one cage goes extinct.txt');
    });

    test("Dead farm", function() {
        let inputFile = new File(__dirname + 'input/04 - dead farm.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - dead farm.txt');
    });

    test("Bigger farm", function() {
        let inputFile = new File(__dirname + 'input/05 - bigger farm.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - bigger farm.txt');
    });
});
