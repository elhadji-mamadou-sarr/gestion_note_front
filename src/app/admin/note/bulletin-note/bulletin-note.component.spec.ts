import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletinNoteComponent } from './bulletin-note.component';

describe('BulletinNoteComponent', () => {
  let component: BulletinNoteComponent;
  let fixture: ComponentFixture<BulletinNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulletinNoteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BulletinNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
