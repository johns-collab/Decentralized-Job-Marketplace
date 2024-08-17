class JobStorage {
    jobs;

    constructor() {
        this.jobs = new Map();
    }

    getAll() {
        return Array.from(this.jobs.values());
    }

    addOne(job) {
        this.jobs.set(job.id, job);
    }

    getOneById(id) {
        return this.jobs.get(id);
    }

    updateOne(job) {
        this.jobs.set(job.id, job);
    }
}

export const jobStorage = new JobStorage();
