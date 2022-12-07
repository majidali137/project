console.log("welcome to this library page")

let bookNo = 1;
let bookDel = 1;

//======================Constructor==============================

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//==========================================Display Constructor=======================
function Display() {


}

//================================================Delete
function deleteBtn(bookNo) {
    document.getElementById('tr-'+bookNo).remove();
    $('#deleteModal-'+bookNo).modal('hide');
}

//==============================Add method to display prototype=======================
Display.prototype.add = function (book) {
    console.log('Adding To UI');
    tableBody = document.getElementById('tableBody');
    bookNo = bookNo + 1
    bookDel = bookDel + 1
    let uiString = `<tr id = "tr-${bookNo}">
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
                <td> 
                <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal-${bookNo}" data-whatever="@mdo">Edit Book </button>
                <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteModal-${bookNo}">Delete Book </button>
                </td>
     </tr>`;
    tableBody.innerHTML += uiString;

//============================================Delete button modal ====================
let delString = `<div class="modal fade" id="deleteModal-${bookNo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Book Delete</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" >
      Are you Sure you want to delete this Book ?
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      <button onclick ="deleteBtn(${bookNo})" id = "deleteBtn-${bookNo}" class="btn btn-danger">Delete Book </button>
    </div>
  </div>
</div>
</div>`
delBody.innerHTML +=delString;
$('deleteModal-'+bookNo).modal('hide');



//======================================Fiction=====================================

    if (book.type == 'Fiction') {
        let modalUiString = `<div class="modal fade" id="exampleModal-${bookNo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit - ${book.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="libraryForm">
                    <div class="form-group row">
                        <label for="bookName " class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedbookName-${bookNo}" placeholder="${book.name}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="Author" class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedauthor-${bookNo}" placeholder="${book.author}">
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Type</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="fiction-${bookNo}" value="Fiction" checked>
                                    <label class="form-check-label" for="fiction">
                                        Fiction
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="Programming-${bookNo}"
                                        value="Progarmming" pogramming>
                                    <label class="form-check-label" for="Progarmming">
                                        Computer Programming
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" name="type" id="Cooking-${bookNo}" value="Cooking">
                                    <label class="form-check-label" for="cooking">
                                        Cooking
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="updateData(${bookNo})">Update</button>
            </div>
        </div>
    </div>
</div>`;

        modalBody.innerHTML += modalUiString;

    }
    //===================================Computer Progarmming=========================


    if (book.type == 'Progarmming') {
        let modalUiString = `<div class="modal fade" id="exampleModal-${bookNo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit - ${book.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="libraryForm()">
                    <div class="form-group row">
                        <label for="bookName " class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedbookName-${bookNo}" placeholder="${book.name}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="Author" class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedauthor-${bookNo}" placeholder="${book.author}">
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Type</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="fiction-${bookNo}" value="Fiction"
                                        fiction>
                                    <label class="form-check-label" for="fiction">
                                        Fiction
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="Programming-${bookNo}"
                                        value="Progarmming" checked>
                                    <label class="form-check-label" for="Progarmming">
                                        Computer Programming
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" name="type" id="Cooking-${bookNo}" value="Cooking">
                                    <label class="form-check-label" for="cooking">
                                        Cooking
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="updateData(${bookNo})">Update</button>
            </div>
        </div>
    </div>
</div>`;

        modalBody.innerHTML += modalUiString;

    }

//=======================================Cooking=====================================

    if (book.type == 'Cooking') {
        let modalUiString = `<div class="modal fade" id="exampleModal-${bookNo}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Edit - ${book.name}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="libraryForm">
                    <div class="form-group row">
                        <label for="bookName " class="col-sm-2 col-form-label">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedbookName-${bookNo}" placeholder="${book.name}">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="Author" class="col-sm-2 col-form-label">Author</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="updatedauthor-${bookNo}" placeholder="${book.author}">
                        </div>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Type</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="fiction-${bookNo}" value="Fiction"
                                        fiction>
                                    <label class="form-check-label" for="fiction">
                                        Fiction
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="type" id="Programming-${bookNo}"
                                        value="Progarmming" pogramming>
                                    <label class="form-check-label" for="Progarmming">
                                        Computer Programming
                                    </label>
                                </div>
                                <div class="form-check disabled">
                                    <input class="form-check-input" type="radio" name="type" id="Cooking-${bookNo}" value="Cooking" checked>
                                    <label class="form-check-label" for="cooking">
                                        Cooking
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onclick="updateData(${bookNo})">Update</button>
            </div>
        </div>
    </div>
</div>`;

        modalBody.innerHTML += modalUiString;

    }

}


//=========================================Implement the clear Function=====================================================

Display.prototype.clear = function () {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
//=================================Implement the validate Function============================================================
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type, displayMessage) {
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type}  alert-dismissible fade show" role="alert">
  <strong>Message</strong> ${displayMessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`
    //==========================for Alert massege=====================================================================================
    setTimeout(function () {
        message.innerHTML = ''

    }, 1300);
}



//===========================Add Submit event listener to libraryform======================================================================
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log("you have submitted form");
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fictio = document.getElementById('fiction');
    let Progarmming = document.getElementById('Programming');
    let Cooking = document.getElementById('Cooking');

    if (fictio.checked) {
        type = fictio.value
    }
    else if (Progarmming.checked) {
        type = Progarmming.value
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book)

    //=======================================Dispaly Object================================================
    let display = new Display();

    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added ')
    }
    else {
        //===========================================Show arror to the user=================================
        display.show('danger', 'Sorry you cannot add this book')
    }

    e.preventDefault();
}


// =============================Edit Button===============================

function updateData(trNo) {


    console.log("you have submitted form");
    let name = document.getElementById("updatedbookName-" + trNo).value;
    let author = document.getElementById('updatedauthor-' + trNo).value;
    let type;

    let fictio = document.getElementById('fiction-' + trNo);
    let Progarmming = document.getElementById('Programming-' + trNo);
    let Cooking = document.getElementById('Cooking-' + trNo);

    if (fictio.checked) {
        type = fictio.value
    }
    else if (Progarmming.checked) {
        type = Progarmming.value
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }

    document.getElementById("tr-" + trNo).innerHTML = `
   <tr id="tr-${trNo}-${bookDel}">
   <td>${name}</td>
   <td>${author}</td>
   <td>${type}</td>
   <td> 
   <button class="btn btn-primary" data-toggle="modal" data-target="#exampleModal-${trNo}" data-whatever="@mdo">Edit Book </button>

   <button onclick="document.getElementById('tr-${trNo}-${bookDel}').remove()" id="deleteBtn-${trNo}-" class="btn btn-danger">Delete Book </button>
   </td>
   </tr>`

    $('#exampleModal-' + trNo).modal('hide');
}



