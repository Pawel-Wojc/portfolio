import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomelabComponent } from './homelab/homelab.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'projects',
    component: ProjectsComponent,
  },
  {
    path: 'homelab',
    component: HomelabComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
