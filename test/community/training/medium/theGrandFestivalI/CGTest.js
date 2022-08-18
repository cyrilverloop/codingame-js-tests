import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/theGrandFestivalI/theGrandFestivalI.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The grand festival - I", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1 week", function() {
        let inputFile = new File(__dirname + 'input/01 - 1 week.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            169
        );
    });

    test("2 weeks", function() {
        let inputFile = new File(__dirname + 'input/02 - 2 weeks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            399
        );
    });

    test("No rest", function() {
        let inputFile = new File(__dirname + 'input/03 - no rest.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            292
        );
    });

    test("Fatigued", function() {
        let inputFile = new File(__dirname + 'input/04 - fatigued.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            61
        );
    });

    test("Long tour", function() {
        let inputFile = new File(__dirname + 'input/05 - long tour.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            233
        );
    });

    test("Longer tour", function() {
        let inputFile = new File(__dirname + 'input/06 - longer tour.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1213
        );
    });

    test("70 days!", function() {
        let inputFile = new File(__dirname + 'input/07 - 70 days!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1727
        );
    });

    test("Centurion", function() {
        let inputFile = new File(__dirname + 'input/08 - centurion.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2332
        );
    });

    test("Year Long", function() {
        let inputFile = new File(__dirname + 'input/09 - year long.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            8826
        );
    });
});
