import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { Dashboard } from './pages/dashboard/dashboard';
import { AdminLogin } from './pages/admin-login/admin-login';
import { Admin } from './layout/private-layout/admin/admin';
// import { Component } from '@angular/core';
import { PublicLayout } from './layout/public-layout/public-layout';
import { Header } from './layout/public-layout/header/header';
import { Users } from './pages/users/users';
import { Settings } from './pages/settings/settings';
import { Analytics } from './pages/analytics/analytics';
// import { Features } from './pages/features/features';
// import { About } from './pages/about/about';

export const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: [
      { path: '', component: Landing },
      // { path: 'dashboard', component: Dashboard },
      // { path: 'about', component: About },
      // { path: 'features', component: Features }
    ],
  },

  { path: 'admin-login', component: AdminLogin },
  {
    path: 'admin',
    component: Admin,
    children: [
      // { path: '', component: Admin },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: Dashboard },
      { path: 'users', component: Users },
      { path: 'analytics', component: Analytics },
      { path: 'settings', component: Settings },
    ],
  },
];
