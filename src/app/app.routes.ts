import { Routes } from '@angular/router';
import { AProposComponent } from './components/pages/a-propos/a-propos.component';
import { AccueilComponent } from './components/pages/accueil/accueil.component';
import { AnnoncesComponent } from './components/pages/annonces/annonces.component';
import { CommentCaMarcheComponent } from './components/pages/comment-ca-marche/comment-ca-marche.component';
import { ConnexionComponent } from './components/pages/connexion/connexion.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { InscriptionComponent } from './components/pages/inscription/inscription.component';
import { MentionsLegaleComponent } from './components/pages/mentions-legale/mentions-legale.component';
import { MesEchangesComponent } from './components/pages/mes-echanges/mes-echanges.component';
import { PolitiqueComponent } from './components/pages/politique/politique.component';
import { ProfilComponent } from './components/pages/profil/profil.component';

export const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'annonces', component: AnnoncesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'politique-confidentialité', component: PolitiqueComponent },
  { path: 'mentions-légales', component: MentionsLegaleComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'comment-ça-marche', component: CommentCaMarcheComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'mes-echanges', component: MesEchangesComponent },
  { path: 'profil', component: ProfilComponent },
];
