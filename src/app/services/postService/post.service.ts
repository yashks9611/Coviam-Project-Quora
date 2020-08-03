import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { User } from 'src/app/model/User;

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }

add(posts:any)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    console.log(posts);
    return this.http.post("http://localhost:8081/question/post/"+sessionStorage.getItem('token').split(':')[0],posts);
  }
  search(key){	
	
    return this.http.get("http://localhost:8080/users/search/"+key);
    }

  followUser(followId)
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.post("http://localhost:8082/Relation/follow/"+followId,sessionStorage.getItem('token').split(':')[0]);
  }

  getFollowers()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
    return this.http.get("http://localhost:8082/Relation/follower/"+sessionStorage.getItem('token').split(':')[0]);
  }
  getPostById(userId:String)
  {
    return this.http.get("http://localhost:8081/question/post/"+userId);
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
  getPostOfFollowing()
  {
    const token=sessionStorage.getItem("token");
    const headers=new HttpHeaders({Authorization:'Basic '+token});
      return this.http.get("http://localhost:8081/question/postoffollowing/"+sessionStorage.getItem('token').split(':')[0]);
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
