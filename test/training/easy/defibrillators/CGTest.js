import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/easy/defibrillators/defibrillators.js';

/**
 * Tests for the "Defibrillators" puzzle.
 */
suite('Defibrillators', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('can execute "Example"', function() {
        let inputFile = new File('./test/training/easy/defibrillators/input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'Maison de la Prevention Sante'
        );
    });

    test('can execute "Exact position"', function() {
        let inputFile = new File('./test/training/easy/defibrillators/input/02 - exact position.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            'Cimetiere Saint-Etienne'
        );
    });

    test('can execute "Complete file"', function() {
        let inputFile = new File('./test/training/easy/defibrillators/input/03 - complete file.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Caisse Primaire d'Assurance Maladie"
        );
    });

    test('can execute "Complete file 2"', function() {
        let inputFile = new File('./test/training/easy/defibrillators/input/04 - complete file 2.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Amphitheatre d'O"
        );
    });
});
