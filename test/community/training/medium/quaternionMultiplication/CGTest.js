import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/quaternionMultiplication/quaternionMultiplication.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Quaternion multiplication", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small", function() {
        let inputFile = new File(__dirname + 'input/01 - small.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "i-j"
        );
    });

    test("Medium", function() {
        let inputFile = new File(__dirname + 'input/02 - medium.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-9i+11j+k-181"
        );
    });

    test("Large", function() {
        let inputFile = new File(__dirname + 'input/03 - large.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "-520i-38920j+6800k+7920"
        );
    });

    test("Giant", function() {
        let inputFile = new File(__dirname + 'input/04 - giant.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "11415288i-8751432j-5206896k+9766704"
        );
    });
});
