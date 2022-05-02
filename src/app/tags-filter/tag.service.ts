import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tags } from '../tag-list';

@Injectable({
  providedIn: 'root'
})
export class TagService extends Observable<TagService> {


  tags = tags;

  // selectedTags: Observable<Map<string, boolean>>;
  selectedTags: Map<string, boolean>;

  constructor() {
    super();
    this.selectedTags = new Map<string, boolean>();
    // this.selectedTags = new Observable,Map<string, boolean>();
  }

  init(selectedTags: Map<string, boolean>): void {
    this.selectedTags = selectedTags;
  }

  selectTags(tags: Map<string, boolean>): void {
    this.selectedTags = tags;
  }

  getSelectedTags(): Map<string, boolean> {
    return this.selectedTags;
  }


}
