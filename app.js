const Input = document.querySelector('#exampleInputEmail1');
const div = document.querySelector('#todos');



function renderTodo(){
  for (let i = 0; i < array.length; i++ ){
    div.innerHTML+= `<div class="container border p-4 rounded mt-4 
    d-flex justify-content-between align-items-center mt-2">
      <div> <h1>${array[i]}</h1></div>
      <div>
        <button type="button" onclick="deleteTodo(${i})" class="btn btn-danger text-white"> deleted</button>
        <button type="button" onclick="editTodo(${i})" class="btn btn-success text-white"> Edit </button>
      </div>
    </div>`
  }
}

  const array =[];
  function Addtodo(){
    array.push(Input.value);
    renderTodo()
    Input.value='';
  };
  



function deleteTodo(index) {
  array.splice(index, 1);
  renderTodo();
};
  

function editTodo(index) {
  const updateedValue =  prompt('Enter new task:', array[index]);
  array.splice(index ,i , updateedValue);
  
}