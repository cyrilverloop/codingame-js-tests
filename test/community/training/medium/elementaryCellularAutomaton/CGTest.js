import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/elementaryCellularAutomaton/elementaryCellularAutomaton.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Elementary cellular automaton", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Pyramid", function() {
        let inputFile = new File(__dirname + 'input/01 - pyramid.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - pyramid.txt');
    });

    test("Sierpiński triangle", function() {
        let inputFile = new File(__dirname + 'input/02 - sierpiński triangle.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - sierpiński triangle.txt');
    });

    test("Rule 30: conus textile", function() {
        let inputFile = new File(__dirname + 'input/03 - rule 30: conus textile.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - rule 30: conus textile.txt');
    });

    test("Sierpiński triangle, continued", function() {
        let inputFile = new File(__dirname + 'input/04 - sierpiński triangle, continued.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - sierpiński triangle, continued.txt');
    });

    test("Rule 110, different start", function() {
        let inputFile = new File(__dirname + 'input/05 - rule 110, different start.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - rule 110, different start.txt');
    });
});
