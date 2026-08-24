# Task Tracker CLI

A simple command-line task tracker built with Node.js. It lets you add, view, update, and delete tasks, with each task's status (`To-do`, `In-Progress`, `Done`) tracked over time. Tasks are persisted to a local `tasks.json` file, which is created automatically if it doesn't exist.

Project page: https://roadmap.sh/projects/task-tracker

## Requirements

- [Node.js](https://nodejs.org/) (no external dependencies required — uses only built-in `fs` and `readline` modules)

## Running the project

Clone or download this repository, then from the project directory run:

```bash
node index.js
```

This starts an interactive menu:

```
=== My Task Tracker ===
1. Add Task
2. View Tasks
3. Update a Task
4. Delete a Task
5. Exit
```

Enter the number of the option you want and follow the prompts.

## Features

- **Add Task** — prompts for a description and creates a new task with a unique ID, status `To-do`, and `createdAt`/`updatedAt` timestamps.
- **View Tasks** — lists all tasks with their ID, description, status, and timestamps.
- **Update a Task** — given a task ID, lets you change its description or cycle its status (`To-do` → `In-Progress` → `Done`).
- **Delete a Task** — removes a task by ID.
- **Exit** — closes the application.

## Data storage

Tasks are stored in [tasks.json](tasks.json) in the project directory. Each task has the shape:

```json
{
  "id": "1787601080940",
  "description": "Wash the dishes",
  "status": "To-do",
  "createdAt": "2026-08-24T19:51:20.939Z",
  "updatedAt": "2026-08-24T19:51:20.939Z"
}
```
# task-tracker-cli
