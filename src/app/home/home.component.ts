import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomelabComponent } from '../homelab/homelab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HomelabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
