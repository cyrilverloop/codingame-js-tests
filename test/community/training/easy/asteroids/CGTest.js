import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/asteroids/asteroids.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Asteroids", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Horizontal motion", function() {
        let inputFile = new File(__dirname + 'input/01 - horizontal motion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - horizontal motion.txt');
    });

    test("Vertical motion", function() {
        let inputFile = new File(__dirname + 'input/02 - vertical motion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - vertical motion.txt');
    });

    test("Combined motion", function() {
        let inputFile = new File(__dirname + 'input/03 - combined motion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - combined motion.txt');
    });

    test("Negative motion", function() {
        let inputFile = new File(__dirname + 'input/04 - negative motion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - negative motion.txt');
    });

    test("Greater delta", function() {
        let inputFile = new File(__dirname + 'input/05 - greater delta.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - greater delta.txt');
    });

    test("Multiple asteroids", function() {
        let inputFile = new File(__dirname + 'input/06 - multiple asteroids.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - multiple asteroids.txt');
    });

    test("Depth", function() {
        let inputFile = new File(__dirname + 'input/07 - depth.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - depth.txt');
    });

    test("No motion", function() {
        let inputFile = new File(__dirname + 'input/08 - no motion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - no motion.txt');
    });

    test("Out of bounds", function() {
        let inputFile = new File(__dirname + 'input/09 - out of bounds.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - out of bounds.txt');
    });

    test("Armageddon", function() {
        let inputFile = new File(__dirname + 'input/10 - armageddon.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - armageddon.txt');
    });
});
