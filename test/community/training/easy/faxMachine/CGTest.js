import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/faxMachine/faxMachine.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Fax machine", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("The Example", function() {
        let inputFile = new File(__dirname + 'input/01 - the example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - the example.txt');
    });

    test("Half Black half white", function() {
        let inputFile = new File(__dirname + 'input/02 - half black half white.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - half black half white.txt');
    });

    test("Hello", function() {
        let inputFile = new File(__dirname + 'input/03 - hello.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - hello.txt');
    });

    test("Heart", function() {
        let inputFile = new File(__dirname + 'input/04 - heart.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - heart.txt');
    });

    test("Inverse", function() {
        let inputFile = new File(__dirname + 'input/05 - inverse.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - inverse.txt');
    });
});
