import { readFile } from 'node:fs/promises';
import TestConfiguration from '../configuration/TestConfiguration.js';
import ParsedConfiguration from './ParsedConfiguration.js';

/**
 * The configuration parser.
 */
export default class ConfigurationParser {

    // Methods :

    /**
     * Returns the configuration from the configuration file.
     * @param string $file the file.
     * @throws Error if the configuration file is not readable.
     * @returns {ParsedConfiguration} - the parsed configuration.
     */
    async getConfigurationFromFile(file) {

        if((typeof file) !== "string") {
            throw new Error("The file is not a string.");
        }

        try {
            const data = await readFile(file, { encoding: 'utf8' });

            const jsonConfiguration = JSON.parse(data);
            const testsconfigurations = this.#getTestConfigurations(jsonConfiguration.tests);

            return new ParsedConfiguration(
                jsonConfiguration.path,
                jsonConfiguration.name,
                jsonConfiguration.link,
                testsconfigurations
            );
        } catch(error) {
            throw new Error("Configuration file not readable.");
        }
    }

    /**
     * Returns the tests configurations.
     * @param {string[]} testConfigurations - the configurations.
     * @returns {TestConfiguration[]} - the tests configurations.
     */
    #getTestConfigurations(testConfigurations) {
        const testsconfigurations = [];

        for(const testConfiguration of testConfigurations) {
            const testconfiguration = new TestConfiguration(
                testConfiguration.name,
                testConfiguration.file
            );
            testsconfigurations.push(testconfiguration);
        }

        return testsconfigurations;
    }
}
