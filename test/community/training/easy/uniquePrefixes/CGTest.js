import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/uniquePrefixes/uniquePrefixes.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Unique prefixes", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1-length prefixes", function() {
        let inputFile = new File(__dirname + 'input/01 - 1-length prefixes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 1-length prefixes.txt');
    });

    test("4-length prefixes", function() {
        let inputFile = new File(__dirname + 'input/02 - 4-length prefixes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 4-length prefixes.txt');
    });

    test("Weekly challenge", function() {
        let inputFile = new File(__dirname + 'input/03 - weekly challenge.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - weekly challenge.txt');
    });

    test("Ascending prefixes", function() {
        let inputFile = new File(__dirname + 'input/04 - ascending prefixes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - ascending prefixes.txt');
    });

    test("Descending prefixes", function() {
        let inputFile = new File(__dirname + 'input/05 - descending prefixes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - descending prefixes.txt');
    });

    test("Pierre, Paul, Jacques & co.", function() {
        let inputFile = new File(__dirname + 'input/06 - Pierre, Paul, Jacques & co.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - Pierre, Paul, Jacques & co.txt');
    });
});
