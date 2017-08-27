import { Component, ChangeDetectorRef  } from '@angular/core';
import { MoltinService } from '../services/moltin.service';

@Component({
  selector: 'store',
  templateUrl: `app/views/store.component.html`,
})
export class StoreComponent  { 
  items;
  test: string;

  constructor(private moltinService: MoltinService, private changeRef: ChangeDetectorRef) {}
  
  getPosts(moltinService: MoltinService) {
      this.items = [];
      moltinService.getPosts().then(value => {
        this.items = value
      });
  }

  ngOnInit(): void {
    this.getPosts(this.moltinService);
  }
}

