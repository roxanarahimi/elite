"use strict";(self["webpackChunkelite"]=self["webpackChunkelite"]||[]).push([[478],{8792:function(e,t,l){l.r(t),l.d(t,{default:function(){return U}});var a=l(3396),s=l(9242),n=l(7139);const c=e=>((0,a.dD)("data-v-d5992b0c"),e=e(),(0,a.Cn)(),e),r={class:"container-fluid p-0 m-0 text-en",style:{"overflow-x":"hidden !important"}},i={class:"container-fluid p-0"},o={class:"searchContainer w-100 text-right row px-4 my-5 justify-content-center"},d=c((()=>(0,a._)("p",{class:"col-md-6"},"Search for the word you want:",-1))),u={class:"d-flex justify-content-center text-center mt-5",style:{"min-height":"150px"}},h={key:0,class:"row justify-content-start mx-auto px-5"},p={class:"bg-gray2 p-4 h-100",style:{"border-radius":"20px"}},m=["src"],g={class:"mt-4"},w={class:"bg-gray2 p-4 h-100",style:{"border-radius":"20px"}},x=["src"],y={class:"mt-4"};function f(e,t,l,c,f,_){const v=(0,a.up)("the-menu"),b=(0,a.up)("router-link"),k=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",i,[(0,a.Wm)(v)]),(0,a._)("div",o,[d,(0,a._)("input",{id:"search",onInput:t[0]||(t[0]=(...e)=>c.search&&c.search(...e)),class:"col-md-6 w-100 rounded-pill",style:{"max-width":"400px",height:"45px",padding:"10px"},placeholder:"search...",type:"text"},null,32)]),(0,a._)("div",u,[c.data?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.wy)((0,a._)("h3",null,"products:",512),[[s.F8,c.data.products?.length]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.data.products,(e=>((0,a.wg)(),(0,a.j4)(b,{key:e.id,to:"/en/product/"+e.id,style:{"max-height":"250px"},class:"col-sm-6 col-lg-3 mb-3"},{default:(0,a.w5)((()=>[(0,a._)("div",p,[(0,a._)("img",{src:c.panelUrl+e.image,class:"img-fluid h-75 rounded",alt:""},null,8,m),(0,a._)("h6",g,(0,n.zw)(e.title_en),1)])])),_:2},1032,["to"])))),128)),(0,a.wy)((0,a._)("h3",null,"recipes: ",512),[[s.F8,c.data.articles?.length]]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(c.data.articles,(e=>((0,a.wg)(),(0,a.j4)(b,{key:e.id,to:"/en/recipe/"+e.id,style:{"max-height":"250px"},class:"col-sm-6 col-lg-3 mb-3"},{default:(0,a.w5)((()=>[(0,a._)("div",w,[(0,a._)("img",{src:c.panelUrl+e.image,class:"img-fluid h-75 rounded",alt:""},null,8,x),(0,a._)("h6",y,(0,n.zw)(e.title_en),1)])])),_:2},1032,["to"])))),128))])):(0,a.kq)("",!0)]),(0,a.Wm)(k)])}var _=l(4870),v=l(65),b=l(6518),k=l(4817),j={components:{theFooter:b.Z,theMenu:k.Z},name:"Search",setup(){const e=(0,_.iH)([]),t=(0,v.oR)(),l=t.state.panelUrl,a=()=>{let t=document.getElementById("search").value;axios.get(l+"/api/search?term="+t).then((t=>{e.value=t.data,console.log(e.value)})).catch((e=>{console.log(e)}))};return{search:a,data:e,panelUrl:l}}},D=l(89);const C=(0,D.Z)(j,[["render",f],["__scopeId","data-v-d5992b0c"]]);var U=C}}]);
//# sourceMappingURL=searchEn.79d0bbc8.js.map