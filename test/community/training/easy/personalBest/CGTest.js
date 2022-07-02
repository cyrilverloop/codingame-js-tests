import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/personalBest/personalBest.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Personal best", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Single gymnast, single record", function() {
        let inputFile = new File(__dirname + 'input/01 - single gymnast, single record.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Single gymnast, multiple records", function() {
        let inputFile = new File(__dirname + 'input/02 - single gymnast, multiple records.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8.3
        );
    });

    test("Single gymnast, multiple names", function() {
        let inputFile = new File(__dirname + 'input/03 - single gymnast, multiple names.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8.57
        );
    });

    test("Multiple gymnasts, single category, multiple competitions", function() {
        let inputFile = new File(__dirname + 'input/04 - multiple gymnasts, single category, multiple competitions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - multiple gymnasts, single category, multiple competitions.txt');
    });

    test("Multiple gymnasts, multiple categories, multiple competitions", function() {
        let inputFile = new File(__dirname + 'input/05 - multiple gymnasts, multiple categories, multiple competitions.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - multiple gymnasts, multiple categories, multiple competitions.txt');
    });
});
