import{s as G,g as C,r as y,u as x}from"./column.1d7cf5e5.js";import{d as S,a as U,r as D,u as w,s as E,e as N,x as V,w as l,h as e,i as n,j as _,t as m,g as $,ac as A,bu as R,ah as T,A as j,y as M,l as O,D as q,C as z,aS as H,aT as I}from"./index.5d02c90a.js";const J=_(" Github\u5BB6\u7684"),K=_(" \u7801\u4E91\u5BB6\u7684"),L=_("\u4FDD\u5B58"),X=S({__name:"OauthSetting",setup(P){const p=U();console.log(p);const d=D(null),r=w();let u=E(G);C().then(s=>{for(const t of s)u[t.key]=t.value});function b(){d.value.validate(s=>{if(s)r.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");else{let t=[];for(const i in u)t.push({key:i,value:u[i]});x(t).then(()=>{r.success("\u66F4\u65B0\u6210\u529F")})}})}return(s,t)=>{const i=A,h=R,g=T,o=j,c=M,f=O,v=q,F=z,B=H,k=I;return N(),V(k,{cols:"2 s:1 m:1 l:1 xl:2 2xl:3",responsive:"screen"},{default:l(()=>[e(B,null,{default:l(()=>[e(F,{"label-width":80,model:n(u),rules:n(y),ref_key:"formRef",ref:d},{default:l(()=>[e(i,{dashed:""},{default:l(()=>[J]),_:1}),e(h,{title:"\u56DE\u8C03\u5730\u5740",type:"info"},{default:l(()=>[_(m(n(p).baseUrl)+"/oauth/callback/github ",1)]),_:1}),e(o,{label:"Github \u5F00\u5173",path:"oauth.github.enable"},{default:l(()=>[e(g,{value:n(u)["oauth.github.enable"],"onUpdate:value":t[0]||(t[0]=a=>n(u)["oauth.github.enable"]=a),"checked-value":"1","unchecked-value":"0"},null,8,["value"])]),_:1}),e(o,{label:"Github client_id",path:"oauth.github.client_id"},{default:l(()=>[e(c,{value:n(u)["oauth.github.client_id"],"onUpdate:value":t[1]||(t[1]=a=>n(u)["oauth.github.client_id"]=a),placeholder:"\u8BF7\u8F93\u5165Github client_id"},null,8,["value"])]),_:1}),e(o,{label:"Github client_secret",path:"oauth.github.client_secret"},{default:l(()=>[e(c,{placeholder:"\u8BF7\u8F93\u5165Github client_secret",value:n(u)["oauth.github.client_secret"],"onUpdate:value":t[2]||(t[2]=a=>n(u)["oauth.github.client_secret"]=a)},null,8,["value"])]),_:1}),e(i,{dashed:""},{default:l(()=>[K]),_:1}),e(h,{title:"\u56DE\u8C03\u5730\u5740",type:"info"},{default:l(()=>[_(m(n(p).baseUrl)+"/oauth/callback/gitee ",1)]),_:1}),e(o,{label:"Gitee \u5F00\u5173",path:"oauth.gitee.enable"},{default:l(()=>[e(g,{value:n(u)["oauth.gitee.enable"],"onUpdate:value":t[3]||(t[3]=a=>n(u)["oauth.gitee.enable"]=a),"checked-value":"1","unchecked-value":"0"},null,8,["value"])]),_:1}),e(o,{label:"Gitee client_id",path:"oauth.gitee.client_id"},{default:l(()=>[e(c,{value:n(u)["oauth.gitee.client_id"],"onUpdate:value":t[4]||(t[4]=a=>n(u)["oauth.gitee.client_id"]=a),placeholder:"\u8BF7\u8F93\u5165Gitee client_id"},null,8,["value"])]),_:1}),e(o,{label:"Gitee client_secret",path:"oauth.gitee.client_secret"},{default:l(()=>[e(c,{placeholder:"\u8BF7\u8F93\u5165Gitee client_secret",value:n(u)["oauth.gitee.client_secret"],"onUpdate:value":t[5]||(t[5]=a=>n(u)["oauth.gitee.client_secret"]=a)},null,8,["value"])]),_:1}),$("div",null,[e(v,null,{default:l(()=>[e(f,{type:"primary",onClick:b},{default:l(()=>[L]),_:1})]),_:1})])]),_:1},8,["model","rules"])]),_:1})]),_:1})}}});export{X as default};