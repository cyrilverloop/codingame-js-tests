import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/surveyPrediction/surveyPrediction.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Survey prediction", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2 answers and 1 missing", function() {
        let inputFile = new File(__dirname + 'input/01 - 2 answers and 1 missing.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "hip-hop"
        );
    });

    test("5 answers and 3 missing", function() {
        let inputFile = new File(__dirname + 'input/02 - 5 answers and 3 missing.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 5 answers and 3 missing.txt');
    });

    test("Even answers and missing", function() {
        let inputFile = new File(__dirname + 'input/03 - even answers and missing.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - even answers and missing.txt');
    });

    test("6 answers, 6 missing", function() {
        let inputFile = new File(__dirname + 'input/04 - 6 answers, 6 missing.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 6 answers, 6 missing.txt');
    });

    test("Everything none", function() {
        let inputFile = new File(__dirname + 'input/05 - everything none.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - everything none.txt');
    });
});
