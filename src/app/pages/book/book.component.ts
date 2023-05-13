import { Component, OnInit } from '@angular/core';
import { faMap, faClipboard } from '@fortawesome/free-regular-svg-icons';
import { faFilter, faList } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import * as Aos from 'aos';
import { ApiService } from 'src/app/services/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BookModel } from 'src/app/models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  formValue!: FormGroup;
  bookModelObj: BookModel = new BookModel();

  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  Data!: any;
  constructor(private formbuilber: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formbuilber.group({
      id: [''],
      imgSrc: [''],
      destTitle: [''],
      location: [''],
      grade: [''],
      fees: [''],
      description: [''],
    });
    this.getAllBook();
  }
  Data1 = [
    {
      id: 1,
      imgSrc: '../../../assets/img.jpg',
      destTitle: 'Bora Bora',
      location: 'New Zealand',
      grade: 'CULTURAL RELAX',
      fees: '$700',
      description:
        'The epitome of romance, Bora Bora is one of the best travel destinations in the World. This place is known for its luxurious stays and adventurous activities',
    },
    {
      id: 2,
      imgSrc: '../../../assets/paris.jpg',
      destTitle: 'Paris',
      location: 'France',
      grade: 'CITY BREAK',
      fees: '$800',
      description:
        'The City of Light needs no introduction. Paris has it all: world-famous landmarks, museums, galleries, food, wine, and romantic walks along the Seine river.',
    },
    {
      id: 3,
      imgSrc: '../../../assets/tokyo.jpg',
      destTitle: 'Tokyo',
      location: 'Japan',
      grade: 'CULTURAL ADVENTURE',
      fees: '$1000',
      description:
        'Tokyo is the capital of Japan and one of the most vibrant cities in the world. It offers a mix of traditional Japanese culture and modern technology, making it a unique destination.',
    },
    {
      id: 4,
      imgSrc: '../../../assets/rome.jpg',
      destTitle: 'Rome',
      location: 'Italy',
      grade: 'CITY BREAK',
      fees: '$600',
      description:
        'Rome is the eternal city, known for its rich history, art, and architecture. It has something to offer for everyone, from ancient ruins to delicious Italian cuisine.',
    },
    {
      id: 5,
      imgSrc: '../../../assets/sydney.jpg',
      destTitle: 'Sydney',
      location: 'Australia',
      grade: 'BEACH HOLIDAY',
      fees: '$900',
      description:
        'Sydney is a vibrant city with a stunning harbour, beautiful beaches, and a laid-back lifestyle. It is a perfect destination for a beach holiday.',
    },
    {
      id: 6,
      imgSrc: '../../../assets/sahara.jpg',
      destTitle: 'Sahara Desert',
      location: 'Tunisie',
      grade: 'DESERT EXPEDITION',
      fees: '$100',
      description:
        'Embark on a desert adventure and explore the vast expanse of the Sahara Desert with its stunning sand dunes and nomadic culture.',
    },
    {
      id: 7,
      imgSrc: '../../../assets/new-york.jpg',
      destTitle: 'New York',
      location: 'USA',
      grade: 'CITY BREAK',
      fees: '$1200',
      description:
        'New York City is the city that never sleeps. It is a cultural hub, a fashion capital, and a foodie paradise. There is always something to do or see in New York.',
    },
    {
      id: 8,
      imgSrc: '../../../assets/barcelona.jpg',
      destTitle: 'Barcelona',
      location: 'Spain',
      grade: 'CITY BREAK',
      fees: '$600',
      description:
        'Barcelona is a vibrant city with a rich history, art, and architecture. It is famous for its food, wine, and culture.',
    },
    {
      id: 9,
      imgSrc: '../../../assets/camping.jpg',
      destTitle: 'Camping in Yosemite',
      location: 'United States',
      grade: 'ADVENTURE',
      fees: '$300',
      description:
        'Experience the great outdoors in Yosemite National Park with a camping trip. Enjoy hiking, rock climbing, and other outdoor activities in this breathtaking destination.',
    },
  ];

  vdbg = '../../../assets/bgh.mp4';
  img = '../../../assets/bgh.mp4';
  faMap = faMap;
  faFilter = faFilter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faList = faList;
  faClipboard = faClipboard;
  showAdd!: boolean;
  showUpdate!: boolean;

  getAllBook() {
    this.api.getBook().subscribe((res) => {
      this.Data = res;
    });
  }

  clickAddBook() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postBookDetails() {
    this.bookModelObj.id = this.formValue.value.id;
    this.bookModelObj.imgSrc = this.formValue.value.imgSrc;
    this.bookModelObj.destTitle = this.formValue.value.destTitle;
    this.bookModelObj.location = this.formValue.value.location;
    this.bookModelObj.grade = this.formValue.value.grade;
    this.bookModelObj.fees = this.formValue.value.fees;
    this.bookModelObj.description = this.formValue.value.description;

    this.api.postBook(this.bookModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Book Added Successfully');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
      },
      (err) => {
        alert('Something wrong');
      }
    );
  }

  deleteAllBook(item: any) {
    this.api.deleteBook(item.id).subscribe((res) => {
      alert('Book Deleted');
    });
  }

  onEdit(item: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.bookModelObj.id = item.id;
    this.formValue.controls['id'].setValue(item.id);
    this.formValue.controls['imgSrc'].setValue(item.imgSrc);
    this.formValue.controls['destTitle'].setValue(item.destTitle);
    this.formValue.controls['location'].setValue(item.location);
    this.formValue.controls['grade'].setValue(item.grade);
    this.formValue.controls['fees'].setValue(item.fees);
    this.formValue.controls['description'].setValue(item.description);
  }

  updateBookDetails() {
    this.bookModelObj.id = this.formValue.value.id;
    this.bookModelObj.imgSrc = this.formValue.value.imgSrc;
    this.bookModelObj.destTitle = this.formValue.value.destTitle;
    this.bookModelObj.location = this.formValue.value.location;
    this.bookModelObj.grade = this.formValue.value.grade;
    this.bookModelObj.fees = this.formValue.value.fees;
    this.bookModelObj.description = this.formValue.value.description;
    this.api.updateBook(this.bookModelObj, this.bookModelObj.id).subscribe(
      (res) => {
        alert('Updated Successfully');
        let ref = document.getElementById('cancel');
        if (ref) {
          ref.click();
        }
        this.formValue.reset();
      },
      (error) => {
        console.error('Update failed:', error);
        alert('Update failed, please try again');
      }
    );
  }
}
Aos.init({
  duration: 2000,
});
