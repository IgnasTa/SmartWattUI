import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { forkJoin } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  selectedFile: File | null = null;
  uploadMessage: string = '';
  plan1Result: any = null;
  plan2Result: any = null;

  constructor(private apiService: ApiService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      if (!this.selectedFile.name.endsWith('.csv')) {
        this.uploadMessage = 'Please select a CSV file.';
        this.selectedFile = null;
      } else {
        this.uploadMessage = `Pasirinktas failas: ${this.selectedFile.name}`;
      }
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.uploadMessage = 'Skaičiuojamos planų kainos...';
  
      forkJoin({
        plan1: this.apiService.getplanOne(this.selectedFile),
        plan2: this.apiService.getplanTwo(this.selectedFile)
      }).subscribe({
        next: ({ plan1, plan2 }) => {
          this.plan1Result = plan1;
          this.plan2Result = plan2;
          this.uploadMessage = 'Palyginimas paruoštas!';
        },
        error: (err) => {
          this.uploadMessage = 'Error during upload: ' + err.message;
        }
      });
    } else {
      this.uploadMessage = 'No file selected.';
    }
  }

  checkIfBothResponsesReceived(): void {
    if (this.plan1Result && this.plan2Result) {
      console.log("both got a quate");
      
      this.uploadMessage = 'Comparison ready!';
    }
  }

  getCheaperPlan(): string {
    if (!this.plan1Result || !this.plan2Result) return '';
    return this.plan1Result.planPrice < this.plan2Result.planPrice ? 'Atsiskaitymas kilovatvalandėmis už saugomą energiją' : 'Atsiskaitymas 6,667 ct už kiekvieną pasaugotą kWh';
  }
}
