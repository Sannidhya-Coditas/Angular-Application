import { HttpClient } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UserService } from '../services/UserService';
import { UserDetails } from '../constants/types';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css'],
})
export class ShelfComponent {
  @Input() userId: number | null = null; // user data from parent
  @Input() isOpen: boolean = false; // control visibility
  @Output() close = new EventEmitter<void>(); // notify parent to close
  @Output() saved = new EventEmitter<UserDetails>(); // emits updated user

  user: UserDetails | null = null;
  skillsString: string = '';
  loading = false;

  constructor(
    private http: HttpClient,
    private objuserService: UserService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['userId'] && this.userId && this.isOpen) {
      this.fetchUserDetails();
    }
  }

  fetchUserDetails() {
    this.loading = true;
    this.objuserService.getUserDetailsbyID(this.userId!).subscribe({
      next: (data: UserDetails | null) => {
        if (data) {
          this.user = data;
          this.skillsString = data.skills.join(', ');
        } else {
          this.user = null;
          this.skillsString = '';
        }
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching user details', err);
        this.loading = false;
      },
    });
  }

  onSkillsChange(value: string) {
    // this.skillsString = value;
    // this.user.skills = value
    //   .split(',')
    //   .map((s) => s.trim())
    //   .filter((s) => s);
  }

  onClose() {
    this.close.emit();
  }
  SaveData() {
    if (!this.user) return;

    this.objuserService.updateUserDetails(this.user).subscribe({
      next: (response: any) => {
        //console.log('User updated:', updatedUser);
        this.saved.emit(response.user); // emit to parent
        this.onClose(); // close drawer
      },
      error: (err) => console.error('Error updating user', err),
    });
  }
}
