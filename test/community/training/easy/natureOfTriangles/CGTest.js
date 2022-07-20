import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/natureOfTriangles/natureOfTriangles.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("Nature of triangles", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Scalene triangles", function() {
        let inputFile = new File(__dirname + 'input/01 - scalene triangles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/01 - scalene triangles.txt');
    });

    test("Isosceles triangles", function() {
        let inputFile = new File(__dirname + 'input/02 - isosceles triangles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - isosceles triangles.txt');
    });

    test("Right angled triangles", function() {
        let inputFile = new File(__dirname + 'input/03 - right angled triangles.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/03 - right angled triangles.txt');
    });

    test("Almost right", function() {
        let inputFile = new File(__dirname + 'input/04 - almost right.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ABC is a scalene and an acute triangle."
        );
    });

    test("Everything", function() {
        let inputFile = new File(__dirname + 'input/05 - everything.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - everything.txt');
    });
});
