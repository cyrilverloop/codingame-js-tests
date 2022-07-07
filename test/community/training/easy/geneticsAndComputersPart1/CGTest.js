import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/flipTheSign/flipTheSign.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Genetics and computers - part 1", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Round yellow ✖ round yellow", function() {
        let inputFile = new File(__dirname + 'input/01 - round yellow round yellow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1:0"
        );
    });

    test("Round yellow ✖ round green", function() {
        let inputFile = new File(__dirname + 'input/02 - round yellow round green.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1:0"
        );
    });

    test("Wrinkled yellow ✖ round green", function() {
        let inputFile = new File(__dirname + 'input/03 - wrinkled yellow round green.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1:1:1:1"
        );
    });

    test("Tall yellow ✖ tall green", function() {
        let inputFile = new File(__dirname + 'input/04 - tall yellow tall green.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1:2:1:1:2:1"
        );
    });
});
