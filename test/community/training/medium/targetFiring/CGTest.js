import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/targetFiring/targetFiring.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Target firing", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Strongest first", function() {
        let inputFile = new File(__dirname + 'input/01 - strongest first.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3200
        );
    });

    test("Tankiest last", function() {
        let inputFile = new File(__dirname + 'input/02 - tankiest last.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1700
        );
    });

    test("Strongest AND Tankiest?", function() {
        let inputFile = new File(__dirname + 'input/03 - strongest and tankiest?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2880
        );
    });

    test("Boss and mooks", function() {
        let inputFile = new File(__dirname + 'input/04 - boss and mooks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3430
        );
    });

    test("The swarm", function() {
        let inputFile = new File(__dirname + 'input/05 - the swarm.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            212
        );
    });

    test("Not the shiny paint!", function() {
        let inputFile = new File(__dirname + 'input/06 - not the shiny paint!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "FLEE"
        );
    });

    test("Close call", function() {
        let inputFile = new File(__dirname + 'input/07 - close call.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Tickle wars", function() {
        let inputFile = new File(__dirname + 'input/08 - tickle wars.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4950
        );
    });
});
