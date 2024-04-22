import { readFile } from 'node:fs/promises';
import GeneratorCodeConfiguration from '../generator/GeneratorCodeConfiguration.js';
import GeneratorTestConfiguration from '../generator/GeneratorTestConfiguration.js';
import ParsedConfiguration from '../parser/ParsedConfiguration.js';

/**
 * A configuration convertor.
 */
export default class ConfigurationConvertor {

    // Methods :

    /**
     * Returns the code configuration for the generator.
     * @param {ParsedConfiguration} parsedConfiguration - the parsed configuration.
     * @param {string} defaultCodeFile - the file with the default code.
     * @return {GeneratorCodeConfiguration} the code configuration for the generator.
     * @throws Error if the default code file is not readable.
     */
    static async getGeneratorCodeConfiguration(parsedConfiguration, defaultCodeFile) {

        if((typeof defaultCodeFile) !== "string") {
            throw new Error("The default code file is not a string.");
        }

        try {
            let defaultCode = await readFile(defaultCodeFile, { encoding: 'utf8' });
            defaultCode = defaultCode.replace(/\n/g, "\n    ");

            return new GeneratorCodeConfiguration(
                parsedConfiguration.path,
                parsedConfiguration.name,
                parsedConfiguration.link,
                defaultCode
            );
        } catch(error) {
            throw new Error("Configuration file not readable.");
        }
    }

    /**
     * Returns the test configuration for the generator.
     * @param {ParsedConfiguration} parsedConfiguration - the parsed configuration.
     * @return {GeneratorTestConfiguration} the test configuration for the generator.
     */
    static getGeneratorTestConfiguration(parsedConfiguration) {
        return new GeneratorTestConfiguration(
            parsedConfiguration.path,
            parsedConfiguration.name,
            parsedConfiguration.testConfigurations
        );
    }
}
