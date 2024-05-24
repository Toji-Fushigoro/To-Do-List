const mainbut = document.getElementById('Newlist');
mainbut.addEventListener('click', function(){
  const newWindow = window.open('', '_blank');
  newWindow.document.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- Google Fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
      <!-- Font Awesome cdn css -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="./style-new.css">
      <title>To-Do List</title>
  </head>
  <body>

    <header>
      <h1>My To Do List</h1>
    </header>
    <form action="">
      <input type="text" class="todo-input">
      <button class="todo-button" type="submit">
        <i class="fas fa-plus-circle fa-lg"></i>
      </button>
      <div class="select">
        <select name="todos" class="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
    </form>

    <div class="todo-container">
      <ul class="todo-list"></ul>
    </div>

    <script src="./script.js"></script>

    </form>
  </body>
  </html>`);
  newWindow.document.close();
})