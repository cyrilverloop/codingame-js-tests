import { assert } from 'chai';
import { file } from 'chai-files';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { readFile } from 'node:fs/promises';
import ConfigurationConvertor from '../../lib/configuration/ConfigurationConvertor.js';
import TestConfiguration from '../../lib/configuration/TestConfiguration.js';
import ParsedConfiguration from '../../lib/parser/ParsedConfiguration.js';

const __dirname = dirname(fileURLToPath(import.meta.url)) + "/";

suite("ConfigurationConvertor", function() {

    suite("The ParsedConfiguration converted to GeneratorCodeConfiguration", function() {

        test("Throws an Error when the parsed configuration file is not readable", function() {
            const defaultCodeFile = __dirname + '../generator/example/non-existant-CGCode.dist';

            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            try {
                ConfigurationConvertor.getGeneratorCodeConfiguration(
                    parsedConfiguration,
                    defaultCodeFile
                );
            }
            catch(error) {
                assert.strictEqual(error.message, "Configuration file not readable.");
            }
        });

        test("Throws an Error if the default code file is not a string", function() {
            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            try {
                ConfigurationConvertor.getGeneratorCodeConfiguration(
                    parsedConfiguration,
                    123
                );
            }
            catch(error) {
                assert.strictEqual(error.message, "The default code file is not a string.");
            }
        });

        test("Has a path", async function() {
            const defaultCodeFile = __dirname + '../generator/example/CGCode.dist';

            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorCodeConfiguration = await ConfigurationConvertor.getGeneratorCodeConfiguration(
                parsedConfiguration,
                defaultCodeFile
            );

            assert.strictEqual(generatorCodeConfiguration.path, 'test-path');
        });

        test("Has a name", async function() {
            const defaultCodeFile = __dirname + '../generator/example/CGCode.dist';

            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorCodeConfiguration = await ConfigurationConvertor.getGeneratorCodeConfiguration(
                parsedConfiguration,
                defaultCodeFile
            );

            assert.strictEqual(generatorCodeConfiguration.name, 'test-name');
        });

        test("Has a link", async function() {
            const defaultCodeFile = __dirname + '../generator/example/CGCode.dist';

            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorCodeConfiguration = await ConfigurationConvertor.getGeneratorCodeConfiguration(
                parsedConfiguration,
                defaultCodeFile
            );

            assert.strictEqual(generatorCodeConfiguration.link, 'test-link');
        });

        test("Has a default code", async function() {
            const defaultCodeFile = __dirname + '../generator/example/CGCode.dist';

            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorCodeConfiguration = await ConfigurationConvertor.getGeneratorCodeConfiguration(
                parsedConfiguration,
                defaultCodeFile
            );

            assert.strictEqual(
                generatorCodeConfiguration.defaultCode,
                file(__dirname + '../generator/example/CGCodeIndented.dist').content
            );
        });
    });

    suite("The ParsedConfiguration converted to GeneratorTestConfiguration", function() {

        test("Has a path", function() {
            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorTestConfiguration = ConfigurationConvertor.getGeneratorTestConfiguration(parsedConfiguration);

            assert.strictEqual(generatorTestConfiguration.path, 'test-path');
        });

        test("Has a name", function() {
            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorTestConfiguration = ConfigurationConvertor.getGeneratorTestConfiguration(parsedConfiguration);

            assert.strictEqual(generatorTestConfiguration.name, 'test-name');
        });

        test("Has test configurations", function() {
            const testConfigurations = [
                new TestConfiguration('name', 'file')
            ];

            const parsedConfiguration = new ParsedConfiguration(
                'test-path',
                'test-name',
                'test-link',
                testConfigurations
            );

            const generatorTestConfiguration = ConfigurationConvertor.getGeneratorTestConfiguration(parsedConfiguration);

            for(const testConfiguration of generatorTestConfiguration.testConfigurations) {
                assert.strictEqual(testConfiguration.name, 'name');
                assert.strictEqual(testConfiguration.file, 'file');
            }
        });
    });
});
