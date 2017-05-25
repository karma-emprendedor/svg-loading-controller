import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  safeSvg;

  constructor(private loadingCtrl: LoadingController,
    private sanitizer: DomSanitizer) {

/*    let svg = `
    <svg viewBox="0 0 2419 1188.4"><defs><mask id="mask"><path fill="#000" d="M570.2 87.3L163.8 322c-15.6 9-25.2 25.6-25.2 43.6v469.3c0 18 9.6 34.6 25.2 43.6l406.4 234.7c15.6 9 34.7 9 50.3 0l406.4-234.7c15.6-9 25.2-25.6 25.2-43.6V365.6c0-18-9.6-34.6-25.2-43.6L620.5 87.3c-15.5-8.9-34.7-8.9-50.3 0z"/><path fill="#000" d="M787.4 474.6V343.5H394.2v505.6h131V661.8h262.2v-131H525.2v-56.2z"/><path fill="#000" d="M581.4 718h206v131.1h-206z"/><circle fill="#fff" cx="0" cy="1450" r="551.3"/></mask></defs><style>
      .st2 {
        fill: none;
        stroke-width: 40;
        stroke-miterlimit: 10;
      }
    </style><path id="background" mask="url(#mask)" fill="#F16E18" d="M570.2 87.3L163.8 322c-15.6 9-25.2 25.6-25.2 43.6v469.3c0 18 9.6 34.6 25.2 43.6l406.4 234.7c15.6 9 34.7 9 50.3 0l406.4-234.7c15.6-9 25.2-25.6 25.2-43.6V365.6c0-18-9.6-34.6-25.2-43.6L620.5 87.3c-15.5-8.9-34.7-8.9-50.3 0z"/><path class="letter" mask="url(#mask)" fill="#fff" d="M787.4 474.6V343.5H394.2v505.6h131V661.8h262.2v-131H525.2v-56.2z"/><path class="letter" mask="url(#mask)" fill="#fff" d="M581.4 718h206v131.1h-206z"/><path id="hexagon-2" stroke="transparent" class="st2" d="M570.1 82.5L163.7 317.2c-15.6 9-25.2 25.6-25.2 43.6v469.3c0 18 9.6 34.6 25.2 43.6l406.4 234.7c15.6 9 34.7 9 50.3 0l406.4-234.7c15.6-9 25.2-25.6 25.2-43.6V360.8c0-18-9.6-34.6-25.2-43.6L620.4 82.5c-15.5-8.9-34.7-8.9-50.3 0z"/><path id="hexagon-1" stroke="transparent" class="st2" d="M570.1 82.5L163.7 317.2c-15.6 9-25.2 25.6-25.2 43.6v469.3c0 18 9.6 34.6 25.2 43.6l406.4 234.7c15.6 9 34.7 9 50.3 0l406.4-234.7c15.6-9 25.2-25.6 25.2-43.6V360.8c0-18-9.6-34.6-25.2-43.6L620.4 82.5c-15.5-8.9-34.7-8.9-50.3 0z"/></svg>
    `;*/

    let svg = `<svg width="100" height="100">
                  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
                </svg>`;
    this.safeSvg = this.sanitizer.bypassSecurityTrustHtml(svg);
  }


  doLoading() {
  
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: this.safeSvg,
    });
    loading.present();

    setTimeout(function() {
      loading.dismiss();
    }, 3000);
    
  }

}
