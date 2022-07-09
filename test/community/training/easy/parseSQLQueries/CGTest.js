import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/parseSQLQueries/parseSQLQueries.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Parse SQL queries", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Select all", function() {
        let inputFile = new File(__dirname + 'input/01 - select all.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - select all.txt');
    });

    test("Select from where", function() {
        let inputFile = new File(__dirname + 'input/02 - select from where.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - select from where.txt');
    });

    test("ORDER BY DESC", function() {
        let inputFile = new File(__dirname + 'input/03 - ORDER BY DESC.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - ORDER BY DESC.txt');
    });

    test("Slightly bigger table", function() {
        let inputFile = new File(__dirname + 'input/04 - slightly bigger table.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - slightly bigger table.txt');
    });

    test("Titanic table", function() {
        let inputFile = new File(__dirname + 'input/05 - titanic table.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - titanic table.txt');
    });
});
