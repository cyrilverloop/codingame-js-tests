import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/horseRacingHyperduals/horseRacingHyperduals.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Horse-racing hyperduals", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Velocity-centric race", function() {
        let inputFile = new File(__dirname + 'input/01 - velocity-centric race.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4492
        );
    });

    test("Elegance-centric race", function() {
        let inputFile = new File(__dirname + 'input/02 - elegance-centric race.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            98020
        );
    });

    test("Balanced horses", function() {
        let inputFile = new File(__dirname + 'input/03 - balanced horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            107044
        );
    });

    test("Linear horses", function() {
        let inputFile = new File(__dirname + 'input/04 - linear horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            29220
        );
    });

    test("Affine horses", function() {
        let inputFile = new File(__dirname + 'input/05 - affine horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            226173
        );
    });

    test("Bimodal horses", function() {
        let inputFile = new File(__dirname + 'input/06 - bimodal horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            4492
        );
    });

    test("2D horses", function() {
        let inputFile = new File(__dirname + 'input/07 - 2D horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            345805
        );
    });

    test("A fistful of horses", function() {
        let inputFile = new File(__dirname + 'input/08 - a fistful of horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            97225
        );
    });

    test("For a few horse more", function() {
        let inputFile = new File(__dirname + 'input/09 - for a few horse more.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            35608
        );
    });

    test("All your horse are belong to us", function() {
        let inputFile = new File(__dirname + 'input/10 - all your horse are belong to us.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            33322
        );
    });

    test("Many horses", function() {
        let inputFile = new File(__dirname + 'input/11 - many horses.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            1293
        );
    });

    test("Mmmaaannn, That Sucks!", function() {
        let inputFile = new File(__dirname + 'input/12 - mmmaaannn, that sucks!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });

    test("Don't overflow your stack", function() {
        let inputFile = new File(__dirname + "input/13 - don't overflow your stack.txt");

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            0
        );
    });
});
