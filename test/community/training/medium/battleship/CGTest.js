import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/battleship/battleship.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Battleship", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Ships too close", function() {
        let inputFile = new File(__dirname + 'input/01 - ships too close.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Wrong number of ships", function() {
        let inputFile = new File(__dirname + 'input/02 - wrong number of ships.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Wrong size of ships", function() {
        let inputFile = new File(__dirname + 'input/03 - wrong size of ships.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "INVALID"
        );
    });

    test("Missed!", function() {
        let inputFile = new File(__dirname + 'input/04 - missed!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "MISSED"
        );
    });

    test("Touché!", function() {
        let inputFile = new File(__dirname + 'input/05 - touché!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TOUCHE"
        );
    });

    test("Touché coulé!", function() {
        let inputFile = new File(__dirname + 'input/06 - touché coulé!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TOUCHE COULE 4"
        );
    });

    test("Game lost", function() {
        let inputFile = new File(__dirname + 'input/07 - game lost.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TOUCHE COULE 2 THEN LOSE"
        );
    });
});
