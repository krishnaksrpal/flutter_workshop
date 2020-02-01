let postForm = makeAform();
getNewPosts();
function getNewPosts() {
    fetch("https://krishnaksrpal.glitch.me/post/10", {
        method: "get"
        // body: {"title":"post","desc":"my post desc"}
    }).then(
        (data) => data.json()
    ).then(
        (res) => {
            makeAList(res);
        }
    );
}


function makeAform() {
    let divHoldingform = document.createElement("div");
    let divcontainer = document.createElement("div");
    let form = document.createElement("form");

    let inpPostTitle = document.createElement("input");
    let labTitle = document.createElement("label");

    let inpPostDesc = document.createElement("input");
    let labDesc = document.createElement("label");

    let subbut = document.createElement("input");

    divHoldingform.setAttribute("class", "card");
    divcontainer.setAttribute("class", "container");
    form.setAttribute("id", "postForm");

    inpPostTitle.setAttribute("type", "text");
    inpPostTitle.setAttribute("id", "title");
    labTitle.setAttribute("for", "title");
    labTitle.innerText = "Give a Title for your Post";

    inpPostDesc.setAttribute("type", "text");
    inpPostDesc.setAttribute("id", "desc");
    labDesc.setAttribute("for", "desc");
    labDesc.innerText = "Give Description";

    subbut.setAttribute("type", "submit");
    subbut.setAttribute("class", "btn");
    subbut.setAttribute("style", "margin:20px;");
    form.append(inpPostTitle, labTitle, inpPostDesc, labDesc, document.createElement("br"), subbut);
    divcontainer.append(form);
    divHoldingform.append(divcontainer);
    document.body.append(divHoldingform);
    return form;

}

let divForList = document.createElement("div");
function makeAList(res) {
    res.forEach(ele => {
        let cardForEle = document.createElement("div");
        let divcontainer = document.createElement("div");
        let title = document.createElement("h5");
        let desc = document.createElement("p");

        cardForEle.setAttribute("class", "card");
        cardForEle.setAttribute("style", "padding:20px;");
        divcontainer.setAttribute("class", "container");

        title.innerText = ele["title"];
        desc.innerText = ele["desc"];

        divcontainer.append(title, desc);
        cardForEle.append(divcontainer);
        divForList.append(cardForEle);
    });
    document.body.append(divForList);
}
let myHeaders = new Headers();

myHeaders.append('Content-Type', 'application/json');
postForm.onsubmit = (e)=>{
    // e.preventDefault();
    console.log(postForm.children);
    fetch("https://krishnaksrpal.glitch.me/post/new", {
        method: "post",
        headers: myHeaders,
        body: JSON.stringify({"title":postForm.children[0].value,"desc":postForm.children[2].value})
    }).then(
        (data) => data.json()
    ).then(
        (res) => {
            makeAList(res);
        }
    );
}