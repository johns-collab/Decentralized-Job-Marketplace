import crypto from 'node:crypto';

export class JobListing {
    id;
    employer;
    createdAt;
    title;
    description;
    applications;

    constructor({ employer, title, description }) {
        this.id = crypto.randomUUID();
        this.employer = employer;
        this.createdAt = Date.now();
        this.title = title;
        this.description = description;
        this.applications = new Map();
    }

    getData() {
        return {
            id: this.id,
            employer: this.employer,
            createdAt: this.createdAt,
            title: this.title,
            description: this.description,
        };
    }

    getApplicationById(id) {
        return this.applications.get(id);
    }

    getApplications() {
        return Array.from(this.applications.values());
    }

    addApplication(application) {
        this.applications.set(application.id, application);
    }
}
