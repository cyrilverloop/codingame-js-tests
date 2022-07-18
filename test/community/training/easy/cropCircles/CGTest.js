import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/cropCircles/cropCircles.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Crop-circles", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Basic", function() {
        let inputFile = new File(__dirname + 'input/01 - basic.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - basic.txt');
    });

    test("We are not alone", function() {
        let inputFile = new File(__dirname + 'input/02 - we are not alone.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - we are not alone.txt');
    });

    test("Classic with PLANT", function() {
        let inputFile = new File(__dirname + 'input/03 - classic with PLANT.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - classic with PLANT.txt');
    });

    test("Bulls eye", function() {
        let inputFile = new File(__dirname + 'input/04 - bulls eye.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - bulls eye.txt');
    });

    test("PLANTMOW", function() {
        let inputFile = new File(__dirname + 'input/05 - PLANTMOW.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - PLANTMOW.txt');
    });

    test("A person", function() {
        let inputFile = new File(__dirname + 'input/06 - a person.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - a person.txt');
    });

    test("Half moons", function() {
        let inputFile = new File(__dirname + 'input/07 - half moons.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - half moons.txt');
    });

    test("Bonus", function() {
        let inputFile = new File(__dirname + 'input/08 - bonus.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - bonus.txt');
    });

    test("Single", function() {
        let inputFile = new File(__dirname + 'input/09 - single.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - single.txt');
    });

    test("Venn diagram", function() {
        let inputFile = new File(__dirname + 'input/10 - venn diagram.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - venn diagram.txt');
    });

    test("That was excessive", function() {
        let inputFile = new File(__dirname + 'input/11 - that was excessive.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - that was excessive.txt');
    });

    test("Why am i even here ?", function() {
        let inputFile = new File(__dirname + 'input/12 - why am i even here ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - why am i even here ?.txt');
    });
});
