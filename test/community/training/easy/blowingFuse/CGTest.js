import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/blowingFuse/blowingFuse.js';

/**
 * Tests for the "Blowing fuse" puzzle.
 */
suite('Blowing fuse', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Blown', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/01 - blown.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Fuse was blown."
        );
    });

    test('Not blown', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/02 - not blown.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/blowingFuse/output/02 - not blown.txt');
    });

    test('Single device', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/03 - single device.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Fuse was blown."
        );
    });

    test('More devices', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/04 - more device.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/blowingFuse/output/04 - more device.txt');
    });

    test('More clicks, more devices', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/05 - more clicks, more devices.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/blowingFuse/output/05 - more clicks, more devices.txt');
    });

    test('Power hungry', function() {
        let inputFile = new File('./test/community/training/easy/blowingFuse/input/06 - power hungry.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/blowingFuse/output/06 - power hungry.txt');
    });
});
