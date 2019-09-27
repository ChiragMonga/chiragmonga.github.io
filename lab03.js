
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
    node.style.borderTop = "1px solid lightgray"

}

function deleteclicked(b){
    var  list = document.getElementById("list");
    b.parentElement.remove();
    if(list.childNodes.length === 0){
        list.style.borderTop = "none";
    }
}