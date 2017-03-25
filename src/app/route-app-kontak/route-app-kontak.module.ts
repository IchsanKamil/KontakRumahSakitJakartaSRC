import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HalamanGagalKosongComponent} from '../halaman-gagal-kosong/halaman-gagal-kosong.component';
import {PelayananMasyComponent} from '../pelayanan-masy/pelayanan-masy.component';
import {TentangAppComponent} from '../tentang-app/tentang-app.component';

const routesapp: Routes = [
  {path: 'puskesmas', loadChildren: 'app/puskesmasjkt/puskesmasjkt.module#PuskesmasjktModule'},
  {path: 'rumah-sakit-umum', loadChildren: 'app/rumah-sakit-umum/rumah-sakit-umum.module#RumahSakitUmumModule'},
  {path: 'pelayanan', component: PelayananMasyComponent},
  {path: 'tentangapp', component: TentangAppComponent},
  {path: '', redirectTo: '/puskesmas', pathMatch: 'full'},
  {path: '**', component: HalamanGagalKosongComponent}
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routesapp)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteAppKontakModule {
}
