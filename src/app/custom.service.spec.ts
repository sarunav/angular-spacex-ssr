import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { CustomService } from './custom.service';

describe('CustomService', () => {
  let service: CustomService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
