import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/medium/virusSpreadingAndClustering/virusSpreadingAndClustering.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Virus spreading and clustering", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("5 items and 2 relationships", function() {
        let inputFile = new File(__dirname + 'input/01 - 5 items and 2 relationships.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - 5 items and 2 relationships.txt');
    });

    test("20 items and 6 relationships", function() {
        let inputFile = new File(__dirname + 'input/02 - 20 items and 6 relationships.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - 20 items and 6 relationships.txt');
    });

    test("100 items and 50 relationships", function() {
        let inputFile = new File(__dirname + 'input/03 - 100 items and 50 relationships.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - 100 items and 50 relationships.txt');
    });

    test("People has at least 1 connexion", function() {
        let inputFile = new File(__dirname + 'input/04 - people has at least 1 connexion.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - people has at least 1 connexion.txt');
    });

    test("People has at least 2 connexion : argh !", function() {
        let inputFile = new File(__dirname + 'input/05 - people has at least 2 connexion : argh !.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "400 1"
        );
    });

    test("Average connexion 1 per people : argh !", function() {
        let inputFile = new File(__dirname + 'input/06 - average connexion 1 per people : argh !.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - average connexion 1 per people : argh !.txt');
    });

    test("Average connexion 0.8 per people", function() {
        let inputFile = new File(__dirname + 'input/07 - average connexion 0.8 per people.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/07 - average connexion 0.8 per people.txt');
    });

    test("Average connexion 0.5 per people", function() {
        let inputFile = new File(__dirname + 'input/08 - average connexion 0.5 per people.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/08 - average connexion 0.5 per people.txt');
    });
});
