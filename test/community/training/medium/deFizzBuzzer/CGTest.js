import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/deFizzBuzzer/deFizzBuzzer.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("De-FizzBuzzer", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Plain number", function() {
        let inputFile = new File(__dirname + 'input/01 - plain number.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - plain number.txt');
    });

    test("Two simple ones", function() {
        let inputFile = new File(__dirname + 'input/02 - two simple ones.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - two simple ones.txt');
    });

    test("More words", function() {
        let inputFile = new File(__dirname + 'input/03 - more words.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - more words.txt');
    });

    test("Error cases", function() {
        let inputFile = new File(__dirname + 'input/04 - error cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - error cases.txt');
    });

    test("Lots of cases", function() {
        let inputFile = new File(__dirname + 'input/05 - lots of cases.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - lots of cases.txt');
    });
});
