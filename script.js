let a = 0
// Проверяем, есть ли сохраненные задачи в локальном хранилище
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    
    // Очищаем список перед загрузкой
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const tr = document.createElement('tr');
        
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');
        td1.textContent = task;
        const checkbox2 = document.createElement('input');
        checkbox2.type = 'checkbox';
        const checkbox3 = document.createElement('input');
        checkbox3.type = 'checkbox';
        // Создаем кнопку "Удалить"
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        if(a%2==0){
            tr.className = 'tr1'
        }
        else{
            tr.className = 'tr2'
        }
        td2.appendChild(checkbox2)
        td3.appendChild(checkbox3)
        td4.appendChild(deleteButton);//добавил кнопку в элемент таблици
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);//добавил сами элементы таблици
        taskList.appendChild(tr);
        a++
    });
}

// Функция для удаления задачи
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.splice(index, 1); // Удаляем задачу по индексу
    localStorage.setItem('tasks', JSON.stringify(tasks)); // Сохраняем обновленный массив задач
    loadTasks(); // Перезагружаем список задач
}

// Добавляем задачу в локальное хранилище
document.getElementById('addButton')?.addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput').value;
    
    if (taskInput) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(taskInput);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        // alert('Задача добавлена!');
        window.location.href = 'index.html'; // Перенаправляем на главную страницу
    } 
    // else {
    //     alert('Введите текст задачи!');
    // }
});

// Загружаем задачи на главной странице
if (document.getElementById('taskList')) {
    loadTasks();
}
else{
    loadTasks();
}
