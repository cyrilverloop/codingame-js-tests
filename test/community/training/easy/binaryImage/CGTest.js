import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/binaryImage/binaryImage.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Binary image', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Vertical stripes', function() {
        let inputFile = new File(__dirname + 'input/01 - vertical stripes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - vertical stripes.txt');
    });

    test('Starting by 0', function() {
        let inputFile = new File(__dirname + 'input/02 - starting by 0.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - starting by 0.txt');
    });

    test('Chess board', function() {
        let inputFile = new File(__dirname + 'input/03 - chess board.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - chess board.txt');
    });

    test('Horizontal stripes', function() {
        let inputFile = new File(__dirname + 'input/04 - horizontal stripes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - horizontal stripes.txt');
    });

    test('Codingame', function() {
        let inputFile = new File(__dirname + 'input/05 - codingame.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - codingame.txt');
    });

    test('Invalid', function() {
        let inputFile = new File(__dirname + 'input/06 - invalid.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test('Random', function() {
        let inputFile = new File(__dirname + 'input/07 - random.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - random.txt');
    });
});
