import { MovieNameModule } from './movie-name.module';

describe('MovieNameModule', () => {
  let movieNameModule: MovieNameModule;

  beforeEach(() => {
    movieNameModule = new MovieNameModule();
  });

  it('should create an instance', () => {
    expect(movieNameModule).toBeTruthy();
  });
});
