function getFirstSelector(selector){
    return document.querySelector(selector);
};

function nestedTarget(target){
    const nest = document.querySelector("#nested")
    return nest.querySelector(".target")
};

function increaseRankBy(n) {
    const ranked = document.querySelectorAll('.ranked-list li')
    ranked.forEach(function(item){
        return item.innerText = parseInt(item.innerText) + parseInt(n)
    })
}

function deepestChild(node){
    if (typeof node.innerText === 'string'){
        return node
    } else {
        return deepestChild(node.child[0])
    }
}