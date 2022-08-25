import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/crossword/crossword.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Crossword", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Byte-sized philosophy", function() {
        let inputFile = new File(__dirname + 'input/01 - byte-sized philosophy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - byte-sized philosophy.txt');
    });

    test("Color mix", function() {
        let inputFile = new File(__dirname + 'input/02 - color mix.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - color mix.txt');
    });

    test("Crime scene", function() {
        let inputFile = new File(__dirname + 'input/03 - crime scene.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - crime scene.txt');
    });

    test("Fruit salad", function() {
        let inputFile = new File(__dirname + 'input/04 - fruit salad.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - fruit salad.txt');
    });

    test("French writers 17th century", function() {
        let inputFile = new File(__dirname + 'input/05 - french writers 17th century.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - french writers 17th century.txt');
    });

    test("Marvel series", function() {
        let inputFile = new File(__dirname + 'input/06 - marvel series.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - marvel series.txt');
    });

    test("French coding game menu", function() {
        let inputFile = new File(__dirname + 'input/07 - french coding game menu.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            19
        );
    });

    test("No way !", function() {
        let inputFile = new File(__dirname + 'input/08 - no way !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Crash test", function() {
        let inputFile = new File(__dirname + 'input/09 - crash test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Base case test", function() {
        let inputFile = new File(__dirname + 'input/10 - base case test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - base case test.txt');
    });

    test("Proximity test", function() {
        let inputFile = new File(__dirname + 'input/11 - proximity test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - proximity test.txt');
    });

    test("No match test", function() {
        let inputFile = new File(__dirname + 'input/12 - no match test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Multiple solutions test", function() {
        let inputFile = new File(__dirname + 'input/13 - multiple solutions test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });
});
