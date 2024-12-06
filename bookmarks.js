// bookmarks.js

// Function to recursively render bookmarks
function renderBookmarks(bookmarks, parentElement) {
  bookmarks.forEach((bookmark) => {
    const listItem = document.createElement("li");

    if (bookmark.url) {
      // If the bookmark is a link
      const link = document.createElement("a");
      link.href = bookmark.url;
      link.textContent = bookmark.title || "Untitled";
      link.target = "_blank"; // Open link in a new tab
      listItem.appendChild(link);
    } else if (bookmark.children && bookmark.children.length > 0) {
      // If the bookmark is a folder
      const folderTitle = document.createElement("strong");
      folderTitle.textContent = bookmark.title || "Untitled Folder";
      listItem.appendChild(folderTitle);

      const sublist = document.createElement("ul");
      renderBookmarks(bookmark.children, sublist);
      listItem.appendChild(sublist);
    }

    parentElement.appendChild(listItem);
  });
}

// Function to fetch and display bookmarks
function displayBookmarks() {
  const bookmarksList = document.getElementById("bookmarksList");

  // Use chrome.bookmarks API to get the bookmarks tree
  chrome.bookmarks.getTree((bookmarkTree) => {
    if (bookmarkTree && bookmarkTree.length > 0) {
      renderBookmarks(bookmarkTree[0].children, bookmarksList);
    }
  });
}

// Wait until DOM is fully loaded to execute
document.addEventListener("DOMContentLoaded", displayBookmarks);
