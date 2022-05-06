import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/noMorePythonsPlease/noMorePythonsPlease.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("No more pythons, please!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Easy (one snake)", function() {
        let inputFile = new File(__dirname + 'input/01 - easy (one snake).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy (one snake).txt');
    });

    test("Medium 1 (3 snakes, one pattern)", function() {
        let inputFile = new File(__dirname + 'input/02 - medium 1 (3 snakes, one pattern).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - medium 1 (3 snakes, one pattern).txt');
    });

    test("Medium 2 (more than 1 large snake)", function() {
        let inputFile = new File(__dirname + 'input/03 - medium 2 (more than 1 large snake).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - medium 2 (more than 1 large snake).txt');
    });

    test("Hard (one VERY large snake)", function() {
        let inputFile = new File(__dirname + 'input/04 - hard (one VERY large snake).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - hard (one VERY large snake).txt');
    });

    test("Snake madness (for geeks)", function() {
        let inputFile = new File(__dirname + 'input/05 - snake madness (for geeks).txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - snake madness (for geeks).txt');
    });
});
