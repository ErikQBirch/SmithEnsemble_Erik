import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';



import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { EnsembleComponent } from './ensemble/ensemble.component';
import { SmithsixComponent } from './smithsix/smithsix.component';

import { VideosComponent } from './videos/videos.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarComponent } from './navbar/navbar.component';
import { IconsComponent } from './icons/icons.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SmithsixlinksComponent } from './smithsixlinks/smithsixlinks.component';
import { SmithensemblelinksComponent } from './smithensemblelinks/smithensemblelinks.component';
import { IconsSmithsixComponent } from './icons-smithsix/icons-smithsix.component';
import { BuyCdsComponent } from './buy-cds/buy-cds.component';
import { ShopPopUpComponent } from './shop-pop-up/shop-pop-up.component';

// import { NgxPayPalModule } from 'ngx-paypal';



const appRoutes: Routes = [
  { path: '', component: EnsembleComponent },
  { path: 'ensemble', component: EnsembleComponent },
  { path: 'smithsix', component: SmithsixComponent },
  { path: 'buy-cds', component:BuyCdsComponent},
  { path: 'videos', component: VideosComponent },
  { path: 'contact', component:  ContactComponent},
  { path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EnsembleComponent,
    SmithsixComponent,
    VideosComponent,
    ContactComponent,
    AboutComponent,
    NavbarComponent,
    IconsComponent,
    MainNavComponent,
    SmithsixlinksComponent,
    SmithensemblelinksComponent,
    IconsSmithsixComponent,
    BuyCdsComponent,
    ShopPopUpComponent,

 
  

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    // NgxPayPalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
