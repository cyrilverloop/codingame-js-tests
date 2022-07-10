import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/byTrainOrByCar/byTrainOrByCar.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("By train or by car ?", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1) Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAIN 2:39"
        );
    });

    test("2) No stop car first", function() {
        let inputFile = new File(__dirname + 'input/02 - no stop car first.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CAR 1:00"
        );
    });

    test("3) no stop train first", function() {
        let inputFile = new File(__dirname + 'input/03 - no stop train first.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAIN 4:13"
        );
    });

    test("4) Orléans Cholet", function() {
        let inputFile = new File(__dirname + 'input/04 - Orléans Cholet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAIN 3:17"
        );
    });

    test("5) Orléans Nantes", function() {
        let inputFile = new File(__dirname + 'input/05 - Orléans Nantes.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAIN 4:00"
        );
    });

    test("6) Pithiviers Cholet", function() {
        let inputFile = new File(__dirname + 'input/06 - Pithiviers Cholet.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "TRAIN 3:43"
        );
    });

    test("7] Angouleme Royan", function() {
        let inputFile = new File(__dirname + 'input/07 - Angouleme Royan.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CAR 1:46"
        );
    });

    test("8) Montpellier Perpignan", function() {
        let inputFile = new File(__dirname + 'input/08 - Montpellier Perpignan.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "CAR 2:27"
        );
    });
});
