(function () {
  "use strict";

  const url = "https://jsonplaceholder.typicode.com/posts";
  const listElement = document.getElementById("list");

  function createListItemElement(listItem) {
    const listItemElement = document.createElement("li");

    const titleElement = document.createElement("h3");
    titleElement.textContent = listItem.title;

    const bodyElement = document.createElement("p");
    bodyElement.textContent = listItem.body;

    listItemElement.appendChild(titleElement);
    listItemElement.appendChild(bodyElement);

    return listItemElement;
  }

  function createList(listItems) {
    if (!Array.isArray(listItems)) {
      console.error(`listItemsは配列要素ではありません。 ${listItems}`);
      return;
    }

    listItems.forEach(listItem => {
      listElement.append(createListItemElement(listItem));
    });
  }

  fetch(url)
    .then(res => res.json())
    .then(json => createList(json))
    .catch(err => console.error(err));
})();
