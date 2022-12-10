import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/CGSMinifier/CGSMinifier.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("CGS minifier", function() {
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
            "($a$='hello';print$a$;)"
        );
    });

    test("1", function() {
        let inputFile = new File(__dirname + 'input/02 - 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "('hello')"
        );
    });

    test("2", function() {
        let inputFile = new File(__dirname + 'input/03 - 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "print'SomeSpaces  and    tabs';"
        );
    });

    test("3", function() {
        let inputFile = new File(__dirname + 'input/04 - 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "$a$;($a$='I like trains';)print$a$;"
        );
    });

    test("4", function() {
        let inputFile = new File(__dirname + 'input/05 - 4.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 4.txt');
    });
});
