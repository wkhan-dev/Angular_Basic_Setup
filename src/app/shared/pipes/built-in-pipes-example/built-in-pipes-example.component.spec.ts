import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInPipesExampleComponent } from './built-in-pipes-example.component';

describe('BuiltInPipesExampleComponent', () => {
  let component: BuiltInPipesExampleComponent;
  let fixture: ComponentFixture<BuiltInPipesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInPipesExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInPipesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
