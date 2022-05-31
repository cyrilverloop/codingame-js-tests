import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/cosmicLove/cosmicLove.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Cosmic love", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One haven", function() {
        let inputFile = new File(__dirname + 'input/01 - one haven.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "G7_24a"
        );
    });

    test("Happy Alice", function() {
        let inputFile = new File(__dirname + 'input/02 - happy Alice.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Millers_Planet"
        );
    });

    test("Hungry Alice", function() {
        let inputFile = new File(__dirname + 'input/03 - hungry Alice.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CodinPlanet"
        );
    });

    test("So many options", function() {
        let inputFile = new File(__dirname + 'input/04 - so many options.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Gh2"
        );
    });

    test("The event horizon", function() {
        let inputFile = new File(__dirname + 'input/05 - the event horizon.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Supergiant_H59"
        );
    });
});
