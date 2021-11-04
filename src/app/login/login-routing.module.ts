import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { TabsPage } from '../tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'tab1/:email',
    loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'tabs/tab1/:email',
    loadChildren: () => import('../tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab3',
    loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab2',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: '/tabs/tab3',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
