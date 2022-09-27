import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theLostChildEpisode1/theLostChildEpisode1.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The lost child.Episode-1", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Lost in playground", function() {
        let inputFile = new File(__dirname + 'input/01 - lost in playground.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "50km"
        );
    });

    test("Lost in paris", function() {
        let inputFile = new File(__dirname + 'input/02 - lost in paris.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "120km"
        );
    });

    test("Lost in jungle", function() {
        let inputFile = new File(__dirname + 'input/03 - lost in jungle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "160km"
        );
    });

    test("Lost in maze runner", function() {
        let inputFile = new File(__dirname + 'input/04 - lost in maze runner.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "200km"
        );
    });

    test("Lost in space", function() {
        let inputFile = new File(__dirname + 'input/05 - lost in space.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "170km"
        );
    });
});
