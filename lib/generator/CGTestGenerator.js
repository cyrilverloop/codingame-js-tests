import FileGenerator from "./FileGenerator.js";
import { access, constants, copyFile, mkdir, readdir, writeFile } from 'node:fs/promises';
import path from 'path';


/**
 * The template file name.
 */
const TEMPLATE_FILE_NAME = 'CGTest.twig';

/**
 * The js file name.
 */
const JS_FILE_NAME = 'CGTest.js';

/**
 * The input path.
 */
const INPUT_PATH = 'input' + path.sep;

/**
 * The output path.
 */
const OUTPUT_PATH = 'output' + path.sep;


/**
 * The test generator.
 */
export default class CGTestGenerator extends FileGenerator {

    // Methods :

    /**
     * Generates the test.
     * @param {GeneratorTestConfiguration} configuration - the test configuration.
     * @param {string} fromPath - the path where the config file is.
     * @param {string} toPath - the path where to put the generated test.
     */
    async generate(configuration, fromPath, toPath) {
        try {
            await access(toPath + JS_FILE_NAME, constants.F_OK);
        }
        catch(error) {
            this.generateContent(configuration, toPath, JS_FILE_NAME, TEMPLATE_FILE_NAME);
        }

        this.#copyFiles(
            fromPath + INPUT_PATH,
            toPath + INPUT_PATH
        );

        this.#copyFiles(
            fromPath + OUTPUT_PATH,
            toPath + OUTPUT_PATH
        );
    }

    /**
     * Copies files.
     * @param {string} fromPath - the path of the configuration.
     * @param {string} toPath - the path of the test.
     * @throws {Error} - if the directory could not be created.
     */
    async #copyFiles(fromPath, toPath) {
        const fromPathContent = await readdir(fromPath);
        const fromPathContentLength = fromPathContent.length;

        try {
            await mkdir(toPath, { recursive: true });
        }
        catch(error) {
            throw new Error("Directory can not be created.");
        }

        for(let fromPathIndex = 0; fromPathIndex < fromPathContentLength; fromPathIndex++) {

            try {
                await access(
                    toPath + fromPathContent[fromPathIndex],
                    constants.F_OK
                )
            }
            catch(error) {
                this.#copyFile(
                    fromPath + fromPathContent[fromPathIndex],
                    toPath + fromPathContent[fromPathIndex]
                )
            }
        }
    }

    /**
     * Copy the file.
     * @param {string} fromFile - the source file.
     * @param {string} toFile - the destination file.
     * @throws {Error} - if the file could not be copied.
     */
    async #copyFile(fromFile, toFile) {

        try {
            await copyFile(fromFile, toFile);
        }
        catch(error) {
            throw new Error("Could not copy file : " + toFile);
        }
    }
}
