import { PluginKind, declareValuePlugin } from '@stryker-mutator/api/plugin';
export const strykerPlugins = [declareValuePlugin(PluginKind.Ignore, 'console.debug', {
        shouldIgnore(path) {
            // Define the conditions for which you want to ignore mutants
            if (path.isExpressionStatement() &&
                path.node.expression.type === 'CallExpression' &&
                path.node.expression.callee.type === 'MemberExpression' &&
                path.node.expression.callee.object.type === 'Identifier' &&
                path.node.expression.callee.object.name === 'console' &&
                path.node.expression.callee.property.type === 'Identifier' &&
                path.node.expression.callee.property.name === 'debug') {
                // Return the ignore reason
                return "We're not interested in testing `console.debug` statements, see ADR 648.";
            }
        }
    })];
