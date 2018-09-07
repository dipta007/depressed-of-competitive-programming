contest_words = [
    "suffix array",
    "prefix trie",
    "dynamic programming",
    "contest",
    "codeforces",
    "programming",
    "competitive programming",
    "algorithm",
    "data structure",
    "codeforces",
    "light oj",
    "lightoj",
    "spoj",
    "stack",
    "codeforce",
    "code",
    "queue",
    "ranking",
    "violet",
    "purple"
]

contestWordsPattern = new RegExp(contest_words.join("|"), "gi");

function hasChangedPage() {
    let elements = document.getElementsByTagName('*');

    for (var i = 0; i < elements.length; i++) {
        let element = elements[i];
    
        for (var j = 0; j < element.childNodes.length; j++) {
            let node = element.childNodes[j];
    
            if (node.nodeType === 3) {
                let text = node.nodeValue;
                let replacedText = text.replace(contestWordsPattern, "****");
    
                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
}

var x = new MutationObserver(function (e) {
    if (e[0].addedNodes) {
        hasChangedPage()    
    }
});

hasChangedPage()

var elements = document.getElementsByTagName('*');
for(var i=0; i<elements.length; i++) {
    var ele = elements[i];
    x.observe(ele, { childList: true })
}