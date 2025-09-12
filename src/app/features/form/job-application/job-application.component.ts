import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';
import {
  customEmailValidator,
  noSpaceValidator,
} from '../form-validators/validator';

@Component({
  selector: 'app-job-application',
  templateUrl: './job-application.component.html',
  styleUrls: ['./job-application.component.css'],
})
export class JobApplicationComponent {
  fullName = new FormControl('', [Validators.required, noSpaceValidator]);
  email = new FormControl('', [
    Validators.required,
    noSpaceValidator,
    customEmailValidator,
  ]);
  password = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);
  age = new FormControl('', [Validators.required, Validators.min(18)]);
  gender = new FormControl('', Validators.required);
  qualification = new FormControl('', Validators.required);
  dob = new FormControl('', Validators.required);
  coverLetter = new FormControl('');
  resume = new FormControl(null, Validators.required);
  terms = new FormControl(false, Validators.requiredTrue);
  //hello=new FormControl({value:1,disabled:true},Validators.required,null)
  // // Optional: getter to return comma-separated string
  // get selectedSkills(): string {
  //    const value = this.skills.value;       // value can be string[] or null
  //    console.log(value)
  // return value ? value.join(', ') : '';  // if null, return empty string
  // }
  // Skills options
  skillsList = ['Angular', 'React', 'Node.js', 'Python', 'Java', 'C#'];

  // Multi-select FormControl
  skills = new FormControl([], Validators.required);

  workModesControl = new FormControl([], {
    nonNullable: true,
    validators: Validators.required,
  });
  workModesList = ['Remote', 'On-site', 'Hybrid', 'Flexible Hours'];

  // Submit
  onSubmit() {
    console.log('Selected Skills:', this.skills.value);
  }

  // Work experiences as FormArray
  experiences = new FormArray([]);

  // Add experience
  addExperience() {
    // this.experiences.push(
    //   new FormGroup({
    //     company: new FormControl('', Validators.required),
    //     years: new FormControl('', Validators.required),
    //     role: new FormControl('', Validators.required),
    //   })
    // );
  }

  // Remove experience
  removeExperience(index: number) {
    this.experiences.removeAt(index);
  }
}
