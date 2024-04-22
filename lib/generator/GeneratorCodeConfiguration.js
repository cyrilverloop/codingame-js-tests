/**
 * The generator code configuration.
 */
export default class GeneratorCodeConfiguration {

    // Properties :

    #path;
    #name;
    #link;
    #defaultCode;


    // Constructor :

    /**
     * The constructor.
     * @param {string} path - the path.
     * @param {string} name - the name.
     * @param {string} link - the link.
     * @param {string} defaultCode - the default code.
     */
    constructor(
        path,
        name,
        link,
        defaultCode
    ) {
        this.#path = path;
        this.#name = name;
        this.#link = link;
        this.#defaultCode = defaultCode;
    }


    // Accessors :

    /**
     * Returns the path.
     * @returns {string} - the path.
     */
    get path()
    {
        return this.#path;
    }

    /**
     * Returns the name.
     * @returns {string} - the name.
     */
    get name()
    {
        return this.#name;
    }

    /**
     * Returns the link.
     * @returns {string} - the link.
     */
    get link()
    {
        return this.#link;
    }

    /**
     * Returns the default code.
     * @returns {string} - the default code.
     */
    get defaultCode()
    {
        return this.#defaultCode;
    }
}
