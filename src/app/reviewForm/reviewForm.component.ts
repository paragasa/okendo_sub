import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviewForm',
  templateUrl: './reviewForm.component.html',
  styleUrls: ['./reviewForm.component.css']
})
export class ReviewFormComponent implements OnInit {

  constructor( private fb: FormBuilder, private router: Router ) { }
  main_head = 'Review';
  reviewForm: FormGroup;
  ratingForm: FormGroup;
  reviewShow = true;
  ratingShow = false;
  finished = false;

  standoutOptions = [
    'Accurate TimeKeeping',
    'High Quality',
    'Durable',
    'Elegant',
    'Good Weight',
    'Versatile',
    'Looks Expensive',
    'Attracts Compliments',
    'Unique',
    'Great Gift',
    'Great Value'
  ];

  ages = [
    'Under 18',
    '18 - 24',
    '25 - 34',
    '35 - 44',
    '45 - 54',
    '55 - 64',
    '65+',
  ];
  boughtForList = [
    'Personal Use',
    'Gift'
  ];
  countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas'
	, 'Bahrain', 'Bangladesh', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'United States Minor Outlying Islands', 'Uruguay'
	, 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'];


  age: any;
  selectedStandouts = {};
  boughtFor: any;
  country: any;

  ngOnInit() {
    this.createForms();

  }

  toggleRecommendation(recommendation) {
    this.reviewForm.controls.recommendation.setValue(recommendation);

  }
  pickStandout(option) {
    if (this.selectedStandouts[option] === 1) {
      this.deleteOption(option);
    } else if (Object.keys(this.selectedStandouts).length < 5) {
      this.selectedStandouts[option]  = 1;
    }
  }
  private deleteOption(option) {

    delete this.selectedStandouts[option];

  }

  setBought(option) {
    this.ratingForm.controls.boughtFor.setValue(option);
  }
  setAge(age) {
    this.ratingForm.controls.age.setValue(age);
  }
  setQuality(rate) {
    this.ratingForm.controls.quality.setValue(rate);
  }
  setDesign(rate) {
    this.ratingForm.controls.design.setValue(rate);
  }
  setExperience(rate) {
    this.ratingForm.controls.experience.setValue(rate);
  }


  createForms() {
    this.reviewForm = this.fb.group({
      rating: ['', Validators.required],
      title: ['', Validators.required],
      review: ['', Validators.required],
      recommendation: ['', Validators.required]
    });

    this.ratingForm = this.fb.group({
      quality: ['', Validators.required],
      design: ['', Validators.required],
      experience: ['', Validators.required],
      standouts: [this.selectedStandouts],
      age: ['', Validators.required],
      boughtFor: ['', Validators.required],
      country: ['', Validators.required]
    });

  }
  private markFormGroupTouched(formGroup: FormGroup) {
    ( Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  submitReview() {
    if (this.reviewForm.valid) {
      this.reviewShow = false;
      this.ratingShow = true;
      this.main_head = 'Rating';
    } else {
      this.markFormGroupTouched(this.reviewForm);
    }
  }
  submitRating() {
    if (this.ratingForm.valid) {
      this.main_head = 'Confirmation Page';
      this.ratingShow = false;
      this.finished = true;
    } else {
      this.markFormGroupTouched(this.ratingForm);
      }
  }


}
