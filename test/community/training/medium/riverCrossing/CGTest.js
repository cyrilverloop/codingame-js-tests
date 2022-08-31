import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/riverCrossing/riverCrossing.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("River crossing", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("The question is the solution", function() {
        let inputFile = new File(__dirname + 'input/01 - the question is the solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - the question is the solution.txt');
    });

    test("The start is the solution", function() {
        let inputFile = new File(__dirname + 'input/02 - the start is the solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "L L L R"
        );
    });

    test("From one side to the other", function() {
        let inputFile = new File(__dirname + 'input/03 - from one side to the other.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - from one side to the other.txt');
    });

    test("Mix it up", function() {
        let inputFile = new File(__dirname + 'input/04 - mix it up.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - mix it up.txt');
    });

    test("Rescue one", function() {
        let inputFile = new File(__dirname + 'input/05 - rescue one.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - rescue one.txt');
    });

    test("Sorted", function() {
        let inputFile = new File(__dirname + 'input/06 - sorted.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - sorted.txt');
    });
});
