import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/retroTypewriterArt/retroTypewriterArt.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Retro typewriter art", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple cat", function() {
        let inputFile = new File(__dirname + 'input/01 - simple cat.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - simple cat.txt');
    });

    test("Spider", function() {
        let inputFile = new File(__dirname + 'input/02 - spider.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - spider.txt');
    });

    test("Hen night", function() {
        let inputFile = new File(__dirname + 'input/03 - hen night.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - hen night.txt');
    });

    test("Yogi bear has head room", function() {
        let inputFile = new File(__dirname + 'input/04 - yogi bear has head room.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - yogi bear has head room.txt');
    });

    test("A foundation of 8's", function() {
        let inputFile = new File(__dirname + 'input/05 - a foundation of 8s.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - a foundation of 8s.txt');
    });

    test("Minimalist", function() {
        let inputFile = new File(__dirname + 'input/06 - minimalist.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - minimalist.txt');
    });

    test("Impossible triangle", function() {
        let inputFile = new File(__dirname + 'input/07 - impossible triangle.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - impossible triangle.txt');
    });

    test("Alien", function() {
        let inputFile = new File(__dirname + 'input/08 - alien.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - alien.txt');
    });

    test("Tree", function() {
        let inputFile = new File(__dirname + 'input/09 - tree.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/09 - tree.txt');
    });

    test("Flamingo fran", function() {
        let inputFile = new File(__dirname + 'input/10 - flamingo fran.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/10 - flamingo fran.txt');
    });
});
