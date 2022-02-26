import lineByLine from 'n-readlines';

export default class File {

    constructor(filename) {
        this._liner = new lineByLine(filename);
    }

    readline() {
        return this._liner.next().toString('utf8');
    }
}
