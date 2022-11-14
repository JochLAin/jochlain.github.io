import API from "../public/api.json";

export interface APIExperienceInterface {
  readonly kind: string,
  readonly grade?: string,
  readonly info?: string,
  readonly job?: string,
  readonly company?: string,
  readonly color: string,
  readonly start: string,
  readonly end?: string,
}

export interface ExperienceInterface {
  readonly kind: string,
  readonly grade?: string,
  readonly info?: string,
  readonly job?: string,
  readonly company?: string,
  readonly color: string,
  readonly start: Date,
  readonly end?: Date,
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const EXPERIENCES: ExperienceInterface[] = API.experiences.map((exp: APIExperienceInterface) => {
  const [startYear, startMonth] = exp.start.split('-');
  const start = new Date(Number(startYear), Number(startMonth) - 1);

  let end;
  if (exp.end) {
    const [endYear, endMonth] = exp.end.split('-');
    end = new Date(Number(endYear), Number(endMonth) - 1);
  }

  return { ...exp, start, end };
});
