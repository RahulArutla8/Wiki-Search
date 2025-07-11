let searchInputEl=document.getElementById('searchInput');
let searchResultsEl=document.getElementById("searchResults");
let spinnerEl=document.getElementById("spinner");
function createAndAppendSearchResult(searchResult){
    let {title, link, description}=searchResult;
    //div element-result item
    let resultItemEl=document.createElement("div");
    resultItemEl.classList.add("result-item");
    searchResultsEl.appendChild(resultItemEl);
    //anchor title element
    let anchorTitleEl=document.createElement("a");
    anchorTitleEl.classList.add("result-title");
    anchorTitleEl.textContent=title;
    anchorTitleEl.href=link;
    anchorTitleEl.target="_blank";
    resultItemEl.appendChild(anchorTitleEl);
    
    let titleBreakEl=document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);
    
    let urlEl=document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href=link;
    urlEl.target="_blank";
    urlEl.textContent=link;
    resultItemEl.appendChild(urlEl);
    
    let lineBreakEl=document.createElement("br");
    resultItemEl.appendChild(lineBreakEl);
    
    let descriptionEl=document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent=description ;
    resultItemEl.appendChild(descriptionEl);
    
    
};
function displayResults(search_results){
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results){
        createAndAppendSearchResult(result);
    }
    
}
function searchWikipedia(event){
    if(event.key==="Enter"){
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent="";
        let searchInput=searchInputEl.value;
        console.log(searchInput);
        let url="https://apis.ccbp.in/wiki-search?search=" + searchInput;
        let options={
            method:"GET"
        };
        fetch(url,options)
        .then(function(response){
            return response.json();
        })
        .then(function(jsonData){
            let {search_results}=jsonData;
            displayResults(search_results);
        });
     }
}
searchInputEl.addEventListener("keydown",searchWikipedia);
