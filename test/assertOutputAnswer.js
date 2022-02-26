import { assert } from 'chai';
import File from './File.js';

function assertOutputAnswer(fileName) {
    let outputFile = new File(fileName);
    let line = outputFile.readline();
    let answerIndex = 0;

    while(line !== "false") {
        assert.strictEqual(
            console.log.getCall(answerIndex).args[0],
            line
        );
        line = outputFile.readline();
        answerIndex++;
    }
}

export { assertOutputAnswer };
