Task Tracker CLI

Task Tracker is a project used to track and manage your tasks. In this task, you will build a simple command-line interface (CLI) to track what you need to do, what you have done, and what you are currently working on.

This project will help you practice your programming skills, including working with the filesystem, handling user inputs, and building a simple CLI application.

Requirements

The application should:

- Run from the command line.
- Accept user actions and inputs as positional arguments.
- Store tasks in a JSON file.
- Create the JSON file automatically if it does not exist.
- Use the native filesystem module of your programming language.
- Not use any external libraries or frameworks.
- Handle errors and edge cases gracefully.

The user should be able to:

- Add tasks
- Update tasks
- Delete tasks
- Mark tasks as in progress
- Mark tasks as done
- List all tasks
- List all completed tasks
- List all incomplete tasks
- List all tasks that are in progress

Example Commands

Adding a New Task

task-cli add "Buy groceries"

Output:

Task added successfully (ID: 1)

Updating a Task

task-cli update 1 "Buy groceries and cook dinner"

Deleting a Task

task-cli delete 1

Marking a Task as In Progress

task-cli mark-in-progress 1

Marking a Task as Done

task-cli mark-done 1

Listing All Tasks

task-cli list

Listing Tasks by Status

task-cli list done
task-cli list todo
task-cli list in-progress

Task Properties

Each task should contain the following properties:

Property Description
id A unique identifier for the task
description A short description of the task
status The status of the task: todo, in-progress, or done
createdAt The date and time when the task was created
updatedAt The date and time when the task was last updated

When a new task is added, all of these properties should be stored in the JSON file.

When a task is updated, its updatedAt property should also be updated.

Getting Started

1. Set Up Your Development Environment

Choose a programming language you are comfortable with, such as:

- JavaScript
- Python
- Java
- C#

Make sure you have a code editor or IDE installed, such as:

- VS Code
- PyCharm
- IntelliJ IDEA

2. Project Initialization

Create a new project directory for your Task Tracker CLI.

For example:

mkdir task-tracker
cd task-tracker

Initialize a version control system such as Git:

git init

3. Implement the Features

Start by creating a basic CLI structure to handle user inputs.

Implement each feature one at a time:

1. Add a task
2. List all tasks
3. Update a task
4. Delete a task
5. Mark a task as in progress
6. Mark a task as done
7. List tasks by status

Test each feature before moving on to the next one.

JSON Storage

Tasks should be stored in a JSON file located in the current project directory.

For example:

[
{
"id": 1,
"description": "Buy groceries",
"status": "todo",
"createdAt": "2026-08-25T01:30:00.000Z",
"updatedAt": "2026-08-25T01:30:00.000Z"
}
]

The application should create the JSON file automatically if it does not already exist.

Testing and Debugging

Test each feature individually.

After performing an operation, check the JSON file to verify that the data has been stored or updated correctly.

Test edge cases such as:

- Adding an empty task
- Updating a task that does not exist
- Deleting a task that does not exist
- Using an invalid task ID
- Using an invalid status
- Running the application when the JSON file does not exist
- Running the application when the JSON file contains invalid JSON
- Running commands without the required arguments

Finalizing the Project

Before completing the project:

- Ensure all features are implemented.
- Test every command.
- Handle errors gracefully.
- Clean up the code.
- Add comments where necessary.
- Make sure the JSON data is stored correctly.
- Write a clear README.md explaining how to install and use the CLI.

Expected Commands

The final application should support at least the following commands:

task-cli add "Task description"
task-cli update <id> "New task description"
task-cli delete <id>
task-cli mark-in-progress <id>
task-cli mark-done <id>
task-cli list
task-cli list done
task-cli list todo
task-cli list in-progress

By the end of this project, you will have developed a practical command-line tool for managing tasks while gaining experience with filesystem operations, JSON data, command-line arguments, and basic application design.
