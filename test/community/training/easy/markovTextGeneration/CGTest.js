import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/markovTextGeneration/markovTextGeneration.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Markov text generation", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Fish example depth 2", function() {
        let inputFile = new File(__dirname + 'input/01 - fish example depth 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "fish is bad and"
        );
    });

    test("Fish example depth 1", function() {
        let inputFile = new File(__dirname + 'input/02 - fish example depth 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "one fish is good"
        );
    });

    test("Width 2", function() {
        let inputFile = new File(__dirname + 'input/03 - width 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "dorothy was a girl named dorothy stop dorothy had a"
        );
    });

    test("Width 3", function() {
        let inputFile = new File(__dirname + 'input/04 - width 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "stop dorothy had a dog named toto stop dorothy lived"
        );
    });
});
