import {Routes} from '@angular/router';
import {UsersComponent} from "./users.component";

export const userRoutes: Routes = [
  {
    path: ':id',
    component: UsersComponent,
  }
]
