import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemDetailComponent } from './personagem-detail.component';

describe('PersonagemDetailComponent', () => {
  let component: PersonagemDetailComponent;
  let fixture: ComponentFixture<PersonagemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
