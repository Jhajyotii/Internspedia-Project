const searchBar = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const searchClose = document.getElementById("searchClose")

searchBar.style.display = "none";

searchButton.addEventListener("click", () => {
        searchClose.style.display = "flex"
        searchButton.style.display = "none"
        if(searchButton.style.display === "none") {
            searchBar.style.display = "flex"
        }else{
            searchBar.style.display = "none"
        }
    }
)

searchClose.addEventListener("click", () => {
    searchClose.style.display = "none"
    searchButton.style.display = "flex"
    if(searchButton.style.display === "none") {
        searchBar.style.display = "flex"
    }else{
        searchBar.style.display = "none"
    }
}
)