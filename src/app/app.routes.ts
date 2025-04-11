import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HelpPageComponent } from './components/help-page/help-page.component';
import { PlanComparisonHelpComponent } from './components/plan-comparison-help/plan-comparison-help.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'pagalba', component: HelpPageComponent },
    { path: 'palyginimas', component: PlanComparisonHelpComponent },
    { path: '**', redirectTo: '' }
];
