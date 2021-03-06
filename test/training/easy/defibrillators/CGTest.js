import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/easy/defibrillators/defibrillators.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Defibrillators", function() {
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

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Maison de la Prevention Sante"
        );
    });

    test("Exact position", function() {
        let inputFile = new File(__dirname + 'input/02 - exact position.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Cimetiere Saint-Etienne"
        );
    });

    test("Complete file", function() {
        let inputFile = new File(__dirname + 'input/03 - complete file.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Caisse Primaire d'Assurance Maladie"
        );
    });

    test("Complete file 2", function() {
        let inputFile = new File(__dirname + 'input/04 - complete file 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Amphitheatre d'O"
        );
    });
});
