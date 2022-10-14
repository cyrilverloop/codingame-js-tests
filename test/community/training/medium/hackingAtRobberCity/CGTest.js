import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/hackingAtRobberCity/hackingAtRobberCity.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hacking at RobberCity", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Greetings", function() {
        let inputFile = new File(__dirname + 'input/01 - greetings.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello bob ! How are you ?"
        );
    });

    test("Are you sure about that ?", function() {
        let inputFile = new File(__dirname + 'input/02 - are you sure about that ?.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "I'm happy we finally found a way to communicate!"
        );
    });

    test("Hey ! I'm listening", function() {
        let inputFile = new File(__dirname + 'input/03 - hey ! i\'m listening.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "*these hackers are soooo stupid !!! *"
        );
    });

    test("Not a chance !", function() {
        let inputFile = new File(__dirname + 'input/04 - not a chance !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hopefully, they won't be an issue anymore"
        );
    });

    test("Who laughs last laughs longest", function() {
        let inputFile = new File(__dirname + 'input/05 - who laughs last laughs longest.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Ha ha ha ha ha !!"
        );
    });

    test("THIS is really stupid", function() {
        let inputFile = new File(__dirname + 'input/06 - THIS is really stupid.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - THIS is really stupid.txt');
    });
});
