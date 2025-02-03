import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagsfilterComponent } from './tagsfilter.component';

describe('TagsfilterComponent', () => {
  let component: TagsfilterComponent;
  let fixture: ComponentFixture<TagsfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagsfilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagsfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
