import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentMetadata } from '../content-metadata';

import { WeblogService } from '../weblog.service';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private weblogService: WeblogService
  ) { }

  content: ContentMetadata | undefined;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const pathName = routeParams.get('pathName');
    this.weblogService.getContentByPath(pathName!).subscribe(
      resp => this.content = resp.data
    );
  }

}
