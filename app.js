
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
            
            for(let i =0; i<jsData.length; i++){
                console.log(jsData);
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

// let req = new XMLHttpRequest();
// req.open("GET","https://api.github.com/users/moh-mme/repos");
// req.send();
// console.log(req);
// req.onreadystatechange = function (){
//     console.log(req.readyState);
//     console.log(req.status);
//     if(this.readyState === 4 && this.status === 200){
//         let jsData = JSON.parse(this.responseText);
//         console.log(jsData);
//         for(let i = 0; i<= jsData.length; i++){
//             // let div = document.createElement("div");
//             // let repoName = document.createElement("h2");
//             // repoName.innerHTML = jsData[i].name;
//             // div.appendChild(repoName);
//             // document.body.appendChild(div);
//         }
//     }
// }

