import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { BukuComponent } from '../buku/buku.component';
import { PengaturanComponent } from '../pengaturan/pengaturan.component';
import { AnggotaComponent } from '../anggota/anggota.component';
import { AddAnggotaComponent } from '../anggota/add-anggota/add-anggota.component';
import { AddBukuComponent } from '../buku/add-buku/add-buku.component';
import { ReportComponent } from '../report/report.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buku', component: BukuComponent },
    { path: 'buku/add', component: AddBukuComponent },
    { path: 'pengaturan', component: PengaturanComponent },
    { path: 'anggota', component: AnggotaComponent },
    { path: 'anggota/add', component: AddAnggotaComponent },
    { path: 'report', component: ReportComponent },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
  })
  export class AppRoutingModule  { }