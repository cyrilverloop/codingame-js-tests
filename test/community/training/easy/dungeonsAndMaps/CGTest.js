import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/dungeonsAndMaps/dungeonsAndMaps.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Dungeons and maps", function() {
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
            1
        );
    });

    test("Trap", function() {
        let inputFile = new File(__dirname + 'input/02 - trap.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAP"
        );
    });

    test("2 maps", function() {
        let inputFile = new File(__dirname + 'input/03 - 2 maps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Many maps", function() {
        let inputFile = new File(__dirname + 'input/04 - many maps.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            2
        );
    });

    test("Di", function() {
        let inputFile = new File(__dirname + 'input/05 - di.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAP"
        );
    });

    test("Epic quest", function() {
        let inputFile = new File(__dirname + 'input/06 - epic quest.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            3
        );
    });
});
