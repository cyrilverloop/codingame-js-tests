import { assert } from 'chai';
import sinon from 'sinon';
import File from '../../../../File.js';
import { execute } from '../../../../../lib/community/training/easy/theMichelangeloCode/theMichelangeloCode.js';

const __dirname = new URL('.', import.meta.url).pathname;

suite("The michelangelo code", function() {
    const sandbox = sinon.createSandbox();

    setup(function () {
        sandbox.stub(console, "log");
    });

    teardown(function () {
        sandbox.restore();
    });


    test("Simple", function() {
        let inputFile = new File(__dirname + 'input/01 - simple.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "SomEwaCkyRunEsaT"
        );
    });

    test("Where to begin", function() {
        let inputFile = new File(__dirname + 'input/02 - where to begin.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ThertisnoblerinthemindtosuffeRtheslingsandarrowsofoutrageoUsfortuneortotakearmsagainstaSeaoftroublesandbyopposingendT"
        );
    });

    test("Be punctual", function() {
        let inputFile = new File(__dirname + 'input/03 - be punctual.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "ErskeeperandthefinderofLostchildrenandiwillstrIkedownupontheewithgreaTvengeanceandfuriousangE"
        );
    });

    test("Tempus fugit", function() {
        let inputFile = new File(__dirname + 'input/04 - tempus fugit.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "IpiscingeLitnullamLonefficiUtrquamegMtullamcoIpervelitNuspendisAesedmaleTuadadiamI"
        );
    });

    test("I have no mouth", function() {
        let inputFile = new File(__dirname + 'input/05 - i have no mouth.txt');

        execute(inputFile.readline.bind(inputFile));

        assert.strictEqual(
            console.log.getCall(0).args[0],
            "HaEaLaP"
        );
    });
});
