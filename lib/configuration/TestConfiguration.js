/**
 * A test configuration.
 */
export default class TestConfiguration {

    // Properties :

    #name;
    #file;


    // Constructor :

    /**
     * The constructor.
     * @param {string} name - the name.
     * @param {string} file - the file.
     */
    constructor(name, file) {
        this.#name = name;
        this.#file = file;
    }


    // Accessors :

    /**
     * Returns the name.
     * @returns {string} - the name.
     */
    get name()
    {
        return this.#name;
    }

    /**
     * Returns the file.
     * @returns {string} - the file.
     */
    get file()
    {
        return this.#file;
    }
}
