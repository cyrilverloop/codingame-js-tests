import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/gravityCentrifuge/gravityCentrifuge.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Gravity centrifuge", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Tumble", function() {
        let inputFile = new File(__dirname + 'input/01 - tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - tumble.txt');
    });

    test("Double tumble", function() {
        let inputFile = new File(__dirname + 'input/02 - double tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - double tumble.txt');
    });

    test("Triple tumble", function() {
        let inputFile = new File(__dirname + 'input/03 - triple tumble.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - triple tumble.txt');
    });

    test("Octal, remember?", function() {
        let inputFile = new File(__dirname + 'input/04 - octal, remember?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - octal, remember?.txt');
    });

    test("Dead beef!", function() {
        let inputFile = new File(__dirname + 'input/05 - dead beef!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - dead beef!.txt');
    });

    test("Wait, what?", function() {
        let inputFile = new File(__dirname + 'input/06 - wait, what?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - wait, what?.txt');
    });

    test("Leonardo would be proud of you!", function() {
        let inputFile = new File(__dirname + 'input/07 - leonardo would be proud of you!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - leonardo would be proud of you!.txt');
    });

    test("Randomize this! 1", function() {
        let inputFile = new File(__dirname + 'input/08 - randomize this! 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - randomize this! 1.txt');
    });

    test("Randomize this! 2", function() {
        let inputFile = new File(__dirname + 'input/09 - randomize this! 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - randomize this! 2.txt');
    });

    test("Randomize this! 3", function() {
        let inputFile = new File(__dirname + 'input/10 - randomize this! 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - randomize this! 3.txt');
    });

    test("Binary overflow", function() {
        let inputFile = new File(__dirname + 'input/11 - binary overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - binary overflow.txt');
    });
});
