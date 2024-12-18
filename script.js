document.getElementById("petitionForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the page from reloading

    // 1. Retrieve the values from form inputs
    const name = document.getElementById("name").value;
    const nationality = document.getElementById("nationality").value;
    const age = document.getElementById("age").value;

    // 2. Create a new list item element
    const listItem = document.createElement("li");

    // 3. Format the text for the list item
    listItem.textContent = `${name}, ${nationality}, Age: ${age}`;

    // 4. Append the new list item to the <ul> with id="petitionList"
    document.getElementById("petitionList").appendChild(listItem);

    // 5. Clear the form inputs for the next submission
    document.getElementById("petitionForm").reset();
});
