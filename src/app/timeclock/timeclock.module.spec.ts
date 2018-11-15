import { TimeclockModule } from './timeclock.module';

describe('TimeclockModule', () => {
  let timeclockModule: TimeclockModule;

  beforeEach(() => {
    timeclockModule = new TimeclockModule();
  });

  it('should create an instance', () => {
    expect(timeclockModule).toBeTruthy();
  });
});
