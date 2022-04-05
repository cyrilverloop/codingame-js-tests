import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/bankRobbers/bankRobbers.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Bank robbers", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One robber, one easy vault", function() {
        let inputFile = new File(__dirname + 'input/01 - one robber, one easy vault.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            250
        );
    });

    test("More robbers, more vaults", function() {
        let inputFile = new File(__dirname + 'input/02 - more robbers, more vaults.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5000000
        );
    });

    test("Fewer robbers than vaults", function() {
        let inputFile = new File(__dirname + 'input/03 - fewer robbers than vaults.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1125
        );
    });

    test("Big heist", function() {
        let inputFile = new File(__dirname + 'input/04 - big heist.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6515625
        );
    });
});
