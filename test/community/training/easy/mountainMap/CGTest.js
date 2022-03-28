import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/mayTheTriforceBeWithYou/mayTheTriforceBeWithYou.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('May the Triforce be with you!', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('N = 1', function() {
        let inputFile = new File(__dirname + 'input/01 - N=1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - N=1.txt');
    });

    test('N = 3', function() {
        let inputFile = new File(__dirname + 'input/02 - N=3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - N=3.txt');
    });

    test('N = 5', function() {
        let inputFile = new File(__dirname + 'input/03 - N=5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - N=5.txt');
    });

    test('N = 10', function() {
        let inputFile = new File(__dirname + 'input/04 - N=10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - N=10.txt');
    });
});
