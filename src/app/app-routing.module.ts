import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewCourseComponent } from './view-course/view-course.component';

const routes: Routes = [{path:"addcourse",component:AddcourseComponent},{path:"",component:ViewCourseComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
