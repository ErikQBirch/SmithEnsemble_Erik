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
import { BuyCdsInfoComponent } from './buy-cds/buy-cds-info/buy-cds-info.component';
import { BuyCdsCartComponent } from './buy-cds/buy-cds-cart/buy-cds-cart.component';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { WoodsmithComponent } from './woodsmith/woodsmith.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToTopBtnComponent } from './to-top-btn/to-top-btn.component';
import { WoodsmithlinksComponent } from './woodsmithlinks/woodsmithlinks.component';
import { IconsWoodsmithComponent } from './icons-woodsmith/icons-woodsmith.component';


//z import { NgxPayPalModule } from 'ngx-paypal';



const appRoutes: Routes = [
  { path: '', component: EnsembleComponent },
  { path: 'ensemble', component: EnsembleComponent },
  { path: 'smithsix', component: SmithsixComponent },
  { path: 'woodsmith', component: WoodsmithComponent},
  { path: 'buy-cds', component:BuyCdsComponent},
  { path: 'videos', component: VideosComponent },
  { path: 'contact-us', component: ContactUsComponent},
  { path: 'coming-soon', component: ComingSoonComponent},
  { path: '**', pathMatch: 'full', component:PageNotFoundComponent}
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
    BuyCdsInfoComponent,
    BuyCdsCartComponent,
    ContactUsComponent,
    ComingSoonComponent,
    WoodsmithComponent,
    PageNotFoundComponent,
    ToTopBtnComponent,
    WoodsmithlinksComponent,
    IconsWoodsmithComponent,


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
