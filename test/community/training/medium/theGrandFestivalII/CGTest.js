import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/theGrandFestivalII/theGrandFestivalII.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The grand festival - II", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/01 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1>2>3>5>6>7"
        );
    });

    test("2 weeks", function() {
        let inputFile = new File(__dirname + 'input/02 - 2 weeks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1>2>3>4>6>8>9>10>11>13>14"
        );
    });

    test("No rest", function() {
        let inputFile = new File(__dirname + 'input/03 - no rest.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1>2>3>4>5>6>7>8>9>10"
        );
    });

    test("Fatigued", function() {
        let inputFile = new File(__dirname + 'input/04 - fatigued.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1>2>4>5>7"
        );
    });

    test("1 year", function() {
        let inputFile = new File(__dirname + 'input/05 - 1 year.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 1 year.txt');
    });
});
