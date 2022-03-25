import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/bracketsExtremeEdition/bracketsExtremeEdition.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Brackets, extreme edition", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Example", function() {
        let inputFile = new File(__dirname + 'input/01 - example.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("{([{S}]]6K[()]}", function() {
        let inputFile = new File(__dirname + 'input/02 - {([{S}]]6K[()]}.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("{C{}[{[a]}RqhL]{y2}}", function() {
        let inputFile = new File(__dirname + 'input/03 - {C{}[{[a]}RqhL]{y2}}.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("W12{}{}L{}", function() {
        let inputFile = new File(__dirname + 'input/04 - W12{}{}L{}.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "true"
        );
    });

    test("h{Pn{GT{h}(c))}", function() {
        let inputFile = new File(__dirname + 'input/05 - h{Pn{GT{h}(c))}.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("{[{iHTSc}]}p(R)m(){q({})", function() {
        let inputFile = new File(__dirname + 'input/06 - {[{iHTSc}]}p(R)m(){q({}).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("][", function() {
        let inputFile = new File(__dirname + 'input/07 - ][.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });

    test("{(})", function() {
        let inputFile = new File(__dirname + 'input/08 - {(}).txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "false"
        );
    });
});
