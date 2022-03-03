import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { execute } from '../../../../lib/training/hard/genomeSequencing/genomeSequencing.js';

/**
 * Tests for the "Genome sequencing" puzzle.
 */
suite('Genome sequencing', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('AACCTT', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/01 - AACCTT.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test('AGATTACAGA', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/02 - AGATTACAGA.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            10
        );
    });

    test('AACTT', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/03 - AACTT.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            5
        );
    });

    test('AGATTA', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/04 - AGATTA.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test('reversed AGATTA', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/05 - reversed AGATTA.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            6
        );
    });

    test('ATCG', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/06 - ATCG.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4
        );
    });

    test('CCCTGACATGA', function() {
        let inputFile = new File('./test/training/hard/genomeSequencing/input/07 - CCCTGACATGA.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            11
        );
    });
});
