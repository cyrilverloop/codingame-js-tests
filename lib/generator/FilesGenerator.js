import ConfigurationConvertor from '../configuration/ConfigurationConvertor.js';
import CGCodeGenerator from './CGCodeGenerator.js';
import CGTestGenerator from './CGTestGenerator.js';
import ConfigurationParser from '../parser/ConfigurationParser.js';
import { readdir, stat } from 'node:fs/promises';
import path from 'path';


/**
 * The configuration file.
 */
const CONFIG_FILE = 'config.json';

/**
 * The default code file.
 */
const DEFAULT_CODE_FILE = 'CGCode.dist';


/**
 * Generates the tests.
 */
export default class FilesGenerator {

    // Properties :

    #configurationParser;
    #codeGenerator;
    #testGenerator;


    // Constructor :

    /**
     * The constructor.
     * @param {string} templatesPath - the templates path.
     */
    constructor(templatesPath) {
        this.#configurationParser = new ConfigurationParser();
        this.#codeGenerator = new CGCodeGenerator(templatesPath);
        this.#testGenerator = new CGTestGenerator(templatesPath);
    }


    // Methods :

    /**
     * Generates the test files.
     * @param {string} pathToScan - the path to scan for a configuration file.
     * @param {string} srcPath - the equivalent path of pathToScan in the src directory.
     * @param {string} testPath - the equivalent path of pathToScan in the tests directory.
     */
    async generate(pathToScan, srcPath, testPath) {
        let pathContent = await readdir(pathToScan);
        pathContent = pathContent.filter(this.#removeInputOutputDirectories.bind(this));

        const pathContentCount = pathContent.length;

        for(let pathContentIndex = 0; pathContentIndex < pathContentCount; pathContentIndex++) {
            const element = pathContent[pathContentIndex];

            const elementStats = await stat(pathToScan + element);

            if (elementStats.isDirectory() === true) {
                this.generate(
                    pathToScan + element + path.sep,
                    srcPath + element + path.sep,
                    testPath + element + path.sep
                );
            }

            if (element === CONFIG_FILE) {
                this.#generateFilesForConfiguration(
                    pathToScan,
                    srcPath,
                    testPath
                );
            }
        }
    }

    /**
     * Removes input and output directories.
     * @param {string} directory - the directory.
     * @returns {bool} - if the directory must be included.
     */
    #removeInputOutputDirectories(directory) {
        const directoriesToExclude = ['input', 'output'];

        if(directoriesToExclude.includes(directory) === true) {
            return false;
        }

        return true;
    }

    /**
     * Generates the files for the configuration.
     * @param {string} configurationPath - the path of the `config` directory.
     * @param {string} srcPath the path - where to generate the code.
     * @param {string} testPath the path - where to generate the test.
     */
    async #generateFilesForConfiguration(configurationPath, srcPath, testPath) {
        const parsedConfiguration = await this.#configurationParser.getConfigurationFromFile(configurationPath + CONFIG_FILE);

        const codeConfiguration = await ConfigurationConvertor.getGeneratorCodeConfiguration(
            parsedConfiguration,
            configurationPath + DEFAULT_CODE_FILE
        );
        this.#codeGenerator.generate(
            codeConfiguration,
            srcPath
        );

        const testConfiguration = await ConfigurationConvertor.getGeneratorTestConfiguration(parsedConfiguration);
        this.#testGenerator.generate(
            testConfiguration,
            configurationPath,
            testPath
        );
    }
}
