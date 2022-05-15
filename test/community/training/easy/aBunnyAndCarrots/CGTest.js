import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/aBunnyAndCarrots/aBunnyAndCarrots.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("A bunny and carrots", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Small garden", function() {
        let inputFile = new File(__dirname + 'input/01 - small garden.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - small garden.txt');
    });

    test("A bigger garden", function() {
        let inputFile = new File(__dirname + 'input/02 - a bigger garden.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - a bigger garden.txt');
    });

    test("Wide garden", function() {
        let inputFile = new File(__dirname + 'input/03 - wide garden.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - wide garden.txt');
    });

    test("So many carrots!!", function() {
        let inputFile = new File(__dirname + 'input/04 - so many carrots!!.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - so many carrots!!.txt');
    });
});
