import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/lightBulbs/lightBulbs.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Light bulbs", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2"
        );
    });

    test("N=5", function() {
        let inputFile = new File(__dirname + 'input/02 - N=5.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "21"
        );
    });

    test("N=6", function() {
        let inputFile = new File(__dirname + 'input/03 - N=6.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "26"
        );
    });

    test("N=8", function() {
        let inputFile = new File(__dirname + 'input/04 - N=8.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "150"
        );
    });

    test("N=11", function() {
        let inputFile = new File(__dirname + 'input/05 - N=11.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "877"
        );
    });

    test("N=16", function() {
        let inputFile = new File(__dirname + 'input/06 - N=16.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "22561"
        );
    });

    test("N=19", function() {
        let inputFile = new File(__dirname + 'input/07 - N=19.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "197520"
        );
    });

    test("N=22", function() {
        let inputFile = new File(__dirname + 'input/08 - N=22.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1505423"
        );
    });

    test("N=25", function() {
        let inputFile = new File(__dirname + 'input/09 - N=25.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "15832091"
        );
    });
});
