import { Component } from '@angular/core';
import { CoreService } from '../core.service';

@Component({
	selector: 'people-list',
	templateUrl: './people.component.html',
	styleUrls: ['./people.component.css']
})
export class PeopleComponent {
	title = 'gitUsers';

	constructor(
	private coreService: CoreService){}
	public page:any = 1;
	public count:any = 1;
	public pPage:any = 10;
	public range: any = new Array(this.count);
	public usrList: any = [];
	public userObj: any = {
		name: '',
	}

	paginate(p:any){
		this.page = p;
		this.fetchUsers();

	}

	fetchUsers(){
	let uri = "search/users?q=" + this.userObj.name + "&sort=stars&order=desc&page=" + this.page + "&per_page=" + this.pPage;
	this.coreService.findUser(uri)
	.then((usrList: any)=> {
	  this.usrList = usrList;
	  //usrList['total_count'] = 125;
	  if(this.page <= 1){
	  	this.count = (usrList['total_count'] % this.pPage ? Math.trunc(usrList['total_count'] / this.pPage) + 1 : (usrList['total_count'] / this.pPage));
	  	this.range = new Array(this.count);
	  }
		console.log(this.count);
	}).catch((reason: any)=>{
	  alert(reason);
	});
	}

}


/*
avatar_url: "https://avatars3.githubusercontent.com/u/56748?v=4"
events_url: "https://api.github.com/users/kaleemullah/events{/privacy}"
followers_url: "https://api.github.com/users/kaleemullah/followers"
following_url: "https://api.github.com/users/kaleemullah/following{/other_user}"
gists_url: "https://api.github.com/users/kaleemullah/gists{/gist_id}"
gravatar_id: ""
html_url: "https://github.com/kaleemullah"
id: 56748
login: "kaleemullah"
node_id: "MDQ6VXNlcjU2NzQ4"
organizations_url: "https://api.github.com/users/kaleemullah/orgs"
received_events_url: "https://api.github.com/users/kaleemullah/received_events"
repos_url: "https://api.github.com/users/kaleemullah/repos"
score: 76.47973
site_admin: false
starred_url: "https://api.github.com/users/kaleemullah/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/kaleemullah/subscriptions"
type: "User"
url: "https://api.github.com/users/kaleemullah"
*/