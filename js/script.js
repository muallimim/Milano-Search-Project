document.getElementById('searchbtn').addEventListener('click', searchButtonClicked);

function searchButtonClicked(){
    event.preventDefault();
    document.getElementById('result').style.visibility = 'visible';
}