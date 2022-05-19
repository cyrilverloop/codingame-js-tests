import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/logicGates/logicGates.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Logic gates", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("2 input signals, 3 gates", function() {
        let inputFile = new File(__dirname + 'input/01 - 2 input signals, 3 gates.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 2 input signals, 3 gates.txt');
    });

    test("Inverter (NAND)", function() {
        let inputFile = new File(__dirname + 'input/02 - inverter (NAND).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "B --___---___---___---___---"
        );
    });

    test("AND", function() {
        let inputFile = new File(__dirname + 'input/03 - AND.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - AND.txt');
    });

    test("OR", function() {
        let inputFile = new File(__dirname + 'input/04 - OR.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - OR.txt');
    });

    test("XOR", function() {
        let inputFile = new File(__dirname + 'input/05 - XOR.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - XOR.txt');
    });

    test("Buffer (OR)", function() {
        let inputFile = new File(__dirname + 'input/06 - buffer (OR).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "OUT -_--__---___----____-_--__---___"
        );
    });

    test("NAND", function() {
        let inputFile = new File(__dirname + 'input/07 - NAND.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - NAND.txt');
    });

    test("NOR", function() {
        let inputFile = new File(__dirname + 'input/08 - NOR.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - NOR.txt');
    });

    test("NXOR", function() {
        let inputFile = new File(__dirname + 'input/09 - NXOR.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - NXOR.txt');
    });

    test("All gates", function() {
        let inputFile = new File(__dirname + 'input/10 - all gates.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - all gates.txt');
    });
});
