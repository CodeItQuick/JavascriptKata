import { PluginKind, declareValuePlugin } from '@stryker-mutator/api/plugin';
import FooTestRunner from "./foo-test-runner.js";

export const strykerPlugins = [declareValuePlugin(PluginKind.Ignore, 'console.debug', FooTestRunner)];