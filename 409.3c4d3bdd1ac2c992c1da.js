(self.webpackChunkkucomic=self.webpackChunkkucomic||[]).push([[409],{409:(t,n,e)=>{"use strict";e.r(n),e.d(n,{ComicNewUpdateComponent:()=>m,ComicNewUpdateModule:()=>C,ComicSearchComponent:()=>O,ComicSearchModule:()=>M,ComicService:()=>k.J,ItemComicComponent:()=>d.d,ItemComicModule:()=>y,KuComicModule:()=>c,RecommendMangaComponent:()=>v.u,RecommendMangaModule:()=>h});var o=e(2057),i=e(4788);let c=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez]]}),t})();var r=e(1918),a=e(4386),s=e(9504),g=e(4466),d=e(528);function p(t,n){if(1&t&&(i.ynx(0),i.TgZ(1,"div"),i._UZ(2,"k-item-comic",4),i.qZA(),i.BQk()),2&t){const t=n.$implicit;i.xp6(2),i.Q6J("comic",t)}}function l(t,n){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"k-header",1),i.NdJ("page",function(n){return i.CHM(t),i.oxw().pageChange(n)}),i.qZA(),i.TgZ(2,"div",2),i.YNc(3,p,3,1,"ng-container",3),i.ALo(4,"async"),i.qZA(),i.BQk()}if(2&t){const t=n.ngIf,e=i.oxw();let o;i.xp6(1),i.Q6J("pagination",t),i.xp6(2),i.Q6J("ngForOf",null==(o=i.lcZ(4,3,e.comics$))?null:o.data)("ngForTrackBy",e.trackById)}}let m=(()=>{class t{constructor(t){this.comicSvr=t}ngOnInit(){this.getData()}trackById(t,n){return n.id}pageChange(t){this.getData(t)}getData(t){t||((t=new a.kl).pageSize=s.K5.pageSize,t.pageIndex=1),this.comics$=this.comicSvr.getComicLatestUpdate(t)}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(k.J))},t.\u0275cmp=i.Xpm({type:t,selectors:[["k-comic-new-update"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"pagination","page"],[1,"grid","grid-cols-1","gap-4","xl:grid-cols-2","lg:grid-cols-1","md:grid-cols-1","sm:grid-cols-1","xs:grid-cols-1"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"comic"]],template:function(t,n){1&t&&(i.YNc(0,l,5,5,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,n.comics$))},directives:[o.O5,g.G,o.sg,d.d],pipes:[o.Ov],styles:[""]}),t})();const u=[{path:"",component:m}];let f=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.Bz.forChild(u)],r.Bz]}),t})();var b=e(7200);let y=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,b.hJ]]}),t})(),C=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,f,y,b.Op]]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,y,b.Op]]}),t})();var v=e(3528),k=e(1161);function x(t,n){if(1&t&&(i.ynx(0),i.TgZ(1,"div"),i._UZ(2,"k-item-comic",4),i.qZA(),i.BQk()),2&t){const t=n.$implicit;i.xp6(2),i.Q6J("comic",t)}}function Z(t,n){if(1&t){const t=i.EpF();i.ynx(0),i.TgZ(1,"k-header",1),i.NdJ("page",function(n){return i.CHM(t),i.oxw().pageChange(n)}),i.qZA(),i.TgZ(2,"div",2),i.YNc(3,x,3,1,"ng-container",3),i.qZA(),i.BQk()}if(2&t){const t=n.ngIf,e=i.oxw();i.xp6(1),i.Q6J("pagination",t),i.xp6(2),i.Q6J("ngForOf",null==t?null:t.data)("ngForTrackBy",e.trackById)}}let O=(()=>{class t{constructor(t,n){this.routerActive=t,this.comicSvr=n}ngOnInit(){this.routerActive.paramMap.subscribe(t=>{this.categoryId=t.get(s.tl.ROUTE_PARAM_KEYS.CATEGORY),this.getData()})}trackById(t,n){return n.id}pageChange(t){this.getData(t)}getData(t){t||((t=new a.kl).pageSize=s.K5.pageSize,t.pageIndex=1),this.comics$=this.comicSvr.getComicByCategory(this.categoryId,t)}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(r.gz),i.Y36(k.J))},t.\u0275cmp=i.Xpm({type:t,selectors:[["k-comic-search"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"pagination","page"],[1,"grid","grid-cols-1","gap-4","xl:grid-cols-2","lg:grid-cols-1","md:grid-cols-1","sm:grid-cols-1","xs:grid-cols-1"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"comic"]],template:function(t,n){1&t&&(i.YNc(0,Z,4,3,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,n.comics$))},directives:[o.O5,g.G,o.sg,d.d],pipes:[o.Ov],styles:[""]}),t})();const w=[{path:"",component:O}];let _=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[r.Bz.forChild(w)],r.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=i.oAB({type:t}),t.\u0275inj=i.cJS({imports:[[o.ez,_,y,b.Op]]}),t})()},528:(t,n,e)=>{"use strict";e.d(n,{d:()=>m});var o=e(9504),i=e(4788),c=e(1918),r=e(2057),a=e(6392);function s(t,n){if(1&t&&i._UZ(0,"k-svg-icon",4),2&t){const t=i.oxw();i.Q6J("name",t.icon)("size",t.iconSize)}}function g(t,n){if(1&t&&i._UZ(0,"k-svg-icon",5),2&t){const t=i.oxw();i.Q6J("size",t.iconSize)}}const d=function(t,n,e){return["btn",t,n,e]},p=["*"];let l=(()=>{class t{constructor(){this.type="button",this.className="btn-primary",this.iconSize=18}ngOnInit(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=i.Xpm({type:t,selectors:[["k-button"]],inputs:{type:"type",className:"className",icon:"icon",iconSize:"iconSize",isWorking:"isWorking",isActive:"isActive",disabled:"disabled"},ngContentSelectors:p,decls:6,vars:11,consts:[[3,"type","ngClass","disabled"],[3,"name","size",4,"ngIf"],["name","spin","class","spinner",3,"size",4,"ngIf"],["content",""],[3,"name","size"],["name","spin",1,"spinner",3,"size"]],template:function(t,n){if(1&t&&(i.F$t(),i.TgZ(0,"button",0),i.YNc(1,s,1,2,"k-svg-icon",1),i.YNc(2,g,1,1,"k-svg-icon",2),i.TgZ(3,"span",null,3),i.Hsn(5),i.qZA(),i.qZA()),2&t){const t=i.MAs(4);i.Q6J("type",n.type)("ngClass",i.kEZ(7,d,n.className,n.isActive?"is-active":"",null!=t&&null!=t.innerHTML&&t.innerHTML.trim()?"":"icon-only"))("disabled",n.disabled),i.xp6(1),i.Q6J("ngIf",!n.isWorking&&n.icon),i.xp6(1),i.Q6J("ngIf",n.isWorking),i.xp6(1),i.ekj("with-padding",n.isWorking||n.icon)}},directives:[r.mk,r.O5,a.b],styles:[".btn[_ngcontent-%COMP%]{display:inline-flex;height:2rem;cursor:pointer;-webkit-user-select:none;user-select:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;align-items:center;justify-content:center;border-radius:.125rem;padding-left:.75rem;padding-right:.75rem;vertical-align:middle;font-size:14.5px;line-height:1;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s;transition-duration:.1s}.btn.icon-only[_ngcontent-%COMP%]{padding-left:.5rem;padding-right:.5rem}.btn.icon-only[_ngcontent-%COMP%]   .with-padding[_ngcontent-%COMP%]{padding:0}.btn.disabled[_ngcontent-%COMP%]{pointer-events:none;cursor:default;opacity:.5}.btn[_ngcontent-%COMP%]:active, .btn[_ngcontent-%COMP%]:focus{outline-color:#1890ff}.btn.no-padding-left[_ngcontent-%COMP%]{padding-left:0}.btn.no-padding-right[_ngcontent-%COMP%]{padding-right:0}.btn-primary[_ngcontent-%COMP%]{color:#fff;font-weight:500;background:#1f3346}.btn-primary[_ngcontent-%COMP%]:disabled{cursor:not-allowed;background-color:#4e80b0}.btn-primary[_ngcontent-%COMP%]:not(:disabled):hover{background:#2f4d69}.btn-primary[_ngcontent-%COMP%]:not(:disabled):active{background:#0f1923}.btn-primary[_ngcontent-%COMP%]:not(:disabled).active{background:#0f1923!important}.btn-success[_ngcontent-%COMP%]{color:#fff;font-weight:500;background:#0b875b}.btn-success[_ngcontent-%COMP%]:disabled{cursor:not-allowed;background-color:#3cefb0}.btn-success[_ngcontent-%COMP%]:not(:disabled):hover{background:#0fb67b}.btn-success[_ngcontent-%COMP%]:not(:disabled):active{background:#07583b}.btn-success[_ngcontent-%COMP%]:not(:disabled).active{background:#07583b!important}.btn-secondary[_ngcontent-%COMP%]{font-weight:400;--tw-text-opacity:1;color:rgba(66,82,110,var(--tw-text-opacity));background:#f4f5f7}.btn-secondary[_ngcontent-%COMP%]:not(:disabled):hover{--tw-bg-opacity:1;background-color:rgba(235,236,240,var(--tw-bg-opacity))}.btn-secondary[_ngcontent-%COMP%]:not(:disabled):active{--tw-bg-opacity:1;background-color:rgba(210,229,254,var(--tw-bg-opacity));color:#1f3346}.btn-empty[_ngcontent-%COMP%]{background:#fff;--tw-text-opacity:1;color:rgba(66,82,110,var(--tw-text-opacity))}.btn-empty[_ngcontent-%COMP%], .btn-empty[_ngcontent-%COMP%]:active, .btn-empty[_ngcontent-%COMP%]:focus{outline:none}.btn-empty[_ngcontent-%COMP%]:not(:disabled):hover{--tw-bg-opacity:1;background-color:rgba(235,236,240,var(--tw-bg-opacity))}.btn-empty[_ngcontent-%COMP%]:not(:disabled):active{--tw-bg-opacity:1;background-color:rgba(210,229,254,var(--tw-bg-opacity));color:#1f3346}.btn-empty[_ngcontent-%COMP%]:not(:disabled).is-active{background-color:#deebff;--tw-text-opacity:1;color:rgba(66,82,110,var(--tw-text-opacity))}.with-padding[_ngcontent-%COMP%]{padding-left:.5rem}.is-active[_ngcontent-%COMP%]{--tw-bg-opacity:1;background-color:rgba(210,229,254,var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(0,82,204,var(--tw-text-opacity))}"]}),t})(),m=(()=>{class t{constructor(t){this.router=t}ngOnInit(){}goComic(){this.router.navigate(["/",o.r5.LIST_CHAPTER,this.comicVm.link])}onImageError(t){t.target.src="assets/image/no-image.png"}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(c.F0))},t.\u0275cmp=i.Xpm({type:t,selectors:[["k-item-comic"]],inputs:{comicVm:["comic","comicVm"]},decls:31,vars:6,consts:[[1,"flex","bg-white","cursor-pointer",2,"border-radius","2.08333% / 4.68738%","transform-origin","50% 50% 0px",3,"click"],[1,"flex-none","w-48","relative"],["alt","",1,"absolute","inset-0","w-full","h-full","object-cover",3,"src","error"],[1,"flex-auto","p-4","comic-content"],[1,"flex","flex-wrap"],[1,"flex-auto","text-xl","font-semibold"],[1,"w-full","flex-none","text-sm","font-medium","text-gray-500","mt-2"],[1,"items-baseline","mt-4","mb-6"],[1,"flex-none","uppercase","text-xs","sm:text-sm","font-semibold","tracking-wide"],[1,"text-gray-500"],[1,"flex","space-x-3","mb-4","text-sm","font-medium"],[1,"flex-auto","flex","space-x-3"]],template:function(t,n){1&t&&(i.TgZ(0,"div",0),i.NdJ("click",function(){return n.goComic()}),i.TgZ(1,"div",1),i.TgZ(2,"img",2),i.NdJ("error",function(t){return n.onImageError(t)}),i.qZA(),i.qZA(),i.TgZ(3,"div",3),i.TgZ(4,"div",4),i.TgZ(5,"h1",5),i._uU(6),i.qZA(),i.TgZ(7,"div",6),i._uU(8),i.qZA(),i.qZA(),i.TgZ(9,"div",7),i.TgZ(10,"div"),i.TgZ(11,"span",8),i._uU(12,"T\xe1c gi\u1ea3: "),i.qZA(),i.TgZ(13,"span",9),i._uU(14),i.qZA(),i.qZA(),i.TgZ(15,"div"),i.TgZ(16,"span",8),i._uU(17,"Th\u1ec3 lo\u1ea1i: "),i.qZA(),i.TgZ(18,"span",9),i._uU(19,"\u0111ang c\u1eadp nh\u1eadt"),i.qZA(),i.qZA(),i.TgZ(20,"div"),i.TgZ(21,"span",8),i._uU(22,"T\xecnh tr\u1ea1ng: "),i.qZA(),i.TgZ(23,"span",9),i._uU(24),i.qZA(),i.qZA(),i.qZA(),i.TgZ(25,"div",10),i.TgZ(26,"div",11),i.TgZ(27,"k-button"),i._uU(28,"\u0110\u1ecdc Chap \u0111\u1ea7u"),i.qZA(),i.TgZ(29,"k-button"),i._uU(30),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&t&&(i.xp6(2),i.s9C("src",n.comicVm.coverPage,i.LSH),i.xp6(4),i.hij(" ",n.comicVm.title," "),i.xp6(2),i.hij(" ",n.comicVm.lastChapter," "),i.xp6(6),i.Oqu(n.comicVm.author||"\u0110ang c\u1eadp nh\u1eadt"),i.xp6(10),i.Oqu(n.comicVm.status||"\u0110ang c\u1eadp nh\u1eadt"),i.xp6(6),i.hij("\u0110\u1ecdc ",n.comicVm.lastChapter,""))},directives:[l],styles:[".comic-content[_ngcontent-%COMP%], .object-cover[_ngcontent-%COMP%]{height:256px;overflow:hidden}"]}),t})()},3528:(t,n,e)=>{"use strict";e.d(n,{u:()=>d});var o=e(1161),i=e(4788),c=e(2057),r=e(4466),a=e(528);function s(t,n){if(1&t&&(i.ynx(0),i.TgZ(1,"div"),i._UZ(2,"k-item-comic",4),i.qZA(),i.BQk()),2&t){const t=n.$implicit;i.xp6(2),i.Q6J("comic",t)}}function g(t,n){if(1&t&&(i.ynx(0),i._UZ(1,"k-header",1),i.TgZ(2,"div",2),i.YNc(3,s,3,1,"ng-container",3),i.qZA(),i.BQk()),2&t){const t=n.ngIf,e=i.oxw();i.xp6(1),i.Q6J("pagination",t),i.xp6(2),i.Q6J("ngForOf",null==t?null:t.data)("ngForTrackBy",e.trackById)}}let d=(()=>{class t{constructor(t){this.comicSvr=t,this.comics$=this.comicSvr.getComicHot()}ngOnInit(){}trackById(t,n){return n.id}}return t.\u0275fac=function(n){return new(n||t)(i.Y36(o.J))},t.\u0275cmp=i.Xpm({type:t,selectors:[["k-recommend-manga"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"pagination"],[1,"grid","grid-cols-1","gap-4","xl:grid-cols-2","lg:grid-cols-1","md:grid-cols-1","sm:grid-cols-1","xs:grid-cols-1"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"comic"]],template:function(t,n){1&t&&(i.YNc(0,g,4,3,"ng-container",0),i.ALo(1,"async")),2&t&&i.Q6J("ngIf",i.lcZ(1,1,n.comics$))},directives:[c.O5,r.G,c.sg,a.d],pipes:[c.Ov],styles:[""]}),t})()},1161:(t,n,e)=>{"use strict";e.d(n,{J:()=>r});var o=e(9504),i=e(4788),c=e(8497);let r=(()=>{class t{constructor(t){this.http=t}getComicHot(){return this.http.get(o.Bf.COMIC.GET_COMIC,{params:{limit:25,offset:1,filter:decodeURIComponent(JSON.stringify({filters:[{field:"isHot",operator:"eq",value:!0}],logic:"or"})),sort:decodeURIComponent(JSON.stringify({field:"modified",dir:"DESC"}))}})}getComicLatestUpdate(t){return this.http.get(o.Bf.COMIC.GET_COMIC,{params:{limit:t.pageSize,offset:t.pageIndex,sort:decodeURIComponent(JSON.stringify({field:"modified",dir:"DESC"}))}})}getComicByCategory(t,n){return this.http.get(o.Bf.COMIC.GET_COMIC,{params:{limit:n.pageSize,offset:n.pageIndex,filter:decodeURIComponent(JSON.stringify({filters:[{field:"category",operator:"contain",value:t}],logic:"or"})),sort:decodeURIComponent(JSON.stringify({field:"modified"}))}})}getChapterByLink(t){return this.http.get("chapter/getChapterByLink?link="+t)}getImageChapterByLink(t){return this.http.get("chapter/getImageChapterByLink?link="+t)}}return t.\u0275fac=function(n){return new(n||t)(i.LFG(c.eN))},t.\u0275prov=i.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);