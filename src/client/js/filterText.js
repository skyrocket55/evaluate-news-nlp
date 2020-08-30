function filterText(inputText) {
    // inputText = inputText.replace(/[.*+\-?^${}()|[\]\\]/g, '');

    var regex = /[.*+\-?^${}()|[\]\\]/g;
    
    var replaced = inputText.search(regex) >= 0;
    if (replaced) {
        inputText = inputText.replace(regex, '');
    } else {
        alert('Please input valid text');
    }

}

export { filterText }
