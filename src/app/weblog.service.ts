import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeblogService {

  token: String = "";

  constructor(
    private http: HttpClient
  ) { }

  login(account: string, password: string) {
    let headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    let user = {
      account: account,
      password: password
    }
    return this.http.post<WeblogResponse>(
      "/api/login", user ,{headers: headers}
    );
  }

  getContentList(page: number , pageSize: number) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get<WeblogResponse> (
      "/api/content/list"
      + "?pageIndex=" + (page - 1)
      + "&pageSize=" + pageSize
    );
  }

  getContentById(id: string) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get<WeblogResponse>("/api/getContent" + id.toString(),
      { headers: headers });  //todo it's ok here to remove "{headers: headers}"
  }
  getContentByPath(pathName: string) {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get<WeblogResponse>("/api/content" + "/" + pathName);
  }

  getCatalogue() {
    let headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.get<PostWithoudContent[]> (
      "/api/posts",{headers: headers}
    );
  }

  getPost(id: string) {
    let headers = new HttpHeaders()
      .append('Content-Type', 'application/json');
    return this.http.get<Post>(
      "/api/posts/" + id, {headers: headers}
    );
  }

  postArticle(article: Article) {
    let headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization', 'Bearer ' + this.token);
    return this.http.post<Article> (
      "/api/posts", article, {headers: headers}
    );
  }

  updateArticle(updated: UpdatedArticle) {
    let headers = new HttpHeaders()
    .append('Content-Type', 'application/json')
    .append('Authorization', 'Bearer ' + this.token);
    return this.http.post<Article> (
      "/api/posts" + updated.postId, updated, {headers: headers}
    );
  }
  
}

export interface User {
  id: number;
  account: string;
  password: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  created: number;
}
export interface PostWithoudContent {
  id: string;
  title: string;
  created: number;
}
export interface UpdatedArticle {
  postId: string,
  title: string,
  content: string
}
export interface Article {
  title: string,
  content: string
}

export interface Token {
  token: string
}
export interface Message {
  msg: string;
}
export interface NewPassword {
  password: string;
}

export interface WeblogResponse {
  code: number;
  msg: string;
  data: any;
}