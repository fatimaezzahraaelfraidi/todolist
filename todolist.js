function push() {
    var input = document.getElementById('input').value;
    if (input.length == 0)
        alert("Please Enter a Task");
    else {
        document.getElementById('tasks').innerHTML += `
        <div class="task">
            <input type="checkbox" name="check" class="check" id="check" >
            <span id="taskname" class="tex" style="text-decoration: none ;">
                ${document.getElementById('input').value}
            </span>
            <button class="delete" >
                <i class="far fa-trash-alt"></i>
            </button>
        </div>
    `;
        //delete task
        document.getElementById('input').value = "";
        var current_tasks = document.getElementsByClassName('delete');
        for (var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        //strike task
        var current_v = document.getElementsByClassName('task');
        for (var i = 0; i < current_v.length; i++) {
            current_v[i].onchange = function() {
                var check = this.querySelector('#check');
                if (check.checked == true) {
                    this.style.textDecoration = "line-through";
                    this.style.color = "grey";
                } else {
                    this.style.textDecoration = "none";
                    this.style.color = "black";
                }
            }
        }

    }
}