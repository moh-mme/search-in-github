
let input = document.querySelector(".search-box input");
let btn = document.querySelector(".search-box .img-box");
let postList = document.querySelector(".post-list");

btn.addEventListener("click",function (){
    let req = new XMLHttpRequest();
    req.open("GET",`https://api.github.com/users/${input.value}/repos`);
    req.send();
    req.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200){
            let jsData = JSON.parse(this.responseText);
            postList.innerHTML = "";
            for(let i =0; i<jsData.length; i++){
                let li = document.createElement('li');
                let pos = document.createElement('p');
                pos.innerHTML = jsData[i].name;
                let dat = document.createElement('p');
                dat.innerHTML = jsData[i].updated_at;
                li.appendChild(pos);
                li.appendChild(dat);
                postList.appendChild(li).style.transition = "all .5s";
                input.value = "";
            }
        }
    }
});

