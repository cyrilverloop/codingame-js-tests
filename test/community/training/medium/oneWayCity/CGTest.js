import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/oneWayCity/oneWayCity.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("OneWay city", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small village", function() {
        let inputFile = new File(__dirname + 'input/01 - small village.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            20
        );
    });

    test("One way", function() {
        let inputFile = new File(__dirname + 'input/02 - one way.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1
        );
    });

    test("Small city", function() {
        let inputFile = new File(__dirname + 'input/03 - small city.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            497420
        );
    });

    test("20th century", function() {
        let inputFile = new File(__dirname + 'input/04 - 20th century.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "450883717216034179"
        );
    });

    test("Conurbation", function() {
        let inputFile = new File(__dirname + 'input/05 - conurbation.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1400749509083708812152608657850239525991600"
        );
    });

    test("Megalopolis", function() {
        let inputFile = new File(__dirname + 'input/06 - megalopolis.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - megalopolis.txt');
    });
});
