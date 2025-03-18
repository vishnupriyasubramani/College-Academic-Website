import { TestBed } from '@angular/core/testing';

import { CollegeAcademicService } from './college-academic.service';

describe('CollegeAcademicService', () => {
  let service: CollegeAcademicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeAcademicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
