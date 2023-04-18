// DOM in javascript


const head = document.getElementsByTagName('span')[0];
head.innerText = "Project 🙌"

// Tag ko access kaise kiye jae
const form1 = document.getElementsByClassName('form')[0];
form1.addEventListener('submit', getData);

const tbody = document.getElementById('table_body');

function getData(e) {
    // event
    e.preventDefault();
    const bookname = document.getElementById('bookname').value;
    const author = document.getElementById('author').value;
    console.log(bookname, author)
    
    tbody.innerHTML += `<tr>
                            <td> ${bookname} </td > 
                            <td> ${author} </td>
                            <td onclick="deleted(this)" >❌</td>
                        </tr>`
    form1.reset()            
}


function deleted(e){
    
    tbody.deleteRow( e.parentNode.rowIndex- 1)
    console.log("deleted");
}



