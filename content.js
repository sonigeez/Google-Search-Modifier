window.addEventListener('load', function() {
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
        text1.textContent = "Soni.in";
        text1.style.margin = "0";
        text1.style.color = "#fffff"; // Google blue color

        // Text 2
        let text2 = document.createElement("p");
        text2.textContent = "https://www.Soni.in > Laptops";
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
        text3.textContent = "Buy Sony(soni) laptop Online at high Prices";
        text3.style.margin = "0";
        text3.style.color = "#87B1F2"; // Google blue color

        // Text 4
        let text4 = document.createElement("p");
        text4.textContent = "Laptops Laptops and Laptops. Double Payment on Cash on DeliveryShop Laptops with latest technology for your home or personal needs. Get high-performing best laptops from wide range of Inspiron, Vostro & Alienware gamin..";
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
});
