function enq(){
  
  var h = JSON.parse(this.responseText);
  console.log(h);
  
  //var hobj;
  document.getElementById("para1").innerHTML="";
  if(h.status=="OK"){
    var profile = document.getElementById("blog");
    profile.style.display = "";
  var inp=document.createElement("p");
  inp.innerHTML="BLOG_ID: "+ h.result.id;
  profile.appendChild(inp);


  var c=document.createElement("p");
  c.innerHTML="Creation TimeSeconds: "+ h.result.creationTimeSeconds;
  profile.appendChild(c);
 
  var r=document.createElement("p");
  r.innerHTML="Rating: "+ h.result.rating;
  profile.appendChild(r);

  a=document.createElement("p");
  a.innerHTML="Author Handle: "+h.result.authorHandle;
  profile.appendChild(a);


  t=document.createElement("p");
  t.innerHTML="Title: "+ h.result.title;
  profile.appendChild(t);

  t=document.createElement("p");
  t.innerHTML="Title: "+ h.result.content;
  profile.appendChild(t);

  var t=document.createElement("p");
  tags.innerHTML="Tags: "+ h.result.tags;
  profile.appendChild(t);

 
}


}


function error()
{
  para1.style = "font-size:36px; color:red;margin-left:4%;";
  para1.innerHTML = "Error Bad Request  ...TRY AGAIN ";
   document.getElementById("blog").style.display = "none";
}

function main(url){

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", enq);
oReq.addEventListener("error", error);

oReq.open("GET", url);
oReq.send();
}



function sendURL(){
  var ip = document.getElementById("i");
  var para1 = document.getElementById("para1");
  var blog = document.getElementById("blog");
  blog.innerHTML = "";
  // img = document.createElement("img");
  //img.id = "avatar";
  
  //img.class="w3-border w3-padding"
  //handle.appendChild(img);

  
  
  if(ip){
    if(ip.value==""){
      alert("Please Enter Username ");
    }else{
      para1.style = "font-size:36px; margin-left:4%;";

      para1.innerHTML = "Loading.....";
      document.getElementById("blog").style.display = "none";
      var url = " http://codeforces.com/api/blogEntry.view?blogEntryId="+ip.value;
      main(url);
    }
  }
}