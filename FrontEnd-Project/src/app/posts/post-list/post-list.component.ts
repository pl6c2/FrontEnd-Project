import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../posts.service';
import {Post} from '../post.model';
import {Subscription} from 'rxjs';
import {post} from 'selenium-webdriver/http';
import {Router} from '@angular/router';
import {GetDetailsService} from '../../services/get-details.service';
import {any} from "codelyzer/util/function";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  private modelName = new Array();
  private accuracyValue = new Array();
  private latencyValue = new Array();
  private demo: any;
  // posts =[
  //   {title:"Technology",content:"Scientific America"},
  //   {title:"News",content:"BBC"},
  //   {title:"Astro",content:"Astro America"}
  // ]

  //before using service to bind data
  // @Input() posts =[];
  posts :Post [] = [];
  private postsSub: Subscription;

  constructor( public postService: PostsService, private serve: GetDetailsService,
               private router: Router) { }


  ngOnInit() {
    this.postService.getPosts();
    this.postsSub = this.postService.getPostUpdatelistner()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
    });
  }

  onEdit(postId: string, postTitle: string, postContent: string){
    this.router.navigate(['/edit', {id: postId, title: postTitle, content: postContent}]);
  }
  onDelete(postId: string) {
    console.log('the id you want to delete - ', postId);
    this.postService.deletePosts(postId);
  }

  getd(modelTitle) {
     this.serve.getModelNames(modelTitle).subscribe( result => {
       for ( var i = 0 ; i < 5; i++) {
         this.modelName.push(result[0].exper[1].model_name);
       }
       console.log('model name' + this.modelName);
     });
     this.serve.getAccuracy(modelTitle).subscribe( result => {
       for ( var i = 0 ; i < 5; i++) {
         this.accuracyValue.push(result[0].exper[i].accuracyValue);
       }
       console.log('Accuracy value' + this.accuracyValue);
     });

     this.serve.getLossValue(modelTitle).subscribe( result => {

      for ( var i = 0 ; i < 5; i++) {
         this.latencyValue.push(result[0].exper[i].lossValue);
       }
      console.log(this.latencyValue);
    });

  }
  ngOnDestroy(): void {
    this.postsSub.unsubscribe();
  }

}
