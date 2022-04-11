import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/orderOfSuccession/orderOfSuccession.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("orDer oF succeSsion", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("A simple tree", function() {
        let inputFile = new File(__dirname + 'input/01 - a simple tree.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - a simple tree.txt');
    });

    test("Full Elizabeth tree", function() {
        let inputFile = new File(__dirname + 'input/02 - full Elizabeth tree.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - full Elizabeth tree.txt');
    });

    test("Dead people", function() {
        let inputFile = new File(__dirname + 'input/03 - dead people.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - dead people.txt');
    });

    test("Non anglican people", function() {
        let inputFile = new File(__dirname + 'input/04 - non anglican people.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - non anglican people.txt');
    });
});
