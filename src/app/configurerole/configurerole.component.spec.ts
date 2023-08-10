import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureroleComponent } from './configurerole.component';

describe('ConfigureroleComponent', () => {
  let component: ConfigureroleComponent;
  let fixture: ComponentFixture<ConfigureroleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfigureroleComponent]
    });
    fixture = TestBed.createComponent(ConfigureroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
