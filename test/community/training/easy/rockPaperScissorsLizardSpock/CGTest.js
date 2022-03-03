import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/rockPaperScissorsLizardSpock/rockPaperScissorsLizardSpock.js';

/**
 * Tests for the "Rock paper scissors lizard Spock" puzzle.
 */
suite('Rock paper scissors lizard Spock', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Test 1 - Same as example', function() {
        let inputFile = new File('./test/community/training/easy/rockPaperScissorsLizardSpock/input/01 - test 1 - same as example.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rockPaperScissorsLizardSpock/output/01 - test 1 - same as example.txt');
    });

    test('Test 2 - With 2 players', function() {
        let inputFile = new File('./test/community/training/easy/rockPaperScissorsLizardSpock/input/02 - test 2 - with 2 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rockPaperScissorsLizardSpock/output/02 - test 2 - with 2 players.txt');
    });

    test('Test 3 - With 32 players', function() {
        let inputFile = new File('./test/community/training/easy/rockPaperScissorsLizardSpock/input/03 - test 3 - with 32 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rockPaperScissorsLizardSpock/output/03 - test 3 - with 32 players.txt');
    });

    test('Test 4 - Only Rock and Paper', function() {
        let inputFile = new File('./test/community/training/easy/rockPaperScissorsLizardSpock/input/04 - test 4 - only rock and paper.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rockPaperScissorsLizardSpock/output/04 - test 4 - only rock and paper.txt');
    });

    test('Test 5 - With 1024 players', function() {
        let inputFile = new File('./test/community/training/easy/rockPaperScissorsLizardSpock/input/05 - test 5 - with 1024 players.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer('./test/community/training/easy/rockPaperScissorsLizardSpock/output/05 - test 5 - with 1024 players.txt');
    });
});
