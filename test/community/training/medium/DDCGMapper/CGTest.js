import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/DDCGMapper/DDCGMapper.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("DDCG mapper", function() {
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

        assertOutputAnswer(__dirname + 'output/01 - example.txt');
    });

    test("1", function() {
        let inputFile = new File(__dirname + 'input/02 - 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 1.txt');
    });

    test("2", function() {
        let inputFile = new File(__dirname + 'input/03 - 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 2.txt');
    });

    test("3", function() {
        let inputFile = new File(__dirname + 'input/04 - 3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - 3.txt');
    });
});
