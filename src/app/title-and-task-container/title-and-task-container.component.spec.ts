import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAndTaskContainerComponent } from './title-and-task-container.component';

describe('TitleAndTaskContainerComponent', () => {
  let component: TitleAndTaskContainerComponent;
  let fixture: ComponentFixture<TitleAndTaskContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleAndTaskContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAndTaskContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
