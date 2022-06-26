import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/detectiveGeek/detectiveGeek.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Detective geek", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Test 1", function() {
        let inputFile = new File(__dirname + 'input/01 - test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - test 1.txt');
    });

    test("Algeria", function() {
        let inputFile = new File(__dirname + 'input/02 - algeria.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - algeria.txt');
    });

    test("Egypt", function() {
        let inputFile = new File(__dirname + 'input/03 - egypt.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - egypt.txt');
    });

    test("India", function() {
        let inputFile = new File(__dirname + 'input/04 - india.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - india.txt');
    });

    test("Japan", function() {
        let inputFile = new File(__dirname + 'input/05 - japan.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - japan.txt');
    });

    test("Italy", function() {
        let inputFile = new File(__dirname + 'input/06 - italy.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - italy.txt');
    });

    test("South korea", function() {
        let inputFile = new File(__dirname + 'input/07 - south korea.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - south korea.txt');
    });
});
