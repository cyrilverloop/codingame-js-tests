/**
 * The generator test configuration.
 */
export default class GeneratorTestConfiguration {

    // Properties :

    #path;
    #name;
    #testConfigurations;


    // Constructor :

    /**
     * The constructor.
     * @param {string} path - the path.
     * @param {string} name - the name.
     * @param {TestConfiguration[]} testConfigurations - the tests configurations.
     */
    constructor(
        path,
        name,
        testConfigurations
    ) {
        this.#path = path;
        this.#name = name;
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
     * Returns the tests configurations.
     * @returns {TestConfiguration[]} - the tests configurations.
     */
    get testConfigurations()
    {
        return this.#testConfigurations;
    }
}
