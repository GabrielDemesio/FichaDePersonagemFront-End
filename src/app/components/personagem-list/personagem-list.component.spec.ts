import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemListComponent } from './personagem-list.component';

describe('PersonagemListComponent', () => {
  let component: PersonagemListComponent;
  let fixture: ComponentFixture<PersonagemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
