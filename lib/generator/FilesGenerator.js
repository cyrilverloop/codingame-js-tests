import ConfigurationConvertor from '../configuration/ConfigurationConvertor.js';
import CGCodeGenerator from './CGCodeGenerator.js';
import CGTestGenerator from './CGTestGenerator.js';
import ConfigurationParser from '../parser/ConfigurationParser.js';
import { access, constants } from 'node:fs';
import { readdir, stat } from 'node:fs/promises';
import path from 'path';


/**
 * The configuration file.
 */
const CONFIG_FILE = 'config.json';

/**
 * The default code directory.
 */
const DEFAULT_CODE_DIRECTORY = 'code' + path.sep;

/**
 * The default library directory.
 */
const DEFAULT_LIBRARY_DIRECTORY = 'lib' + path.sep;

/**
 * The default template directory.
 */
const DEFAULT_TEMPLATE_DIRECTORY = 'templates' + path.sep;

/**
 * The default test directory.
 */
const DEFAULT_TEST_DIRECTORY = 'test' + path.sep;

/**
 * The default code file.
 */
const DEFAULT_CODE_FILE = 'CGCode.js';


/**
 * Generates the tests.
 */
export default class FilesGenerator {

    // Properties :

    #projectPath;
    #configurationParser;
    #codeGenerator;
    #testGenerator;


    // Constructor :

    /**
     * The constructor.
     * @param {string} projectPath - the project path.
     */
    constructor(projectPath) {
        this.#projectPath = projectPath;
        this.#configurationParser = new ConfigurationParser();
        const templatesPath = projectPath + DEFAULT_TEMPLATE_DIRECTORY;
        this.#codeGenerator = new CGCodeGenerator(templatesPath);
        this.#testGenerator = new CGTestGenerator(templatesPath);
    }


    // Methods :

    /**
     * Generates the test files.
     * @param {string} pathToScan - the path to scan for a configuration file.
     */
    async generate(pathToScan) {
        const difficultyDirectories = await readdir(pathToScan);

        for(const difficultyDirectory of difficultyDirectories) {
            const puzzleDirectories = await readdir(pathToScan + difficultyDirectory);

            this.#generateConfigurationsForDifficulty(
                puzzleDirectories,
                difficultyDirectory,
                pathToScan + difficultyDirectory + path.sep
            );
        }
    }

    /**
     * Generates the configurations for the difficulty.
     * @param {string[]} puzzleDirectories - the puzzle directories.
     * @param {string} difficulty - the difficulty.
     * @param {string} difficultyPathToScan - the path to scan for a configuration file.
     */
    async #generateConfigurationsForDifficulty(
        puzzleDirectories,
        difficulty,
        difficultyPathToScan
    ) {
        for(const puzzleDirectory of puzzleDirectories) {
            const configurationPath = difficultyPathToScan + puzzleDirectory + path.sep;
            const defaultCodeFile = configurationPath + DEFAULT_CODE_DIRECTORY + DEFAULT_CODE_FILE;

            try {
                access(
                    defaultCodeFile,
                    constants.F_OK,
                    this.#generateFilesForConfiguration.bind(
                        this,
                        configurationPath,
                        difficulty + path.sep + puzzleDirectory + path.sep
                    )
                );
            } catch(error) {
            }
        }
    }

    /**
     * Generates the files for the configuration.
     * @param {string} configurationPath - the path of the `config` directory.
     * @param {string} namespacePath - the path where to generate the files.
     * @param {Error} error - the error if CGCode.js does not exist.
     */
    async #generateFilesForConfiguration(configurationPath, namespacePath, error) {

        if(error === null) {
            const parsedConfiguration = await this.#configurationParser.getConfigurationFromFile(configurationPath + CONFIG_FILE);

            const codeConfiguration = await ConfigurationConvertor.getCodeGeneratorConfiguration(
                parsedConfiguration,
                configurationPath + DEFAULT_CODE_DIRECTORY + DEFAULT_CODE_FILE
            );
            this.#codeGenerator.generate(
                codeConfiguration,
                this.#projectPath + DEFAULT_LIBRARY_DIRECTORY + namespacePath
            );

            const testConfiguration = await ConfigurationConvertor.getTestGeneratorConfiguration(parsedConfiguration);
            this.#testGenerator.generate(
                testConfiguration,
                configurationPath,
                this.#projectPath + DEFAULT_TEST_DIRECTORY + namespacePath
            );
        }
    }
}
