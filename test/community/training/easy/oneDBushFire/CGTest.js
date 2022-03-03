import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/oneDBushFire/oneDBushFire.js';

/**
 * Tests for the "1D bush fire" puzzle.
 */
suite('1D bush fire', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Example', function() {
        let inputFile = new File('./test/community/training/easy/oneDBushFire/input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/oneDBushFire/output/01 - example.txt');
    });

    test('Basic operations', function() {
        let inputFile = new File('./test/community/training/easy/oneDBushFire/input/02 - basic operations.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/oneDBushFire/output/02 - basic operations.txt');
    });

    test('Smoky trail', function() {
        let inputFile = new File('./test/community/training/easy/oneDBushFire/input/03 - smoky trail.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/oneDBushFire/output/03 - smoky trail.txt');
    });

    test('Traps in fames', function() {
        let inputFile = new File('./test/community/training/easy/oneDBushFire/input/04 - traps in fames.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/oneDBushFire/output/04 - traps in fames.txt');
    });

    test('Ambushes', function() {
        let inputFile = new File('./test/community/training/easy/oneDBushFire/input/05 - ambushes.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/oneDBushFire/output/05 - ambushes.txt');
    });
});
