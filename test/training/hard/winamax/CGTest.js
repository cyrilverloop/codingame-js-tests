import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/hard/winamax/winamax.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Winamax', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 1', function() {
        let inputFile = new File(__dirname + 'input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            ">."
        );
    });

    test('Test 2', function() {
        let inputFile = new File(__dirname + 'input/02 - test 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - test 2.txt');
    });

    test('Test 3', function() {
        let inputFile = new File(__dirname + 'input/03 - test 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - test 3.txt');
    });

    test('Test 4', function() {
        let inputFile = new File(__dirname + 'input/04 - test 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - test 4.txt');
    });

    test('Test 5', function() {
        let inputFile = new File(__dirname + 'input/05 - test 5.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - test 5.txt');
    });

    test('Test 6', function() {
        let inputFile = new File(__dirname + 'input/06 - test 6.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - test 6.txt');
    });

    test('Test 7', function() {
        let inputFile = new File(__dirname + 'input/07 - test 7.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - test 7.txt');
    });

    test('Test 8', function() {
        let inputFile = new File(__dirname + 'input/08 - test 8.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - test 8.txt');
    });

    test('Test 9', function() {
        let inputFile = new File(__dirname + 'input/09 - test 9.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - test 9.txt');
    });

    test('Test 10', function() {
        let inputFile = new File(__dirname + 'input/10 - test 10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - test 10.txt');
    });

    test('Test 11', function() {
        let inputFile = new File(__dirname + 'input/11 - test 11.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - test 11.txt');
    });

    test('Test 12', function() {
        let inputFile = new File(__dirname + 'input/12 - test 12.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - test 12.txt');
    });

    test('Test 13', function() {
        let inputFile = new File(__dirname + 'input/13 - test 13.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/13 - test 13.txt');
    });

    test('Test 14', function() {
        let inputFile = new File(__dirname + 'input/14 - test 14.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/14 - test 14.txt');
    });

    test('Test 15', function() {
        let inputFile = new File(__dirname + 'input/15 - test 15.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/15 - test 15.txt');
    });

    test('Test 16', function() {
        let inputFile = new File(__dirname + 'input/16 - test 16.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/16 - test 16.txt');
    });

    test('Test 17', function() {
        let inputFile = new File(__dirname + 'input/17 - test 17.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/17 - test 17.txt');
    });

    test('Test 18', function() {
        let inputFile = new File(__dirname + 'input/18 - test 18.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/18 - test 18.txt');
    });

    test('Test 19', function() {
        let inputFile = new File(__dirname + 'input/19 - test 19.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/19 - test 19.txt');
    });

    test('Test 20', function() {
        let inputFile = new File(__dirname + 'input/20 - test 20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/20 - test 20.txt');
    });

    test('Test 21', function() {
        let inputFile = new File(__dirname + 'input/21 - test 21.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/21 - test 21.txt');
    });
});
