import { MovieBookingModule } from './movie-booking.module';

describe('MovieBookingModule', () => {
  let movieBookingModule: MovieBookingModule;

  beforeEach(() => {
    movieBookingModule = new MovieBookingModule();
  });

  it('should create an instance', () => {
    expect(movieBookingModule).toBeTruthy();
  });
});
