import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/advancedTree/advancedTree.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Advanced tree", function() {
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

    test("In a directory test", function() {
        let inputFile = new File(__dirname + 'input/02 - in a directory test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - in a directory test.txt');
    });

    test("Also in a directory test", function() {
        let inputFile = new File(__dirname + 'input/03 - also in a directory test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - also in a directory test.txt');
    });

    test("Gap end of tree handling test", function() {
        let inputFile = new File(__dirname + 'input/04 - gap end of tree handling test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - gap end of tree handling test.txt');
    });

    test("Hidden directories w/o -a test", function() {
        let inputFile = new File(__dirname + 'input/05 - hidden directories wo -a test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - hidden directories wo -a test.txt');
    });

    test("Dots in filenames test", function() {
        let inputFile = new File(__dirname + 'input/06 - dots in filenames test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - dots in filenames test.txt');
    });

    test("Limit flag test", function() {
        let inputFile = new File(__dirname + 'input/07 - limit flag test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - limit flag test.txt');
    });

    test("Hidden files w/o -a test", function() {
        let inputFile = new File(__dirname + 'input/08 - hidden files wo -a test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - hidden files wo -a test.txt');
    });

    test("Hidden files with -a test", function() {
        let inputFile = new File(__dirname + 'input/09 - hidden files with -a test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - hidden files with -a test.txt');
    });

    test("Directory flag test", function() {
        let inputFile = new File(__dirname + 'input/10 - directory flag test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - directory flag test.txt');
    });

    test("Multiple flags test", function() {
        let inputFile = new File(__dirname + 'input/11 - multiple flags test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/11 - multiple flags test.txt');
    });

    test("All flags test", function() {
        let inputFile = new File(__dirname + 'input/12 - all flags test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/12 - all flags test.txt');
    });

    test("Error handling 1 test", function() {
        let inputFile = new File(__dirname + 'input/13 - error handling 1 test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/13 - error handling 1 test.txt');
    });

    test("Error handling 2 test", function() {
        let inputFile = new File(__dirname + 'input/14 - error handling 2 test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/14 - error handling 2 test.txt');
    });

    test("Error handling 3 test", function() {
        let inputFile = new File(__dirname + 'input/15 - error handling 3 test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/15 - error handling 3 test.txt');
    });

    test("Wrong flag test", function() {
        let inputFile = new File(__dirname + 'input/16 - wrong flag test.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/16 - wrong flag test.txt');
    });

    test("Big test 1", function() {
        let inputFile = new File(__dirname + 'input/17 - big test 1.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/17 - big test 1.txt');
    });

    test("Not starting in .", function() {
        let inputFile = new File(__dirname + 'input/18 - not starting in.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/18 - not starting in.txt');
    });
});
