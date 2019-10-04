function openForm(){
    var form = document.getElementById("form");

    if(form.style.display == "none"){
        form.style.display = "block";
    }
    else{
        form.style.display = "none";
    }
    
}

function addArtist(){
    event.preventDefault();
    var inputs = document.getElementsByTagName("input");
    var name = inputs[1].value;
    var details = inputs[2].value;
    var url = inputs[3].value;
    var  list = document.getElementById("list");

    var user = {
        name: name, 
        details: details,
        url: url
    }
    var myStrorage = window.localStorage;
    var artistArray = JSON.parse(myStrorage.getItem("artist"));
    artistArray.push(user)

    myStrorage.setItem("artist", JSON.stringify(artistArray));

    var node = document.createElement("LI");   

    var mydiv = document.createElement("DIV");
    mydiv.setAttribute("class", "artists");   

    var heading = document.createTextNode(name);
    var headingp = document.createElement("P")
    headingp.appendChild(heading);
    headingp.setAttribute("class", "heading"); 
    
    var dets = document.createTextNode(details);
    var detsp = document.createElement("P")
    detsp.appendChild(dets);
    
    var image = document.createElement("IMG");
    image.src = url;
    
    var deleteb = document.createElement("button");
    var deleteT = document.createTextNode("Delete");
    deleteb.setAttribute("class", "delete");
    deleteb.setAttribute("onclick", "deleteclicked(this)");
    deleteb.appendChild(deleteT);

    mydiv.appendChild(headingp);
    mydiv.appendChild(detsp);
    
    node.appendChild(image);
    node.appendChild(mydiv);
    node.appendChild(deleteb);
                              
    list.appendChild(node);

}

function deleteclicked(b){
    var  list = document.getElementById("list");
    b.parentElement.remove();
    if(list.childNodes.length === 0){
        list.style.borderTop = "none";
    }
    var myStrorage = window.localStorage;
    var artistArray = JSON.parse(myStrorage.getItem("artist"));
    for (let i = 0; i < artistArray.length; i++) {
        artistArray.splice(i, 1);
    }
    myStrorage.setItem("artist", JSON.stringify(artistArray));
}

document.addEventListener('DOMContentLoaded', function(){
    var myStrorage = window.localStorage;
    if(myStrorage.getItem("artist")){

        var objArray = JSON.parse(myStrorage.getItem("artist"));
        for (let i = 0; i < objArray.length; i++) {
            var node = document.createElement("LI");   



            var mydiv = document.createElement("DIV");
            mydiv.setAttribute("class", "artists");   
        
            var heading = document.createTextNode(objArray[i].name);
            var headingp = document.createElement("P")
            headingp.appendChild(heading);
            headingp.setAttribute("class", "heading"); 
            
            var dets = document.createTextNode(objArray[i].details);
            var detsp = document.createElement("P")
            detsp.appendChild(dets);
            
            var image = document.createElement("IMG");
            image.src = objArray[i].url;
            
            var deleteb = document.createElement("button");
            var deleteT = document.createTextNode("Delete");
            deleteb.setAttribute("class", "delete");
            deleteb.setAttribute("onclick", "deleteclicked(this)");
            deleteb.appendChild(deleteT);
        
            mydiv.appendChild(headingp);
            mydiv.appendChild(detsp);
            
            node.appendChild(image);
            node.appendChild(mydiv);
            node.appendChild(deleteb);
                                      
            list.appendChild(node); 
        }
    }
    else {
        var artist = [];
        myStrorage.setItem("artist", JSON.stringify(artist));
    }
});

function search(){
    var searchStr = document.getElementById("searchBar");
    var artistList = document.getElementsByClassName("heading");
    

    for (let i = 0; i < artistList.length; i++) {
        var str = artistList[i].innerHTML;

         if(!str.includes(searchStr.value)){
             artistList[i].parentElement.parentElement.style.display = "none";
             console.log(artistList[i].innerHTML);
         }   
    }
}