import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/nicholasBreakspeareAndHughOfEvesham/nicholasBreakspeareAndHughOfEvesham.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Nicholas Breakspeare and Hugh of Evesham", function() {
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
            "five hundred twenty-five thousand six hundred"
        );
    });

    test("The basics", function() {
        let inputFile = new File(__dirname + 'input/02 - the basics.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - the basics.txt');
    });

    test("The teens", function() {
        let inputFile = new File(__dirname + 'input/03 - the teens.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - the teens.txt');
    });

    test("Some powers of 10", function() {
        let inputFile = new File(__dirname + 'input/04 - some powers of 10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - some powers of 10.txt');
    });

    test("Some powers of 2", function() {
        let inputFile = new File(__dirname + 'input/05 - some powers of 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - some powers of 2.txt');
    });

    test("Extrema", function() {
        let inputFile = new File(__dirname + 'input/06 - extrema.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - extrema.txt');
    });

    test("Utter randomness", function() {
        let inputFile = new File(__dirname + 'input/07 - utter randomness.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - utter randomness.txt');
    });
});
