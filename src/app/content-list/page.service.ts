import { Injectable } from '@angular/core';
import { ContentMetadata, contentMetadataList } from '../content-metadata';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  constructor() { 
  }

  contentMetadataList = contentMetadataList;

  pageList: ContentMetadata[] = [];
  tags: string[] = [];
  categories: string[] = [];

  pageSize: number = 10;
  totalPage: number = 0;
  totalContent: number = 0;

  init(pageSize: number): void {
    this.pageSize = pageSize;
    this.totalContent = this.contentMetadataList.length;
    this.totalPage = Math.ceil(this.totalContent / this.pageSize);
  }

  setTags(tags: string[]): void {
    this.tags = tags;
    this.updateContentMetadataList();
    this.updateTotalPage();
  }
  setCategories(categories: string[]): void {
    this.categories = categories;
    this.updateContentMetadataList();
    this.updateTotalPage();
  }
  updateContentMetadataList(): void {
    this.contentMetadataList = contentMetadataList.filter(contentMetadata => {
      if (this.tags.length > 0) {
        if (this.tags.indexOf(contentMetadata.tag) < 0) {
          return false;
        }
      }
      if (this.categories.length > 0) {
        if (this.categories.indexOf(contentMetadata.category) < 0) {
          return false;
        }
      }
      return true;
    });
  }
  updateTotalPage(): void {
    this.totalPage = Math.ceil(this.contentMetadataList.length / this.pageSize);
  }

  getPageList(page: number): ContentMetadata[] {
    this.pageList = this.contentMetadataList.slice((page - 1) * this.pageSize, page * this.pageSize);
    return this.pageList;
  }

  getPageIndex(): number[] {
    let pageIndex: number[] = [];
    for (let i = 1; i <= this.totalPage; i++) {
      pageIndex.push(i);
    }
    return pageIndex;
  }

}
