import { TestBed, inject } from '@angular/core/testing';

import { PostsCreateServiceService } from './posts-create-service.service';

describe('PostsCreateServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsCreateServiceService]
    });
  });

  it('should be created', inject([PostsCreateServiceService], (service: PostsCreateServiceService) => {
    expect(service).toBeTruthy();
  }));
});
