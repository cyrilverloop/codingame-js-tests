import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/hiddenMessagesInImages/hiddenMessagesInImages.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Hidden messages in images", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Hello World!", function() {
        let inputFile = new File(__dirname + 'input/01 - hello world!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Hello World!"
        );
    });

    test("This is a lot of fun!", function() {
        let inputFile = new File(__dirname + 'input/02 - this is a lot of fun!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "This is a lot of fun!"
        );
    });

    test("I learned something new with this puzzle", function() {
        let inputFile = new File(__dirname + 'input/03 - i learned something new with this puzzle.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "I learned something new with this puzzle"
        );
    });

    test("I will hide messages in all my photos", function() {
        let inputFile = new File(__dirname + 'input/04 - i will hide messages in all my photos.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "I will hide messages in all my photos"
        );
    });
});
