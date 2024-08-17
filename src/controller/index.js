import { JobListingController } from './job-listing';
import { ApplicationController } from './application';

const jobListingController = new JobListingController();
const applicationController = new ApplicationController();

export const controller = {
    createJobListing: jobListingController.createJobListing,
    getAllJobListings: jobListingController.getAllJobListings,
    getJobListingById: jobListingController.getJobListingById,
    applyForJob: applicationController.applyForJob,
    getApplicationById: applicationController.getApplicationById,
};
