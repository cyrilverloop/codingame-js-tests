import FileGenerator from "./FileGenerator.js";
import { access, constants } from 'node:fs/promises';


/**
 * The template file name.
 */
const TEMPLATE_FILE_NAME = 'CGCode.twig';

/**
 * The js file name.
 */
const JS_FILE_NAME = 'CGCode.js';


/**
 * The code generator.
 */
export default class CGCodeGenerator extends FileGenerator {

    // Methods :

    /**
     * Generates the code.
     * @param {GeneratorCodeConfiguration} configuration - the code configuration.
     * @param {string} toPath - the path where to put the generated code.
     */
    async generate(configuration, toPath) {
        try {
            await access(toPath + JS_FILE_NAME, constants.F_OK);
        }
        catch(error) {
            this.generateContent(configuration, toPath, JS_FILE_NAME, TEMPLATE_FILE_NAME);
        }
    }
}
