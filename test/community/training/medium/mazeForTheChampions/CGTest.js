import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/mazeForTheChampions/mazeForTheChampions.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Maze for the champions", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("1: easy for warrior", function() {
        let inputFile = new File(__dirname + 'input/01 - easy for warrior.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - easy for warrior.txt');
    });

    test("2: easy for elf", function() {
        let inputFile = new File(__dirname + 'input/02 - easy for elf.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - easy for elf.txt');
    });

    test("3: easy for mage", function() {
        let inputFile = new File(__dirname + 'input/03 - easy for mage.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - easy for mage.txt');
    });

    test("4: easy for dwarf", function() {
        let inputFile = new File(__dirname + 'input/04 - easy for dwarf.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - easy for dwarf.txt');
    });

    test("5: complex for warrior", function() {
        let inputFile = new File(__dirname + 'input/05 - complex for warrior.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - complex for warrior.txt');
    });

    test("6: complex for elf", function() {
        let inputFile = new File(__dirname + 'input/06 - complex for elf.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - complex for elf.txt');
    });

    test("7: complex for mage", function() {
        let inputFile = new File(__dirname + 'input/07 - complex for mage.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - complex for mage.txt');
    });

    test("8: complex for dwarf", function() {
        let inputFile = new File(__dirname + 'input/08 - complex for dwarf.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - complex for dwarf.txt');
    });
});
