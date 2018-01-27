var json;
function reqListener () {
  json = JSON.parse(this.responseText);
  console.log(json);
  document.getElementById("para").innerHTML="";
  if(json.status == "OK"){
    var profile = document.getElementById("handle");
 	var name = document.createElement("p");
 	var obj = json.result[0];
  profile.style.display = "";
  document.getElementById("avatar").src =  obj.avatar;
  //document.getElementById("avatar").class="w3-border w3-padding";
  
  name.innerHTML = " Handle : " + obj.handle;
  profile.appendChild(name);
  if(obj.firstName)
  name.innerHTML = " Name : " + obj.firstName.toUpperCase() +obj.firstName.slice(1) + " " ;
	
  if(obj.lastName)
  name.innerHTML += obj.lastName.toUpperCase() +obj.lastName.slice(1);
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rating : "  + obj.rating+", Maximum Rating : "+obj.maxRating;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Contribution : "  + obj.contribution;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Friends of Count : "  + obj.friendOfCount;
  profile.appendChild(name);

  name = document.createElement("p");
  name.innerHTML = "Rank : "  + obj.rank+", Maximum Rank : "+obj.maxRank;
  profile.appendChild(name);  
  }
	
}

function errorRequest(){
	para.style = "font-size:36px;color:red;";
	para.innerHTML = "Error... Status : "+this.status + " Bad Request  ...TRY AGAIN ";
   document.getElementById("handle").style.display = "none";
}


function getJSON(url){
var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.addEventListener("error", errorRequest);
oReq.open("GET", url);

oReq.send();
}


function sendURL(){
	var inp = document.getElementById("input0");
	var para = document.getElementById("para");
	var handle = document.getElementById("handle");
	handle.innerHTML = "";
	var img = document.createElement("img");
	img.id = "avatar";
  
  img.class="w3-border w3-padding"
	handle.appendChild(img);

	
	
	if(inp){
		if(inp.value==""){
			alert("Please Enter Username(Translation(en to Hindi) Kuch USer name toh dalo bhai) ");
		}else{
			para.style = "font-size:36px; margin-left:45%;";

			para.innerHTML = "Loading.....";
			document.getElementById("handle").style.display = "none";
			var url = "http://codeforces.com/api/user.info?handles=" + inp.value;
			getJSON(url);
		}
	}
}
