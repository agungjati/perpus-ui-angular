import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './routing/router.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule, MatFormFieldModule, MatInputModule,
  MatIconModule, MatButtonModule, MatToolbarModule } from '@angular/material';
import { BukuComponent } from './buku/buku.component';
import { FooterComponent } from './footer/footer.component';
import { PengaturanComponent } from './pengaturan/pengaturan.component';
import { AnggotaComponent } from './anggota/anggota.component';
import { AddBukuComponent } from './buku/add-buku/add-buku.component';
import { AddAnggotaComponent } from './anggota/add-anggota/add-anggota.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BukuComponent,
    FooterComponent,
    PengaturanComponent,
    AnggotaComponent,
    AddBukuComponent,
    AddAnggotaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
