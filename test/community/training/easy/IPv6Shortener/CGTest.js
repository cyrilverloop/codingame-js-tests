import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/IPv6Shortener/IPv6Shortener.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("IPv6 shortener", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple address", function() {
        let inputFile = new File(__dirname + 'input/01 - simple address.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2001:0:3c4d:15::db8:1a2b"
        );
    });

    test("Loopback address", function() {
        let inputFile = new File(__dirname + 'input/02 - loopback address.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "::1"
        );
    });

    test("Multiple zero blocks", function() {
        let inputFile = new File(__dirname + 'input/03 - multiple zero blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2001::1:0:1a2f:1a2b"
        );
    });

    test("No zero blocks", function() {
        let inputFile = new File(__dirname + 'input/04 - no zero blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "2001:2021:ab23:82ae:21:1:1a2f:1a2b"
        );
    });

    test("One zero blocks", function() {
        let inputFile = new File(__dirname + 'input/05 - one zero blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "fe80:5c77:3430:7667:0:ce27:43d0:ab34"
        );
    });

    test("No full zero blocks", function() {
        let inputFile = new File(__dirname + 'input/06 - no full zero blocks.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "fe80:23:2027:dd:918f:1:23:e68"
        );
    });

    test("Zero blocks of same length", function() {
        let inputFile = new File(__dirname + 'input/07 - zero blocks of same length.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "::100:0:0:4:aaaa:0"
        );
    });

    test("Zero blocks at the end", function() {
        let inputFile = new File(__dirname + 'input/08 - zero blocks at the end.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "0:aaaa:a000:0:a:30::"
        );
    });
});
