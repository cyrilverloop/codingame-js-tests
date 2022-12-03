import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/duckHunt/duckHunt.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Duck hunt", function() {
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

    test("Foursome", function() {
        let inputFile = new File(__dirname + 'input/02 - foursome.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - foursome.txt');
    });

    test("The race", function() {
        let inputFile = new File(__dirname + 'input/03 - the race.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - the race.txt');
    });

    test("Can't shoot all", function() {
        let inputFile = new File(__dirname + 'input/04 - can\'t shoot all.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - can\'t shoot all.txt');
    });
});
