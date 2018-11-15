export interface TimePunchParams {
  punchIn: boolean;
  punchOut: boolean;
  time: string;
  userId: string;
}

export class TimePunch<Object> {
  public punchIn: boolean;
  public punchOut: boolean;
  public time: string;
  public userId: string;

  constructor(params: TimePunchParams) {
    this.punchIn = params.punchIn;
    this.punchOut = params.punchOut;
    this.cleanPuchQuality();
    this.time = params.time;
    this.userId = params.userId;
  }

  private cleanPuchQuality() {
    if (this.punchIn && this.punchOut) {
      throw new Error('Invalid Time Punch Quality. Both `punchIn` and `punchOut` cannot be true.');
    }
    if (this.punchIn) {
      return this.punchOut = false;
    }
    if (this.punchOut) {
      return this.punchIn = true;
    }
  }
}
