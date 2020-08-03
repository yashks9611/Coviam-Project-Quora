import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getFollowers()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8082/Relation/follower/"+sessionStorage.getItem('token').split(':')[0]);
  }

  getFollowing()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8082/Relation/following/"+sessionStorage.getItem('token').split(':')[0]);
  }

  getPosts()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8081/question/post/"+sessionStorage.getItem('token').split(':')[0]);
  }

  getPoints()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8083/Analytic/getPoints/"+sessionStorage.getItem('token').split(':')[0]);
  }
   
  getUserLevel()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8083/Analytic/getUserlevel/"+sessionStorage.getItem('token').split(':')[0]);
  }
  postAnswer(content:any)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8081/answer/answer/"+sessionStorage.getItem('token').split(':')[0],content);
  }
  getAnswers(postId:String)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8081/answer/answer/"+postId);
  }
  addComment(commentContent:any)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.post("http://localhost:8081/comment/comment/"+sessionStorage.getItem('token').split(':')[0],commentContent);
  }
  getComment(answerId:any)
  {
    return this.http.get("http://localhost:8081/comment/comment/"+answerId);
  }
  addLike(likecontent:any)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.post("http://localhost:8083/Analytic/like/"+sessionStorage.getItem('token').split(':')[0],likecontent);
  }
  addDislike(dislikecontent:any)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.post("http://localhost:8083/Analytic/dislike/"+sessionStorage.getItem('token').split(':')[0],dislikecontent);
  }


  




}
