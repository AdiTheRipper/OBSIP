// Array to hold tasks
var tasks = [];

function addTask() {
    //  task input value
    var taskInput = $("#taskInput").val();

    // Add the task to the array
    tasks.push({
        text: taskInput,
        pinned: false,
        checked: false
    });

    // Render the task list
    renderTaskList();
}

function toggleTaskChecked(index) {
    // Toggle the checked state of the task
    tasks[index].checked = !tasks[index].checked;

    // Render the task list
    renderTaskList();
}

function toggleTaskPinned(index) {
    // Toggle the pinned state of the task
    tasks[index].pinned = !tasks[index].pinned;

    // Render the task list
    renderTaskList();
}

function renderTaskList() {
    // Get the task list element
    var taskList = $("#taskList");

    // Empty the task list
    taskList.empty();

    // Loop through each task and render it
    tasks.forEach(function(task, index) {
        // Create the task item element
        var taskItem = $("<div>").addClass("task-item");
        if (task.checked) {
            taskItem.addClass("task-item-checked");
        }

        // Create the checkbox element
        var checkbox = $("<input>").attr({
            type: "checkbox",
            checked: task.checked
        }).addClass("form-check-input me-2");

        // Attach a change event listener to the checkbox
        checkbox.on("change", function() {
            toggleTaskChecked(index);
        });

        // Create the task text element
        var taskText = $("<span>").addClass("task-item-text").text(task.text);
        if (task.checked) {
            taskText.addClass("text-decoration-line-through");
        }

        // Create the pin icon element
        var pinIcon = $("<i>").addClass("bi bi-pin task-item-pin");
        if (task.pinned) {
            pinIcon.addClass("pinned");
        }

        // Attach a click event listener to the pin icon
        pinIcon.on("click", function() {
            toggleTaskPinned(index);
        });

        // Add the checkbox, task text, and pin icon to the task item element
        taskItem.append(checkbox);
        taskItem.append(taskText);
        taskItem.append(pinIcon);

        // Add the task item element to the task list
        taskList.append(taskItem);
    });
}

// Render the initial task list
renderTaskList();
