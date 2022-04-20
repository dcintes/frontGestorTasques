import { TestBed } from '@angular/core/testing';

import { TemplateRewardService } from './template-reward.service';

describe('TemplateRewardService', () => {
  let service: TemplateRewardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateRewardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
