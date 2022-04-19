import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/theTravellingSalesmanProblem/theTravellingSalesmanProblem.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The travelling salesman problem", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("5 Cities", function() {
        let inputFile = new File(__dirname + 'input/01 - 5 cities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            71
        );
    });

    test("12 Cities", function() {
        let inputFile = new File(__dirname + 'input/02 - 12 cities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            403
        );
    });

    test("14 Cities", function() {
        let inputFile = new File(__dirname + 'input/03 - 14 cities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            327
        );
    });

    test("10 Cities", function() {
        let inputFile = new File(__dirname + 'input/04 - 10 cities.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            252
        );
    });
});
