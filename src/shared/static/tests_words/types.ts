export interface TestsWordsInterface {
  id: number;
  valid: string;
  invalid: string;
  probability?: number;
  uncorrectTimes?: number;
  consecutivelyTimes?: number;
  inProgress?: boolean;
}