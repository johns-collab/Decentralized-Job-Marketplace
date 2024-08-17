import crypto from 'node:crypto';

export class Application {
    id;
    jobId;
    applicant;
    submittedAt;
    resume;
    coverLetter;

    constructor({ jobId, applicant, resume, coverLetter }) {
        this.id = crypto.randomUUID();
        this.jobId = jobId;
        this.applicant = applicant;
        this.submittedAt = Date.now();
        this.resume = resume;
        this.coverLetter = coverLetter;
    }

    getData() {
        return {
            id: this.id,
            jobId: this.jobId,
            applicant: this.applicant,
            submittedAt: this.submittedAt,
            resume: this.resume,
            coverLetter: this.coverLetter,
        };
    }
}
