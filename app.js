// 1-Masala: "Student Management"
let students = [
  { id: 1, name: "Ali", age: 20 },
  { id: 2, name: "Vali", age: 22 }
];

function addStudent(id, name, age) {
  students.push({ id, name, age });
}

function getStudents() {
  console.log(students);
}

function updateAge(id, newAge) {
  let student = students.find(s => s.id === id);
  if (student) {
    student.age = newAge;
  }
}

function deleteStudent(id) {
  students = students.filter(s => s.id !== id);
}


// 2-Masala: "Shopping Cart"
let cart = [];

function addToCart(product) {
  let existingProduct = cart.find(item => item.id === product.id);
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
  } else {
    cart.push(product);
  }
}

function showCart() {
  let totalSum = 0;
  cart.forEach(item => {
    console.log(`Savatda: ${item.name} - ${item.quantity} dona. Narxi: $${item.price}`);
    totalSum += item.price * item.quantity;
  });
  console.log(`Umumiy summa: $${totalSum}`);
}

function changeQuantity(id, count) {
  let product = cart.find(item => item.id === id);
  if (product) {
    product.quantity = count;
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
}


// 3-Masala: "To-Do List"
let todos = [];
let todoIdCounter = 1;

function addTask(taskMatni) {
  todos.push({
    id: todoIdCounter++,
    task: taskMatni,
    isCompleted: false
  });
}

function viewTasks(filterType) {
  let filteredTasks = todos.filter(todo => {
    if (filterType === "completed") return todo.isCompleted;
    if (filterType === "pending") return !todo.isCompleted;
    return true;
  });
  console.log(filteredTasks);
}

function toggleTask(id) {
  let todo = todos.find(item => item.id === id);
  if (todo) {
    todo.isCompleted = !todo.isCompleted;
  }
}

function clearCompleted() {
  todos = todos.filter(todo => !todo.isCompleted);
}


// 4-Masala: "Book Finder"
let library = [
  { id: 1, title: "O'tkan kunlar", author: "Abdulla Qodiriy", isAvailable: true },
  { id: 2, title: "Mehrobdan Chayon", author: "Abdulla Qodiriy", isAvailable: true }
];

function addBook(title, author) {
  let newId = library.length > 0 ? library[library.length - 1].id + 1 : 1;
  library.push({ id: newId, title, author, isAvailable: true });
}

function searchBook(query) {
  let lowerQuery = query.toLowerCase();
  return library.filter(book => 
    book.title.toLowerCase().includes(lowerQuery) || 
    book.author.toLowerCase().includes(lowerQuery)
  );
}

function borrowBook(id) {
  let book = library.find(b => b.id === id);
  if (book) {
    if (!book.isAvailable) {
      console.log("Bu kitob band!");
    } else {
      book.isAvailable = false;
    }
  }
}

function removeBook(id) {
  library = library.filter(book => book.id !== id);
}


// 5-Masala: "Movie Playlist"
let movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

function addMovie(title, genre, rating) {
  let newId = movies.length > 0 ? movies[movies.length - 1].id + 1 : 1;
  movies.push({ id: newId, title, genre, rating });
}

function getTopMovies(minRating) {
  return movies.filter(movie => movie.rating >= minRating);
}

function updateMovie(id, newDataObject) {
  movies = movies.map(movie => 
    movie.id === id ? { ...movie, ...newDataObject } : movie
  );
}

function deleteMovie(id) {
  movies = movies.filter(movie => movie.id !== id);
}