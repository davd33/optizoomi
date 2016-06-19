import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CsszoomAppComponent } from '../app/csszoom.component';

beforeEachProviders(() => [CsszoomAppComponent]);

describe('App: Csszoom', () => {
  it('should create the app',
      inject([CsszoomAppComponent], (app: CsszoomAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'csszoom works!\'',
      inject([CsszoomAppComponent], (app: CsszoomAppComponent) => {
    expect(app.title).toEqual('csszoom works!');
  }));
});
