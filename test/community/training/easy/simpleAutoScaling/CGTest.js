import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/simpleAutoScaling/simpleAutoScaling.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Simple auto-scaling", function() {
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

    test("Slow start", function() {
        let inputFile = new File(__dirname + 'input/02 - slow start.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - slow start.txt');
    });

    test("Medium", function() {
        let inputFile = new File(__dirname + 'input/03 - medium.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - medium.txt');
    });

    test("Lot of services", function() {
        let inputFile = new File(__dirname + 'input/04 - lot of services.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - lot of services.txt');
    });

    test("One service", function() {
        let inputFile = new File(__dirname + 'input/05 - one service.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - one service.txt');
    });
});
