# CodinGame JavaScript tests

A project to test your [CodinGame](https://www.codingame.com/) JavaScript code. It is not intended to have solutions.
It only contains Mocha tests to let you code in your favorite IDE, outside of the CodinGame web site.

[![License](https://img.shields.io/github/license/cyrilverloop/codingame-js-tests)](https://github.com/cyrilverloop/codingame-js-tests/blob/trunk/LICENSE)

**This project uses Node 23 and CodinGame uses Node 20.9.0.
If you want to run your code on Node 20.9.0, you can override the Node image in `./compose.override.yaml`.**


## Installation

Downloading the project :
```shellsession
user@host ~$ cd [PATH_WHERE_TO_PUT_THE_PROJECT] # E.g. ~/projects/
user@host projects$ git clone https://github.com/cyrilverloop/codingame-js-tests.git
user@host projects$ cd codingame-js-tests
```

Copy some configuration files for Docker :
```shellsession
user@host projects$ cp ./.env.dist ./.env
user@host projects$ cp ./.ashrc.dist ./.ashrc
```
Edit the `./.env` to use your user UID and GID in the container if necessary.
The `./.ashrc`, `./.env` and `./compose.override.yaml` files are ignored by git, you can modify them to your needs.
The `./.ashrc` add some aliases to your container.

Installing the dependencies :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm i
```

Generate the code and test files :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm run generate
```

**Existing code, test, input and output files will not be overwritten.
To generate a file again, you must delete it first.**


## Add your code

Every files in `./lib/**/CGCode.js` files have an `execute()` method with the default CodinGame code.
A test executes the `execute()` method. You can add your code in and arround it.


## Test your solution

Executing tests for a specific code :
```shellsession
user@host codingame-js-tests$ docker compose run --rm app npm test ./test/easy/ASCIIArt/
```


## Add your test (optional)

Every tests in `./test/**/CGTest.js` files include the tests from CodinGame.
You can add your own tests in `./test/**/*.js` files.


## Time limit

The maximum time allowed may differ from CodinGame.
