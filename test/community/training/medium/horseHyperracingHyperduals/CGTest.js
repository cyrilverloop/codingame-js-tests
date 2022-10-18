import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/horseHyperracingHyperduals/horseHyperracingHyperduals.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Horse-hyperracing hyperduals", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Check your LCG", function() {
        let inputFile = new File(__dirname + 'input/01 - check your LCG.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1372193593
        );
    });

    test("2D horses", function() {
        let inputFile = new File(__dirname + 'input/02 - 2D horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            345805
        );
    });

    test("A fistful of horses", function() {
        let inputFile = new File(__dirname + 'input/03 - a fistful of horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            97225
        );
    });

    test("For a few horse more", function() {
        let inputFile = new File(__dirname + 'input/04 - for a few horse more.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            35608
        );
    });

    test("All your horse are belong to us", function() {
        let inputFile = new File(__dirname + 'input/05 - all your horse are belong to us.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            33322
        );
    });

    test("Many horses", function() {
        let inputFile = new File(__dirname + 'input/06 - many horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1293
        );
    });

    test("More horse", function() {
        let inputFile = new File(__dirname + 'input/07 - more horse.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4748656
        );
    });

    test("Horse OVER 9000!", function() {
        let inputFile = new File(__dirname + 'input/08 - horse OVER 9000!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            225840
        );
    });

    test("Horse overflow", function() {
        let inputFile = new File(__dirname + 'input/09 - horse overflow.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            75280
        );
    });

    test("Can't leave racers sitting horizontally", function() {
        let inputFile = new File(__dirname + 'input/10 - can\'t leave racers sitting horizontally.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1713883
        );
    });

    test("Can't leave racers sitting vertically either", function() {
        let inputFile = new File(__dirname + 'input/11 - can\'t leave racers sitting vertically either.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1713883
        );
    });

    test("Peak zexion", function() {
        let inputFile = new File(__dirname + 'input/12 - peak zexion.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            75242
        );
    });

    test("Roll JBM", function() {
        let inputFile = new File(__dirname + 'input/13 - roll JBM.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            75279
        );
    });
});
