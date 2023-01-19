import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/medium/letsGoToTheCinema/letsGoToTheCinema.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Let's go to the cinema!", function() {
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
            "2 5"
        );
    });

    test("Family comes to living room to watch TV", function() {
        let inputFile = new File(__dirname + 'input/02 - family comes to living room to watch tv.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 4"
        );
    });

    test("Family TV, but cat is sitting on edge of sofa", function() {
        let inputFile = new File(__dirname + 'input/03 - family TV, but cat is sitting on edge of sofa.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 4"
        );
    });

    test("Family TV, but 2 cats are sitting on middle of sofa", function() {
        let inputFile = new File(__dirname + 'input/04 - family TV, but 2 cats are sitting on middle of sofa.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2 4"
        );
    });

    test("There ain't no problem!", function() {
        let inputFile = new File(__dirname + 'input/05 - there ain\'t no problem!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "7 18"
        );
    });

    test("We ain't need no seat numbering!", function() {
        let inputFile = new File(__dirname + 'input/06 - we ain\'t need no seat numbering!.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 2"
        );
    });

    test("Small cinema", function() {
        let inputFile = new File(__dirname + 'input/07 - small cinema.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "9 75"
        );
    });

    test("Bigger cinema", function() {
        let inputFile = new File(__dirname + 'input/08 - bigger cinema.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "66 2043"
        );
    });

    test("Chain reaction", function() {
        let inputFile = new File(__dirname + 'input/09 - chain reaction.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "1 1"
        );
    });

    test("Blind date", function() {
        let inputFile = new File(__dirname + 'input/10 - blind date.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "8 12"
        );
    });
});
