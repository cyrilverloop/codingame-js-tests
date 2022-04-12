import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/happyNumbers/happyNumbers.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Happy numbers", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple.txt');
    });

    test("Moderate", function() {
        let inputFile = new File(__dirname + 'input/02 - moderate.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - moderate.txt');
    });

    test("Serious", function() {
        let inputFile = new File(__dirname + 'input/03 - serious.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - serious.txt');
    });

    test("Watch out the limit", function() {
        let inputFile = new File(__dirname + 'input/04 - watch out the limit.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - watch out the limit.txt');
    });

    test("Cocktail", function() {
        let inputFile = new File(__dirname + 'input/05 - cocktail.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - cocktail.txt');
    });
});
