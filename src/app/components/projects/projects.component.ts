import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { link } from 'fs';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgFor],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects=[
    {
      name:'Travel-book',
      desc:'Website to store traveling moments . You can visit the saved pages and get details about the travel. Can be used as travel guide also.',
      languages:['HTML','CSS','TypeScript','Angular'],
      link:'https://github.com/PratyushFunde/travel-book'
    },
    {
      name:'Find-Movie-Info',
      desc:'Website to show movie information including IMDB rating,Year etc..',
      languages:['HTML','CSS','JavaScript','React','Api'],
      link:'https://github.com/PratyushFunde/Movies-Site'
    },

    {
      name:'Pneumonia_Prediction_Using_Image',
      desc:'Project which uses tensor model to predict if there is Pneumonia or not , frontend is in Vite + React and server is made using Fast API , If there is Pneumonia it shows Output as Pneumonia else Normal.',
      languages:['Python','FastApi','Jupyter','React'],
      link:'https://github.com/PratyushFunde/Student_Grade_Manager'
    },
    {
      name:'Student-Grade-Manager',
      desc:'Python script to add marks of students, create new sheets and add records to them as ell as you can delete the sheet',
      languages:['Python','Xlsx'],
      link:'https://github.com/PratyushFunde/Student_Grade_Manager'
    }
  ]
}
