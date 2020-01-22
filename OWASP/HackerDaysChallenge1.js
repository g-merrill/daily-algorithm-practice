(
  function(){
    var lang="en"
    fg=function(n,t){
      return n||t
    }
    w=window
    y="k"
    n=1;
    function jk(){
      try{
        return w.localStorage.getItem("secret").value
      } catch(n){
        return.75*y
      }
    }
    w.jn=function (n,t,e){
      return n+t+e
    };
    var t="to";
    w.PRINT_SECRET_TOKEN = function(n){
      var e=document;
      switch(n[5]){
        case jk:
          fg(w.history,e.domain);
          break;
        case 3:
          if (!window.location.href.startsWith('https://f74039a5ca5b517fa5c45d3ecb7cf3d5.3-248-160-167.avatao-challenge.com/webservice')) break;
          e.getElementById(w.jn(t,y,lang)).innerText=n[w.jn(t,y,lang)];
          break;
        default:this.console.log("a")
      }
    }
  }
).call(this);
PRINT_SECRET_TOKEN({
  token:"70d09b51-78d4-4477-a8f9-d2a0860a7578",
  enableScreenshot:!1,
  5:3,
  infiniteScroll:function(){
    return y*n+jk
  },
  hst:window.history.length,
  Num:4
});