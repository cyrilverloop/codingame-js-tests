import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/addEmUp/addEmUp.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Add'em up", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            9
        );
    });

    test("Easy", function() {
        let inputFile = new File(__dirname + 'input/02 - easy.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            24
        );
    });

    test("In a row", function() {
        let inputFile = new File(__dirname + 'input/03 - in a row.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            261
        );
    });

    test("XX", function() {
        let inputFile = new File(__dirname + 'input/04 - XX.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4502962
        );
    });

    test("CC", function() {
        let inputFile = new File(__dirname + 'input/05 - CC.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            7718767
        );
    });

    test("D", function() {
        let inputFile = new File(__dirname + 'input/06 - D.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            224281401
        );
    });

    test("M", function() {
        let inputFile = new File(__dirname + 'input/07 - M.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            504259
        );
    });
});
