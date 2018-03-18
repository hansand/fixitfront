import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { ServicePage } from '../service/service';
import { JobPage } from '../jobs/job';
import { ShopPage } from '../shops/shop';
import { UserPage } from '../user/user';




@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ServicePage;
  tab2Root = JobPage;
  tab3Root = ShopPage;
  tab4Root = UserPage; 
  // tab5Root = HomePage;
  // tab6Root = AboutPage;

  constructor() {

  }
}
