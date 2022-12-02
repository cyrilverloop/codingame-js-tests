import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/bingo/bingo.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bingo!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1 player", function() {
        let inputFile = new File(__dirname + 'input/01 - 1 player.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 1 player.txt');
    });

    test("5 players", function() {
        let inputFile = new File(__dirname + 'input/02 - 5 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 5 players.txt');
    });

    test("25 players", function() {
        let inputFile = new File(__dirname + 'input/03 - 25 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 25 players.txt');
    });

    test("100 players", function() {
        let inputFile = new File(__dirname + 'input/04 - 100 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 100 players.txt');
    });
});
