import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CoreService } from '../core.service';

@Component({
	selector: 'people-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
	title = 'gitUsers';
	private user_id: any;
  public userObj: any = {}
  public flwrList: any = [];
	constructor(
	private coreService: CoreService,
	private route: ActivatedRoute,
	){		
		this.route.queryParams.subscribe((params: Params) => {
			this.user_id = params['id'];
			this.fetchUser(this.user_id);
		});

	}

	fetchUser(user_id:any){
	let uri = "users/" + user_id;
	this.coreService.findUser(uri)
	.then((obj: any)=> {
	  this.userObj = obj;
    this.fetchFollowers();
	}).catch((reason: any)=>{
	  alert(reason);
	});
	}

  fetchFollowers(){
  let uri = "users/"+ this.user_id +"/followers";
  this.coreService.findUser(uri)
  .then((flwrList: any)=> {
    this.flwrList = flwrList;
    console.log(this.flwrList);
  }).catch((reason: any)=>{
    alert(reason);
  });
  }

}

/*
{
  "login": "kaleemullah360",
  "id": 8653586,
  "node_id": "MDQ6VXNlcjg2NTM1ODY=",
  "avatar_url": "https://avatars3.githubusercontent.com/u/8653586?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/kaleemullah360",
  "html_url": "https://github.com/kaleemullah360",
  "followers_url": "https://api.github.com/users/kaleemullah360/followers",
  "following_url": "https://api.github.com/users/kaleemullah360/following{/other_user}",
  "gists_url": "https://api.github.com/users/kaleemullah360/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/kaleemullah360/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/kaleemullah360/subscriptions",
  "organizations_url": "https://api.github.com/users/kaleemullah360/orgs",
  "repos_url": "https://api.github.com/users/kaleemullah360/repos",
  "events_url": "https://api.github.com/users/kaleemullah360/events{/privacy}",
  "received_events_url": "https://api.github.com/users/kaleemullah360/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Kaleem Ullah",
  "company": "@AngstromArc",
  "blog": "https://stackoverflow.com/users/2046817/kaleem-ullah",
  "location": "Lahore, Punjab",
  "email": null,
  "hireable": true,
  "bio": "If you can't beat me, come join me.",
  "public_repos": 30,
  "public_gists": 0,
  "followers": 5,
  "following": 0,
  "created_at": "2014-09-04T09:01:09Z",
  "updated_at": "2018-05-27T04:13:31Z"
}

*/

// Followers

/*
[
  {
    "login": "soyelmnd",
    "id": 2678063,
    "node_id": "MDQ6VXNlcjI2NzgwNjM=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/2678063?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/soyelmnd",
    "html_url": "https://github.com/soyelmnd",
    "followers_url": "https://api.github.com/users/soyelmnd/followers",
    "following_url": "https://api.github.com/users/soyelmnd/following{/other_user}",
    "gists_url": "https://api.github.com/users/soyelmnd/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/soyelmnd/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/soyelmnd/subscriptions",
    "organizations_url": "https://api.github.com/users/soyelmnd/orgs",
    "repos_url": "https://api.github.com/users/soyelmnd/repos",
    "events_url": "https://api.github.com/users/soyelmnd/events{/privacy}",
    "received_events_url": "https://api.github.com/users/soyelmnd/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "agentready",
    "id": 15826070,
    "node_id": "MDQ6VXNlcjE1ODI2MDcw",
    "avatar_url": "https://avatars0.githubusercontent.com/u/15826070?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/agentready",
    "html_url": "https://github.com/agentready",
    "followers_url": "https://api.github.com/users/agentready/followers",
    "following_url": "https://api.github.com/users/agentready/following{/other_user}",
    "gists_url": "https://api.github.com/users/agentready/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/agentready/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/agentready/subscriptions",
    "organizations_url": "https://api.github.com/users/agentready/orgs",
    "repos_url": "https://api.github.com/users/agentready/repos",
    "events_url": "https://api.github.com/users/agentready/events{/privacy}",
    "received_events_url": "https://api.github.com/users/agentready/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "IrfanMeo",
    "id": 18227948,
    "node_id": "MDQ6VXNlcjE4MjI3OTQ4",
    "avatar_url": "https://avatars0.githubusercontent.com/u/18227948?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/IrfanMeo",
    "html_url": "https://github.com/IrfanMeo",
    "followers_url": "https://api.github.com/users/IrfanMeo/followers",
    "following_url": "https://api.github.com/users/IrfanMeo/following{/other_user}",
    "gists_url": "https://api.github.com/users/IrfanMeo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/IrfanMeo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/IrfanMeo/subscriptions",
    "organizations_url": "https://api.github.com/users/IrfanMeo/orgs",
    "repos_url": "https://api.github.com/users/IrfanMeo/repos",
    "events_url": "https://api.github.com/users/IrfanMeo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/IrfanMeo/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "abuammarhashmi",
    "id": 8685141,
    "node_id": "MDQ6VXNlcjg2ODUxNDE=",
    "avatar_url": "https://avatars3.githubusercontent.com/u/8685141?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/abuammarhashmi",
    "html_url": "https://github.com/abuammarhashmi",
    "followers_url": "https://api.github.com/users/abuammarhashmi/followers",
    "following_url": "https://api.github.com/users/abuammarhashmi/following{/other_user}",
    "gists_url": "https://api.github.com/users/abuammarhashmi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/abuammarhashmi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/abuammarhashmi/subscriptions",
    "organizations_url": "https://api.github.com/users/abuammarhashmi/orgs",
    "repos_url": "https://api.github.com/users/abuammarhashmi/repos",
    "events_url": "https://api.github.com/users/abuammarhashmi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/abuammarhashmi/received_events",
    "type": "User",
    "site_admin": false
  },
  {
    "login": "mihnsen",
    "id": 9761138,
    "node_id": "MDQ6VXNlcjk3NjExMzg=",
    "avatar_url": "https://avatars0.githubusercontent.com/u/9761138?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mihnsen",
    "html_url": "https://github.com/mihnsen",
    "followers_url": "https://api.github.com/users/mihnsen/followers",
    "following_url": "https://api.github.com/users/mihnsen/following{/other_user}",
    "gists_url": "https://api.github.com/users/mihnsen/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mihnsen/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mihnsen/subscriptions",
    "organizations_url": "https://api.github.com/users/mihnsen/orgs",
    "repos_url": "https://api.github.com/users/mihnsen/repos",
    "events_url": "https://api.github.com/users/mihnsen/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mihnsen/received_events",
    "type": "User",
    "site_admin": false
  }
]
*/