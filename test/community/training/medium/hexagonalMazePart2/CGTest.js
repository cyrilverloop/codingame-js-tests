import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/hexagonalMazePart2/hexagonalMazePart2.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hexagonal maze - part2", function() {
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
            "R R DR R"
        );
    });

    test("Need the key", function() {
        let inputFile = new File(__dirname + 'input/02 - need the key.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "R DR DR DL DL DL UR UR R DR DR DR DR R R"
        );
    });

    test("Choose shortest", function() {
        let inputFile = new File(__dirname + 'input/03 - choose shortest.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "R DR DR DL DL DL UR UR R DR DR DR DR R R"
        );
    });

    test("Shortest with sliding", function() {
        let inputFile = new File(__dirname + 'input/04 - shortest with sliding.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DL DR R UR UL"
        );
    });

    test("Sliding junction", function() {
        let inputFile = new File(__dirname + 'input/05 - sliding junction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "R DR DR DR R R UR UL L L L DL DL DR R R"
        );
    });

    test("Sliding until wall", function() {
        let inputFile = new File(__dirname + 'input/06 - sliding until wall.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DR DR R UR UL L L L DL DR DR R R"
        );
    });

    test("Sliding or not sliding, that is the junction", function() {
        let inputFile = new File(__dirname + 'input/07 - sliding or not sliding, that is the junction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DR R L L"
        );
    });

    test("Crazy doors", function() {
        let inputFile = new File(__dirname + 'input/08 - crazy doors.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DR R L L L"
        );
    });

    test("Visited or not ?", function() {
        let inputFile = new File(__dirname + 'input/09 - visited or not ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DR R UR UL L UR"
        );
    });

    test("Skating rink", function() {
        let inputFile = new File(__dirname + 'input/10 - skating rink.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "DR L UL R UR UL DL"
        );
    });

    test("Skating rink with keys", function() {
        let inputFile = new File(__dirname + 'input/11 - skating rink with keys.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "UL R L DR UR UL UL UR DR L DL DL UR R DR DL"
        );
    });
});
