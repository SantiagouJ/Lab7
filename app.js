    const checkboxes = document.querySelectorAll('.task-checkbox');
    const completedTasksDisplay = document.getElementById('completed-tasks');
    const remainingTasksDisplay = document.getElementById('remaining-tasks');

    let completedTasks = 0;

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', function() {
            const listItem = this.parentElement;
            if (this.checked) {
                listItem.classList.add('completed');
                
            } else {
                listItem.classList.remove('completed');

            }
        });
    });