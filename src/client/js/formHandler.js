function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    try {
        Client.filterText(formText);    
    } catch (error) {
        alert('Please input valid text');
    }  

    fetch('http://localhost:8000/sentiment', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({text: formText}),
    })
        .then(res => res.json())
        .then(function (res) {
            // console.log('formHandler response: ', res);
            document.querySelector('section.results #subjectivity').innerHTML = res.subjectivity;
            document.querySelector('section.results #confidence').innerHTML = res.confidence;
            document.querySelector('section.results #irony').innerHTML = res.irony;
            document.querySelector('section.results #sentimented_concept_form').innerHTML = res.sentimented_concept_list[0].form;
            document.querySelector('section.results #sentimented_concept_score_tag').innerHTML = res.sentimented_concept_list[0].score_tag;
            document.querySelector('section.results #sentimented_concept_type').innerHTML = res.sentimented_concept_list[0].type;
        })
}

export { handleSubmit }
