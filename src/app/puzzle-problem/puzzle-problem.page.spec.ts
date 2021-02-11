import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PuzzleProblemPage } from './puzzle-problem.page';

describe('PuzzleProblemPage', () => {
  let component: PuzzleProblemPage;
  let fixture: ComponentFixture<PuzzleProblemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleProblemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PuzzleProblemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
