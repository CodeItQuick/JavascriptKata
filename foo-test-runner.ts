import {
    TestRunner,
    DryRunResult,
    DryRunOptions,
    MutantRunOptions,
    MutantRunResult,
    DryRunStatus, SuccessTestResult, MutantRunStatus, SurvivedMutantRunResult,
    TestRunnerCapabilities
} from '@stryker-mutator/api/test-runner';

export default class FooTestRunner implements TestRunner {
    capabilities(): Promise<TestRunnerCapabilities> | TestRunnerCapabilities {
        return { reloadEnvironment: true };
    }
    public init(): Promise<void> {
        // TODO: Implement or remove
        return Promise.resolve();
    }

    public dryRun(options: DryRunOptions): Promise<DryRunResult> {
        // TODO: Implement
        const tests: SuccessTestResult[] = [];
        return Promise.resolve({
            tests,
            status: DryRunStatus.Complete
        });
    }

    public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {
        // TODO: Implement
        return Promise.resolve({
            nrOfTests: 42,
            status: MutantRunStatus.Survived
        });
    }

    public dispose(): Promise<void> {
        // TODO: Implement or remove
        return Promise.resolve();
    }
}