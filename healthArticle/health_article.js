// Declare a variable named xhr to create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// Create another variable named url to define the URL of the JSON file and fetched
var url = "./health_article.json";

// Now, you need to prepare a GET request to the specified URL, which you have saved in a variable named url in asynchronous mode
xhr.open("GET", url, true);

// In this step, you need to inform the XMLHttpRequest object that the expected response from the server should be in JSON format.
xhr.responseType = "json";

// You need to define what should happen when the data is successfully loaded using xhr.onload = function() { ... }
xhr.onload = function () {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById("articles");
    articles.forEach(function (article) {
        var articleDiv = document.createElement("div");
        articleDiv.classList.add("article");

        var title = document.createElement("h2");
        title.textContent = article.title;

        var description = document.createElement("p");
        description.textContent = article.description;

        var waysHeader = document.createElement("h3");
        waysHeader.textContent = "Ways to Achieve:";

        var waysList = document.createElement("ul");
        article.ways_to_achieve.forEach(function (way) {
            var listItem = document.createElement("li");
            listItem.textContent = way;
            waysList.appendChild(listItem);
        });

        var benefitsHeader = document.createElement("h3");
        benefitsHeader.textContent = "Benefits:";

        var benefitsList = document.createElement("ul");
        article.benefits.forEach(function (benefit) {
            var listItem = document.createElement("li");
            listItem.textContent = benefit;
            benefitsList.appendChild(listItem);
        });

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);

        articlesDiv.appendChild(articleDiv);
    });
};

xhr.onerror = function () {
    console.error("XHR ERROR (network or blocked request)");
};

// You need to send the XMLHttpRequest to fetch the data from the specified URL and include the given code at the end of the JavaScript file.
xhr.send();
