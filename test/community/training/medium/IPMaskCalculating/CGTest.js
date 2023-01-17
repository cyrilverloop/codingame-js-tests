import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/IPMaskCalculating/IPMaskCalculating.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("IP mask calculating", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Your ip at home", function() {
        let inputFile = new File(__dirname + 'input/01 - your ip at home.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - your ip at home.txt');
    });

    test("Your ip at school", function() {
        let inputFile = new File(__dirname + 'input/02 - your ip at school.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - your ip at school.txt');
    });

    test("Not a real network mask", function() {
        let inputFile = new File(__dirname + 'input/03 - not a real network mask.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - not a real network mask.txt');
    });

    test("Little mask (not a real network mask too)", function() {
        let inputFile = new File(__dirname + 'input/04 - little mask (not a real network mask too).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - little mask (not a real network mask too).txt');
    });

    test("255.255.240.0", function() {
        let inputFile = new File(__dirname + 'input/05 - 255.255.240.0.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - 255.255.240.0.txt');
    });

    test("254.0.0.0", function() {
        let inputFile = new File(__dirname + 'input/06 - 254.0.0.0.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - 254.0.0.0.txt');
    });

    test("A strange IP", function() {
        let inputFile = new File(__dirname + 'input/07 - a strange IP.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - a strange IP.txt');
    });

    test("42", function() {
        let inputFile = new File(__dirname + 'input/08 - 42.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - 42.txt');
    });
});
