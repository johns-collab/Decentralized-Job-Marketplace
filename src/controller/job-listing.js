import { JobListing } from '../model/job-listing';
import { RollupStateHandler } from '../rollup-state-handler';
import { jobStorage } from '../job-storage';

export class JobListingController {
    async createJobListing(data) {
        if (!data.employer || !data.title) {
            return await RollupStateHandler.handleReport({
                error: 'Employer address and job title must be provided.',
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            const newJobListing = new JobListing(data);
            jobStorage.addOne(newJobListing);

            return {
                ok: true,
                message: 'Job listing created successfully!',
                data: newJobListing.getData(),
            };
        });
    }

    async getAllJobListings() {
        return await RollupStateHandler.inspectWrapper(() =>
            jobStorage.getAll()
        );
    }

    async getJobListingById(data) {
        const jobId = data[0];
        const jobListing = jobStorage.getOneById(jobId);

        if (!jobListing?.id)
            return await RollupStateHandler.handleReport({
                error: `Job listing not found for id '${jobId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: jobListing.getData(),
        }));
    }
}
