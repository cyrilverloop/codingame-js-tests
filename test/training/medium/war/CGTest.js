import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/medium/war/war.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('War', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('3 cards', function() {
        let inputFile = new File(__dirname + 'input/01 - 3 cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '1 3'
        );
    });

    test('26 cards', function() {
        let inputFile = new File(__dirname + 'input/02 - 26 cards.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '2 26'
        );
    });

    test('26 cards, medium length', function() {
        let inputFile = new File(__dirname + 'input/03 - 26 cards medium length.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '2 56'
        );
    });

    test('Battle', function() {
        let inputFile = new File(__dirname + 'input/04 - battle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '2 1'
        );
    });

    test('One game, one battle', function() {
        let inputFile = new File(__dirname + 'input/05 - one game one battle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '1 52'
        );
    });

    test('2 chained battles', function() {
        let inputFile = new File(__dirname + 'input/06 - 2 chained battles.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '2 1'
        );
    });

    test('Long game', function() {
        let inputFile = new File(__dirname + 'input/07 - long game.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            '2 1262'
        );
    });

    test('PAT', function() {
        let inputFile = new File(__dirname + 'input/08 - PAT.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'PAT'
        );
    });

    test('Another PAT', function() {
        let inputFile = new File(__dirname + 'input/09 - another PAT.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'PAT'
        );
    });
});
