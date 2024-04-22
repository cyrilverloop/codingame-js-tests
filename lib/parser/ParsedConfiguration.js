/**
 * A parsed configuration.
 */
export default class ParsedConfiguration {

    // Properties :

    #path;
    #name;
    #link;
    #testConfigurations;


    // Constructor :

    /**
     * The constructor.
     * @param {string} path - the path.
     * @param {string} name - the name.
     * @param {string} link - the link.
     * @param {TestConfiguration[]} testConfigurations - the tests configurations.
     */
    constructor(
        path,
        name,
        link,
        testConfigurations
    ) {
        this.#path = path;
        this.#name = name;
        this.#link = link;
        this.#testConfigurations = testConfigurations;
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
     * Returns the tests configurations.
     * @returns {TestConfiguration[]} - the tests configurations.
     */
    get testConfigurations()
    {
        return this.#testConfigurations;
    }
}
