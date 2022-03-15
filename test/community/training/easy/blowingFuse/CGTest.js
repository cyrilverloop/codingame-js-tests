import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { assertOutputAnswer } from '../../../../assertOutputAnswer.js';
import { execute } from '../../../../../lib/community/training/easy/blowingFuse/blowingFuse.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite('Blowing fuse', function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test('Blown', function() {
        let inputFile = new File(__dirname + 'input/01 - blown.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Fuse was blown."
        );
    });

    test('Not blown', function() {
        let inputFile = new File(__dirname + 'input/02 - not blown.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/02 - not blown.txt');
    });

    test('Single device', function() {
        let inputFile = new File(__dirname + 'input/03 - single device.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "Fuse was blown."
        );
    });

    test('More devices', function() {
        let inputFile = new File(__dirname + 'input/04 - more device.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/04 - more device.txt');
    });

    test('More clicks, more devices', function() {
        let inputFile = new File(__dirname + 'input/05 - more clicks, more devices.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/05 - more clicks, more devices.txt');
    });

    test('Power hungry', function() {
        let inputFile = new File(__dirname + 'input/06 - power hungry.txt');

        execute(inputFile.readline.bind(inputFile));

        assertOutputAnswer(__dirname + 'output/06 - power hungry.txt');
    });
});
