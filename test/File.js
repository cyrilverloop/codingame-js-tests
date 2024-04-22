import lineByLine from 'n-readlines';

export default class File {

    // Properties :

    #liner;


    // Constructor :

    /**
     * The constructor.
     * @param {string} filename - the file name.
     */
    constructor(filename) {
        this.#liner = new lineByLine(filename);
    }


    // Methods :

    /**
     * Reads a line.
     * @returns {string} - a line.
     */
    readline() {
        return this.#liner.next().toString("utf8");
    }
}
