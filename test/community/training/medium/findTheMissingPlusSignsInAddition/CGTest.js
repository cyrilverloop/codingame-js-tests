import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/findTheMissingPlusSignsInAddition/findTheMissingPlusSignsInAddition.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Find the missing plus signs in addition", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example with unique solution", function() {
        let inputFile = new File(__dirname + 'input/01 - example with unique solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "44+133=177"
        );
    });

    test("No solution there", function() {
        let inputFile = new File(__dirname + 'input/02 - no solution there.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "No solution"
        );
    });

    test("More than one solution", function() {
        let inputFile = new File(__dirname + 'input/03 - more than one solution.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - more than one solution.txt');
    });

    test("Ten terms", function() {
        let inputFile = new File(__dirname + 'input/04 - ten terms.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "48+113+19+189+25+37+72+81+212+17=813"
        );
    });

    test("59 digits in O", function() {
        let inputFile = new File(__dirname + 'input/05 - 59 digits in O.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "964510623+54170+987541234+7772451+246+94514215+159874623+432158796=2646426358"
        );
    });
});
