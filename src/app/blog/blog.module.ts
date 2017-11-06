import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostSingleComponent } from './post-single/post-single.component';
import { PostComposeComponent } from './post-compose/post-compose.component';
import { PostEditComponent } from './post-edit/post-edit.component';

import { TranslateModule } from '@ngx-translate/core';
import { LocalizeRouterModule } from 'localize-router';

let routes = [
  { path: '', component: PostsComponent },
  { path: 'compose', component: PostComposeComponent },
  { path: ':slug', component: PostSingleComponent },
  { path: 'edit/:slug', component: PostEditComponent }
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    LocalizeRouterModule.forChild(routes),
    RouterModule.forChild(routes)
  ],
  declarations: [PostsComponent, PostSingleComponent, PostComposeComponent, PostEditComponent]
})
export class BlogModule { }
