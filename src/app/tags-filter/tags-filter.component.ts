import { Component, OnInit } from '@angular/core';
import { tags } from '../tag-list';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.css']
})
export class TagsFilterComponent implements OnInit {

  selectedTags: Map<string, boolean>;

  tags = tags;

  constructor(
    private tagService: TagService
  ) { 
    this.selectedTags = new Map<string, boolean>();
  }

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    tags.forEach(tag => {
      this.selectedTags.set(tag, false);
    })
    this.tagService.selectTags(this.selectedTags);
  }

  select(tag: string): void {
    this.selectedTags.set(tag, !this.selectedTags.get(tag));  //todo
    this.tagService.selectTags(this.selectedTags);
  }

  clear(): void {
    this.init();
  }

  getSelectedTags(): Map<string, boolean> {
    return this.tagService.getSelectedTags();
  }

}