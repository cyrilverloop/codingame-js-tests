import Twig from 'twig';
import { mkdir, writeFile } from 'node:fs/promises';

/**
 * the generator base class.
 */
export default class FileGenerator {

    // Properties :

    templatePath;


    // Constructor :

    /**
     * The constructor.
     * @param {string} templatePath - the template path.
     */
    constructor(templatePath) {
        this.templatePath = templatePath;
    }


    // Methods :

    /**
     * Generates the file.
     * @param {GeneratorCodeConfiguration|GeneratorTestConfiguration} configuration - the configuration.
     * @param {string} toPath - the path where to put the generated file.
     * @throws {Error} this method must be implemented in sub-classes.
     */
    async generate(configuration, toPath) {
        throw new Error("This method must be overriden !");
    }

    /**
     * Generates the file content.
     * @param {GeneratorCodeConfiguration|GeneratorTestConfiguration} configuration - the  configuration.
     * @param {string} path - the path.
     * @param {string} file - the file.
     * @param {string} templateFile - the template file.
     */
    generateContent(configuration, path, file, templateFile) {
        Twig.renderFile(
            this.templatePath + templateFile,
            {'configuration': configuration},
            this.#writeFile.bind(this, path, file)
        );
    }

    /**
     * Write the file.
     * @param {string} path - the path.
     * @param {string} file - the file.
     * @param {string} content - the content.
     * @param {Error} error - if the content could not be generated.
     * @throws {Error} - if the content could not be generated.
     * @throws {Error} - if file could not be written.
     */
    async #writeFile(path, file, error, content) {

        if(error !== null) {
            throw new Error("Could not generate file content.");
        }

        try {
            await mkdir(path, { recursive: true });
            await writeFile(path + file, content);
        }
        catch(error) {
            throw new Error("Could not write file : " + error.message);
        }
    }
}
