import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/depotOrganization/depotOrganization.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Depot organization", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example case", function() {
        let inputFile = new File(__dirname + 'input/01 - example case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "4K 1X 2R 6C 5G 0J 3C"
        );
    });

    test("Easy ring", function() {
        let inputFile = new File(__dirname + 'input/02 - easy ring.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "3C 2U 4X 0H 1Y 5F 6Q"
        );
    });

    test("Assorted ring", function() {
        let inputFile = new File(__dirname + 'input/03 - assorted ring.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "5M 2P 6R 3B 0E 4H 1J"
        );
    });

    test("Random case", function() {
        let inputFile = new File(__dirname + 'input/04 - random case.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0V 1M 6K 2D 3F 5G 4B"
        );
    });

    test("Random case, very hard", function() {
        let inputFile = new File(__dirname + 'input/05 - random case, very hard.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0A 1C 2V 3C 4E 5D 6O"
        );
    });
});
