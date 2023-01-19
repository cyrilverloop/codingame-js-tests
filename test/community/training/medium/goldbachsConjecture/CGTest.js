import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/goldbachsConjecture/goldbachsConjecture.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Goldbach’s conjecture", function() {
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
            4
        );
    });

    test("Be careful", function() {
        let inputFile = new File(__dirname + 'input/02 - be careful.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - be careful.txt');
    });

    test("No more alone", function() {
        let inputFile = new File(__dirname + 'input/03 - no more alone.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - no more alone.txt');
    });

    test("Some hulks", function() {
        let inputFile = new File(__dirname + 'input/04 - some hulks.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - some hulks.txt');
    });

    test("Commandments", function() {
        let inputFile = new File(__dirname + 'input/05 - commandments.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - commandments.txt');
    });

    test("Dalmatians", function() {
        let inputFile = new File(__dirname + 'input/06 - dalmatians.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - dalmatians.txt');
    });

    test("Tacite", function() {
        let inputFile = new File(__dirname + 'input/07 - tacite.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - tacite.txt');
    });
});
