import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/aStarExercise/aStarExercise.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("A-star exercise", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("3-node graph", function() {
        let inputFile = new File(__dirname + 'input/01 - 3-node graph.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 3-node graph.txt');
    });

    test("Small graph A", function() {
        let inputFile = new File(__dirname + 'input/02 - small graph A.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - small graph A.txt');
    });

    test("Small graph A'", function() {
        let inputFile = new File(__dirname + 'input/03 - small graph A-prime.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - small graph A-prime.txt');
    });

    test("Slightly larger graph", function() {
        let inputFile = new File(__dirname + 'input/04 - slightly larger graph.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - slightly larger graph.txt');
    });

    test("From Arad to Bucharest", function() {
        let inputFile = new File(__dirname + 'input/05 - from Arad to Bucharest.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - from Arad to Bucharest.txt');
    });

    test("Equal f-value", function() {
        let inputFile = new File(__dirname + 'input/06 - equal f-value.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - equal f-value.txt');
    });
});
