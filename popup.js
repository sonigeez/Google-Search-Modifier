document.addEventListener('DOMContentLoaded', function() {
    let ul = document.getElementById("items");
    
    chrome.storage.local.get({boughtItems: []}, function(result) {
        let items = result.boughtItems;
        for (let i = 0; i < items.length; i++) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.textContent = items[i].title;
            a.href = items[i].url;
            a.target = "_blank";
            li.appendChild(a);
            ul.appendChild(li);
        }
    });
});
