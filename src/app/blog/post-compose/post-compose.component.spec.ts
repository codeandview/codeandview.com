import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostComposeComponent } from './post-compose.component';

describe('PostComposeComponent', () => {
  let component: PostComposeComponent;
  let fixture: ComponentFixture<PostComposeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostComposeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
