import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../File.js';
import { assertOutputAnswer } from '../../../assertOutputAnswer.js';
import { execute } from '../../../../lib/training/easy/ASCIIArt/ASCIIArt.js';

/**
 * Tests for the "ASCII Art" puzzle.
 */
suite('ASCII art', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('can execute "Test only one letter E"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/01 - test only one letter E.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/01 - test only one letter E.txt');
    });

    test('can execute "Test MANHATTAN"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/02 - test MANHATTAN.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/02 - test MANHATTAN.txt');
    });

    test('can execute "Test ManhAtTan"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/03 - test ManhAtTan.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/03 - test ManhAtTan.txt');
    });

    test('can execute "Test M@NH@TT@N"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/04 - test M@NH@TT@N.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/04 - test M@NH@TT@N.txt');
    });

    test('can execute "MANHATTAN with another ASCII representation"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/05 - MANHATTAN with another ASCII representation.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/05 - MANHATTAN with another ASCII representation.txt');
    });

    test('can execute "Test MAN HAT TAN"', function() {
        let inputFile = new File('./test/training/easy/ASCIIArt/input/06 - test MAN HAT TAN.txt');

        execute(inputFile.readline.bind(inputFile));
        
        assertOutputAnswer('./test/training/easy/ASCIIArt/output/06 - test MAN HAT TAN.txt');
    });
});
