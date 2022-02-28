# CodinGame JavaScript tests

A project to test your [CodinGame](https://www.codingame.com/) JavaScript code. It is not intended to have solutions.
It only contains Mocha tests to let you code in your favorite IDE, outside of the CodinGame web site.

[![License](https://img.shields.io/github/license/cyrilverloop/codingame-js-tests)](https://github.com/cyrilverloop/codingame-js-tests/blob/trunk/LICENSE)


## Installation

Downloading the project :
```shellsession
user@host ~$ cd [PATH_WHERE_TO_PUT_THE_PROJECT] # E.g. ~/projects/
user@host projects$ git clone https://github.com/cyrilverloop/codingame-js-tests.git
user@host projects$ cd codingame-js-tests
```

Installing the dependencies :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm i
```


## Add your code

Every files in `./lib/**/*.dist` files have an `execute()` method with the default CodinGame code.
To try a puzzle, copy the corresponding file and change the extension to `js` :
```shellsession
user@host codingame-js-tests$ cp ./lib/training/easy/unary/unary.dist ./ls/training/easy/unary/unary.js
```
Then, add your code to solve the puzzle.

**If you do not have an `execute()` method in it, the tests will not be able to run.**


## Test your solution

Executing tests for a specific puzzle :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm test ./test/training/easy/unary/
```

Executing all the tests :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm test ./test/**/*.js
```


## Add your test (optional)

Every tests in `./test/**/CGTest.js` files include the tests from CodinGame.
You can add your own tests in other `./test/**/*.js` files.


## Time limit

The maximum time allowed for a puzzle may differ from CodinGame.
