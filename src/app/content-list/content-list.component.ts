import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentMetadata } from '../content-metadata';
import { WeblogService } from '../weblog.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  constructor(
    private weblogService: WeblogService
  ) {}
    
  contentList: ContentMetadata[] = [];

  currentPage: number = 1;
  itemCount = 0;
  pageCount = 1;
  pageIndexList: string[] = [];

  setCurrentPage(page: number): void {
    this.currentPage = page;
    this.pageIndexList = [];
    let min = Math.max(page - 5, 1);
    let max = Math.min(page + 5, this.pageCount);
    if (page > 1) {
      this.pageIndexList.push("<<");
      this.pageIndexList.push("<");
    }
    for (let i = min; i <= max; i++) {
      this.pageIndexList.push(i.toString());
    }
    if (page < this.pageCount) {
      this.pageIndexList.push(">");
      this.pageIndexList.push(">>");
    }
  }

  jumpPage(page: String) {
    if (page == "<<") {
      this.setCurrentPage(1);
    } else if (page == "<") {
      this.setCurrentPage(this.currentPage - 1);
    } else if (page == ">") {
      this.setCurrentPage(this.currentPage + 1);
    } else if (page == ">>") {
      this.setCurrentPage(this.pageCount);
    } else {
      this.setCurrentPage(Number(page));
    }
    this.weblogService.getContentList(this.currentPage, 10).subscribe(
      resp => {
        this.contentList = resp.data.list;
      }
    );
  }

  ngOnInit(): void {
    this.weblogService.getContentList(1, 10).subscribe(
      resp => {
        this.contentList = resp.data.list;
        this.itemCount = resp.data.count;
        this.pageCount = resp.data.pageCount;
        this.setCurrentPage(1);
      }
    );
  }





}
