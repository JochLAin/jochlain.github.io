
export interface ExperienceInterface {
    readonly kind: 'grade'|'job'|'both',
    readonly grade ?: string,
    readonly info ?: string,
    readonly job ?: string,
    readonly company ?: string,
    readonly color: string,
    readonly icon: string,
    readonly start: Date,
    readonly end: Date,
}
