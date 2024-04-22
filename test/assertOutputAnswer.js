import { assert } from 'chai';
import File from './File.js';

function assertOutputAnswer(fileName) {
    const outputFile = new File(fileName);
    let userAnswer = '';
    let line = outputFile.readline();
    let answer = "";

    for(const [consoleCallIndex, consoleCall] of Object.entries(console.log.getCalls())) {
        userAnswer += consoleCall.args[0] + "\n";
    }

    while(line !== "false") {
        answer += line + "\n";
        line = outputFile.readline();
    }

    userAnswer = removeTraillingNewLine(userAnswer);

    assert.strictEqual(
        userAnswer,
        answer
    );
}

function removeTraillingNewLine(answer) {
    let index = answer.length - 1;

    while(answer.charAt(index) === "\n") {
        index--;
    }

    return answer.slice(0, (index + 2));
}

export { assertOutputAnswer };
