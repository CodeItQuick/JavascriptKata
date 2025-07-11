import { DryRunStatus, MutantRunStatus } from '@stryker-mutator/api/test-runner';
export default class FooTestRunner {
    capabilities() {
        return { reloadEnvironment: true };
    }
    init() {
        // TODO: Implement or remove
        return Promise.resolve();
    }
    dryRun(options) {
        // TODO: Implement
        const tests = [];
        return Promise.resolve({
            tests,
            status: DryRunStatus.Complete
        });
    }
    mutantRun(options) {
        // TODO: Implement
        return Promise.resolve({
            nrOfTests: 42,
            status: MutantRunStatus.Survived
        });
    }
    dispose() {
        // TODO: Implement or remove
        return Promise.resolve();
    }
}
