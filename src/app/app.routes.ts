import { Routes } from '@angular/router';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { MentionsLegaleComponent } from './components/pages/mentions-legale/mentions-legale.component';
import { PolitiqueComponent } from './components/pages/politique/politique.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'politique-confidentialité', component: PolitiqueComponent },
  { path: 'mentions-légales', component: MentionsLegaleComponent },
  { path: 'faq', component: FaqComponent },
];
