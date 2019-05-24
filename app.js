function newActivity() {
    var activity = document.getElementById('input').value;
    var ul = document.getElementById("list");
    var li = document.createElement('li');

    li.appendChild(document.createTextNode("- "+activity));
    ul.appendChild(li);
    document.getElementById('input').value="";
    li.onclick = removeActivity;
}

document.body.onkeyup = function(e){
    if(e.keyCode == 13){
      newActivity(); 
    }
}

function removeActivity(e){
    e.target.parentElement.removeChild(e.target);
}

