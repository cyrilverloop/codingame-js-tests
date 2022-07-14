import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/helloWorld/helloWorld.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hello, world!", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Dualism", function() {
        let inputFile = new File(__dirname + 'input/01 - dualism.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - dualism.txt');
    });

    test("Border travels in TriTheatreLand", function() {
        let inputFile = new File(__dirname + 'input/02 - border travels in TriTheatreLand.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - border travels in TriTheatreLand.txt');
    });

    test("CodinGame world", function() {
        let inputFile = new File(__dirname + 'input/03 - CodinGame world.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - CodinGame world.txt');
    });

    test("Lonely planet", function() {
        let inputFile = new File(__dirname + 'input/04 - lonely planet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello, Earth!"
        );
    });

    test("Roundtrip in Europe", function() {
        let inputFile = new File(__dirname + 'input/05 - roundtrip in Europe.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - roundtrip in Europe.txt');
    });

    test("Pole to pole with Michael Palin", function() {
        let inputFile = new File(__dirname + 'input/06 - pole to Pole with Michael Palin.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - pole to Pole with Michael Palin.txt');
    });
});
