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
     * @returns {(string|null)} - a line or null.
     */
    readline() {
        const line = this.#liner.next();

        if(line === null) {
            return null;
        }

        return line.toString("utf8");
    }
}
