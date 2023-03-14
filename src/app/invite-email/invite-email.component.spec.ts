import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteEmailComponent } from './invite-email.component';

describe('InviteEmailComponent', () => {
  let component: InviteEmailComponent;
  let fixture: ComponentFixture<InviteEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InviteEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InviteEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
