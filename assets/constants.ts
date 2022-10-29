import API from "../public/api.json";

export interface APIExperienceInterface {
  readonly kind: string,
  readonly grade?: string,
  readonly info?: string,
  readonly job?: string,
  readonly company?: string,
  readonly color: string,
  readonly start?: string,
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
  readonly end: Date,
}

export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const MIN_DATE = new Date(2022, 10);
const NOW = new Date();

export const EXPERIENCES: ExperienceInterface[] = API.experiences.map((exp: APIExperienceInterface) => {
  // let start = NOW < MIN_DATE ? MIN_DATE : NOW;
  // let end = NOW < MIN_DATE ? MIN_DATE : NOW;
  let start;
  let end;

  if (exp.start) {
    const [startYear, startMonth] = exp.start.split('-');
    start = new Date(Number(startYear), Number(startMonth) - 1);
  }
  if (exp.end) {
    const [endYear, endMonth] = exp.end.split('-');
    end = new Date(Number(endYear), Number(endMonth) - 1);
  }

  return { ...exp, start, end };
});
