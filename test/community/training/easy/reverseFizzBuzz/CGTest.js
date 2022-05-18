import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/reverseFizzBuzz/reverseFizzBuzz.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Reverse FizzBuzz", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Sample", function() {
        let inputFile = new File(__dirname + 'input/01 - sample.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3 5"
        );
    });

    test("Everything is a Fizz", function() {
        let inputFile = new File(__dirname + 'input/02 - everything is a Fizz.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 5"
        );
    });

    test("Fizz is Buzz", function() {
        let inputFile = new File(__dirname + 'input/03 - Fizz is Buzz.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 5"
        );
    });

    test("One Fizz to rule them all", function() {
        let inputFile = new File(__dirname + 'input/04 - one Fizz to rule them all.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "30 9"
        );
    });

    test("Tricky", function() {
        let inputFile = new File(__dirname + 'input/05 - tricky.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5 51"
        );
    });
});
