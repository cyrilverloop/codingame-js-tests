import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/oneByOneByOneRubiksCubeMovements/oneByOneByOneRubiksCubeMovements.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("1×1×1 rubik’s cube movements", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("One rotation", function() {
        let inputFile = new File(__dirname + 'input/01 - one rotation.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - one rotation.txt');
    });

    test("Two rotations", function() {
        let inputFile = new File(__dirname + 'input/02 - two rotations.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - two rotations.txt');
    });

    test("Give me five!", function() {
        let inputFile = new File(__dirname + 'input/03 - give me five.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - give me five.txt');
    });

    test("Identity", function() {
        let inputFile = new File(__dirname + 'input/04 - identity.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - identity.txt');
    });

    test("A long route", function() {
        let inputFile = new File(__dirname + 'input/05 - a long route.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - a long route.txt');
    });

    test("Stuttering", function() {
        let inputFile = new File(__dirname + 'input/06 - stuttering.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - stuttering.txt');
    });
});
