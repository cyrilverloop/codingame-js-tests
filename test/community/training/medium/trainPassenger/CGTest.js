import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/trainPassenger/trainPassenger.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Train passenger", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple A to B", function() {
        let inputFile = new File(__dirname + 'input/01 - simple A to B.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A > B"
        );
    });

    test("More stations", function() {
        let inputFile = new File(__dirname + 'input/02 - more stations.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "E > G > D"
        );
    });

    test("Even more stations", function() {
        let inputFile = new File(__dirname + 'input/03 - even more stations.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A > B > C > D > E > F > G > H > I > J > K > L > M > N > O > P > Q > R > S > T > U > V > W > X > Y > Z"
        );
    });

    test("Not in correct order", function() {
        let inputFile = new File(__dirname + 'input/04 - not in correct order.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A > B > C > D > E"
        );
    });

    test("Complex names", function() {
        let inputFile = new File(__dirname + 'input/05 - complex names.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "BestStation > MediumStation > WorstStation"
        );
    });

    test("Complex stations links", function() {
        let inputFile = new File(__dirname + 'input/06 - complex stations links.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "A > R > P > V > S > D > F"
        );
    });

    test("Complete test", function() {
        let inputFile = new File(__dirname + 'input/07 - complete test.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ByTheWay > ILoveCoding > But > ImBadAtCoding"
        );
    });
});
