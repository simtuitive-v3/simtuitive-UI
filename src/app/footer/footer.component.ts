import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  masterCategory
  constructor(private router: Router) {

    this.masterCategory = ['Finance','Operations','HR','Analytics','View all']
   }

  ngOnInit() {
  }
  navigation(category) {
    if (category == "View all")
      this.router.navigateByUrl('/products/categories');
    else
      this.router.navigate(['/products/typeCategory'], { queryParams: { category } });
  }
}
