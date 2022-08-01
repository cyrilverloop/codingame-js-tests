import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/seamCarving/seamCarving.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Seam carving", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Height 8 & width -1", function() {
        let inputFile = new File(__dirname + 'input/01 - height 8 & width -1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            175
        );
    });

    test("Height 11 & width -1", function() {
        let inputFile = new File(__dirname + 'input/02 - height 11 & width -1.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            120
        );
    });

    test("Height 16 & width -2", function() {
        let inputFile = new File(__dirname + 'input/03 - height 16 & width -2.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - height 16 & width -2.txt');
    });

    test("Height 19 & width -3", function() {
        let inputFile = new File(__dirname + 'input/04 - height 19 & width -3.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - height 19 & width -3.txt');
    });

    test("Height 35 & width -10", function() {
        let inputFile = new File(__dirname + 'input/05 - height 35 & width -10.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - height 35 & width -10.txt');
    });

    test("Height 37 & width -15", function() {
        let inputFile = new File(__dirname + 'input/06 - height 37 & width -15.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - height 37 & width -15.txt');
    });

    test("Height 60 & width -20", function() {
        let inputFile = new File(__dirname + 'input/07 - height 60 & width -20.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - height 60 & width -20.txt');
    });

    test("Height 27 & width -25", function() {
        let inputFile = new File(__dirname + 'input/08 - height 27 & width -25.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - height 27 & width -25.txt');
    });

    test("Height 38 & width -25", function() {
        let inputFile = new File(__dirname + 'input/09 - height 38 & width -25.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - height 38 & width -25.txt');
    });

    test("Height 35 & width -30", function() {
        let inputFile = new File(__dirname + 'input/10 - height 35 & width -30.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - height 35 & width -30.txt');
    });
});
