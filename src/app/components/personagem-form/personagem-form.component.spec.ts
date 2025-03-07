import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemFormComponent } from './personagem-form.component';

describe('PersonagemFormComponent', () => {
  let component: PersonagemFormComponent;
  let fixture: ComponentFixture<PersonagemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
