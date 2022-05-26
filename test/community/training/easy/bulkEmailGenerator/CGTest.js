import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/bulkEmailGenerator/bulkEmailGenerator.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bulk email generator", function() {
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

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("CG email", function() {
        let inputFile = new File(__dirname + 'input/02 - CG email.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - CG email.txt');
    });

    test("Edge cases", function() {
        let inputFile = new File(__dirname + 'input/03 - edge cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - edge cases.txt');
    });

    test("Comment spam", function() {
        let inputFile = new File(__dirname + 'input/04 - comment spam.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - comment spam.txt');
    });

    test("More edge cases", function() {
        let inputFile = new File(__dirname + 'input/05 - more edge cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - more edge cases.txt');
    });
});
