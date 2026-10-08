import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Us } from './us/us';
import { Notfound } from './notfound/notfound';
import { Expand } from './expand/expand';
import { MasteringGolden } from './mastering-golden/mastering-golden';
import { Bolgnormal } from './bolgnormal/bolgnormal';
import { Landscapephotography } from './landscapephotography/landscapephotography';
import { Settingcamera } from './settingcamera/settingcamera';
import { Rolescreate } from './rolescreate/rolescreate';
import { Phonecamera } from './phonecamera/phonecamera';
import { Blog12 } from './blog/blog';
import { PostDetails } from './nightphotography/nightphotography';
import { Longtan } from './longtan/longtan';
import { Camerabases } from './camerabases/camerabases';
import { StreatCamera } from './streat-camera/streat-camera';
import { Cameraparty } from './cameraparty/cameraparty';
import { Camerasprot } from './camerasprot/camerasprot';
import { Camerababy } from './camerababy/camerababy';
import { Cameraself } from './cameraself/cameraself';
import { Cameranature } from './cameranature/cameranature';
import { Cameraticher } from './cameraticher/cameraticher';
import { Cameratravel } from './cameratravel/cameratravel';
import { Camerarestuarant } from './camerarestuarant/camerarestuarant';
import { Camerareblack } from './camerareblack/camerareblack';
import { Camermacro } from './camermacro/camermacro';
import { Camerproduct } from './camerproduct/camerproduct';
import { Camertheory } from './camertheory/camertheory';
import { Camerhouses } from './camerhouses/camerhouses';
import { Cameresimple } from './cameresimple/cameresimple';
import { Camereliteroom } from './camereliteroom/camereliteroom';
import { Camererotation } from './camererotation/camererotation';
import { Camereraw } from './camereraw/camereraw';
import { Camerabeginner } from './camerabeginner/camerabeginner';
import { Policy } from './policy/policy';
import { Rolesaa } from './rolesaa/rolesaa';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'home page' },
  { path: 'Policy', component: Policy, title: 'Policy page' },
  { path: 'Rolesaa', component: Rolesaa, title: 'Roles page' },

  {
    path: 'blog',
    component: Blog12,
    title: 'blog page',
    children: [
      { path: '', component: Bolgnormal, pathMatch: 'full' },
      { path: 'masteringgolden', component: MasteringGolden },
      { path: 'settingcamera', component: Settingcamera },
      { path: 'rolescreate', component: Rolescreate },
      { path: 'phonecamera', component: Phonecamera },
      { path: 'nightphotography', component: PostDetails },
      { path: 'Longtan', component: Longtan },
      { path: 'Camerabases', component: Camerabases },
      { path: 'StreatCamera', component: StreatCamera },
      { path: 'Cameraparty', component: Cameraparty },
      { path: 'Camerasprot', component: Camerasprot },
      { path: 'Camerababy', component: Camerababy },
      { path: 'Cameraself', component: Cameraself },
      { path: 'Cameranature', component: Cameranature },
      { path: 'Cameraticher', component: Cameraticher },
      { path: 'Cameratravel', component: Cameratravel },
      { path: 'Camerarestuarant', component: Camerarestuarant },
      { path: 'Camerareblack', component: Camerareblack },
      { path: 'Camermacro', component: Camermacro },
      { path: 'Camerproduct', component: Camerproduct },
      { path: 'Camertheory', component: Camertheory },
      { path: 'Camerhouses', component: Camerhouses },
      { path: 'Cameresimple', component: Cameresimple },
      { path: 'Camereliteroom', component: Camereliteroom },
      { path: 'Camererotation', component: Camererotation },
      { path: 'Camereraw', component: Camereraw },
      { path: 'Camerabeginner', component: Camerabeginner },
      {
        path: 'portraitphotography',
        loadComponent: () =>
          import('./portraitphotography/portraitphotography').then((c) => c.Portraitphotography),
      },
      { path: 'landscapephotography', component: Landscapephotography },
    ],
  },
  { path: 'us', component: Us, title: 'about page' },

  { path: 'notfound', component: Notfound, title: 'not found page' },
  { path: '**', redirectTo: 'notfound' },
];
