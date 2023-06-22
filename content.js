let dummyData = [
    {
        query: "laptop",
        title: "ThinkPad X13 Gen 2 (13, Intel)",
        description: "The ultimate in mobile productivity",
        url: "https://www.lenovo.com/in/en/laptops/thinkpad/thinkpad-x/X13-G2/p/22TPX13X3N2",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/02/94/54/07/1000_F_294540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "smartphone",
        title: "Phone Zone",
        description: "Get the latest smartphones at unbeatable prices",
        url: "https://www.phonezone.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/03/94/54/07/1000_F_394540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "headphone",
        title: "Audio Store",
        description: "Premium quality headphones for the ultimate audio experience",
        url: "https://www.audiostore.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/04/94/54/07/1000_F_494540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "gaming",
        title: "Game World",
        description: "Top-tier gaming gear for hardcore gamers",
        url: "https://www.gameworld.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/05/94/54/07/1000_F_594540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "books",
        title: "Book Haven",
        description: "A wide range of books from all genres",
        url: "https://www.bookhaven.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/06/94/54/07/1000_F_694540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "kitchen appliances",
        title: "Kitchen Store",
        description: "High-quality appliances for your kitchen",
        url: "https://www.kitchenstore.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/07/94/54/07/1000_F_794540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "furniture",
        title: "Furniture Mart",
        description: "Stylish and comfortable furniture for your home",
        url: "https://www.furnituremart.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/08/94/54/07/1000_F_894540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "office supplies",
        title: "Office Depot",
        description: "All the supplies you need for your office",
        url: "https://www.officedepot.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/09/94/54/07/1000_F_994540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "home decor",
        title: "Decor House",
        description: "Beautiful decor items to brighten up your home",
        url: "https://www.decorhouse.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/10/94/54/07/1000_F_1094540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    },
    {
        query: "toys",
        title: "Toy World",
        description: "Fun and educational toys for children of all ages",
        url: "https://www.toyworld.com",
        imageUrl: "https://as2.ftcdn.net/v2/jpg/11/94/54/07/1000_F_1194540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"
    }
];


window.addEventListener('load', function() {
    let searchQuery = document.querySelector('input[name="q"]').value; // Get the search query
    let searchResult = document.querySelector(".g"); // Select only the first search result
    if (searchResult && searchQuery) { // Check if the search result and search query exist
        let searchQueryWords = searchQuery.toLowerCase().split(' ');
        let data = dummyData.find(item => {
            let itemQueryWords = item.query.toLowerCase().split(' ');
            return searchQueryWords.some(word => itemQueryWords.includes(word));
        });
        if (data) {
            createUI(data.title, data.description, data.url, data.imageUrl);
        }
    }
});

function createUI(title, description, url, imageUrl) {
    let searchResult = document.querySelector(".g"); // Select only the first search result
    if (searchResult) { // Check if the search result exists
        // Outermost container
        let container = document.createElement("div");
        container.style.display = "flex";
        container.style.justifyContent = "flex-start"; 

        // Image
        let img = document.createElement("img");
        img.src = "https://as2.ftcdn.net/v2/jpg/02/94/54/07/1000_F_294540722_VIwSWyrU6q781SkHWSlzUDXjfouRlj47.jpg"; // Placeholder image, replace with your own image source
        img.alt = "Image description";
        img.style.width = "30px";
        img.style.height = "30px";
        img.style.marginRight = "16px";
        img.style.borderRadius = "50%";

        // Text container
        let textContainer = document.createElement("div");

        // Text 1
        let text1 = document.createElement("p");
        text1.textContent = title;
        text1.style.margin = "0";
        text1.style.color = "#fffff"; // Google blue color

        // Text 2
        let text2 = document.createElement("p");
        text2.textContent = url + " ";
        text2.style.margin = "0";
        text2.style.color = "#70757a"; // Google gray color

        // Append text elements to the text container
        textContainer.appendChild(text1);
        textContainer.appendChild(text2);

        // Append image and text container to the container
        container.appendChild(img);
        container.appendChild(textContainer);

        // Insert the new element before the first child of the result
        searchResult.insertBefore(container, searchResult.firstChild);

        // Second container
        let secondContainer = document.createElement("div");

        // Text 3
        let text3 = document.createElement("h3");
        text3.textContent = title;
        text3.style.margin = "0";
        text3.style.color = "#87B1F2"; // Google blue color

        // Text 4
        let text4 = document.createElement("p");
        text4.textContent = description;
        text4.style.color = "#BDC1C5"; // Google gray color
        
        let buttonContainer = document.createElement("div");
        buttonContainer.style.display = "flex";
        buttonContainer.style.gap = "10px";
        buttonContainer.style.marginLeft = "auto"; // Add marginLeft

        // Button 1
        let button1 = document.createElement("button");
        button1.textContent = "Buy Now";
        button1.style.padding = "10px";
        button1.style.borderRadius = "5px";
        button1.style.backgroundColor = "#047A55";
        button1.style.color = "#ffffff";
        button1.style.cursor = "pointer"; 
        button1.style.border = "none";  

        button1.addEventListener('click', function() {
            // This will open the URL in a new tab when clicked
            window.open(url, '_blank');
        
            // Send message to background script to save item
            chrome.runtime.sendMessage({
                type: 'BUY_ITEM',
                title: title,
                url: url
            });
        });
        


        // Button 2
        let button2 = document.createElement("button");
        button2.textContent = "Remove it";
        button2.style.padding = "10px";
        button2.style.borderRadius = "5px";
        button2.style.backgroundColor = "#C81E1D";
        button2.style.color = "#ffffff";
        button2.style.cursor = "pointer";  
        button2.style.border = "none";  
        button2.addEventListener('click', function() {
            // This will remove the entire searchResult when clicked
            console.log("Removing");
            searchResult.removeChild(container);
            searchResult.removeChild(secondContainer);

        });



        // Append buttons to the button container
        buttonContainer.appendChild(button1);
        buttonContainer.appendChild(button2);

        // Append text elements to the second container
        secondContainer.appendChild(text3);
        secondContainer.appendChild(text4);
        container.appendChild(buttonContainer); // This line is new


        // Insert the new element after the first container
        searchResult.insertBefore(secondContainer, container.nextSibling);
    }
}
