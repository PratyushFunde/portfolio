import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { profile } from 'console';
import { ProfileComponent } from './components/profile/profile.component';
import { EducationComponent } from './components/education/education.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    
    {path:'contact',component:ContactComponent},
    {path:'profile',component:ProfileComponent},
    {path:'education',component:EducationComponent},
    {path:'projects',component:ProjectsComponent}

    
];
