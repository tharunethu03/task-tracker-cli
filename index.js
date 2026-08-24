const readline = require("readline");
const fs = require("fs");

const FILE_NAME = "tasks.json";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

function loadTasks() {
  if (!fs.existsSync(FILE_NAME)) {
    return [];
  }

  const data = fs.readFileSync(FILE_NAME, "utf8");
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync(FILE_NAME, JSON.stringify(tasks, null, 2));
}

async function main() {
  const tasks = loadTasks();

  while (true) {
    console.log("\n=== My Task Tracker ===");
    console.log("1. Add Task");
    console.log("2. View Tasks");
    console.log("3. Update a Task");
    console.log("4. Delete a Task");
    console.log("5. Exit");

    const choice = await ask("Choose an option: ");

    switch (choice) {
      case "1":
        const description = await ask("Enter the task: ");
        const now = new Date().toISOString();

        const newTask = {
          id: Date.now().toString(),
          description: description,
          status: "To-do",
          createdAt: now,
          updatedAt: now,
        };

        tasks.push(newTask);
        saveTasks(tasks);

        console.log(`Task: "${description}" successfully added!`);
        break;

      case "2":
        if (tasks.length === 0) {
          console.log("No tasks available yet.");
          break;
        }

        console.log("\n=== Tasks ===");

        tasks.forEach((task, index) => {
          console.log(`\n${index + 1}`);
          console.log(`\nID: ${task.id}`);
          console.log(`Task: ${task.description}`);
          console.log(`Status: ${task.status}`);
          console.log(`Created: ${task.createdAt}`);
          console.log(`Updated: ${task.updatedAt}`);
        });

        break;

      case "3":
        const updateTaskID = await ask(
          "Enter the ID of the task you wanna update: ",
        );
        if (!updateTaskID) {
          console.log("Task ID cannot be empty");
        } else {
          const taskToUpdate = tasks.find((task) => task.id === updateTaskID);
          if (!taskToUpdate) {
            console.log(`Task with ID "${updateTaskID}" not found.`);
          }
          const updateChoice = await ask(
            "What do you wanna update? (1. Description, 2. Status): ",
          );

          switch (updateChoice) {
            case "1":
              const newDescription = await ask("Enter the new description: ");
              taskToUpdate.description = newDescription;
              taskToUpdate.updatedAt = new Date().toISOString();
              saveTasks(tasks);
              console.log(
                `Task with ID "${updateTaskID}" successfully updated!`,
              );

              break;

            case "2":
              if (taskToUpdate.status === "To-do") {
                const newStatus = await ask(
                  "Change status to: (1. In-progress, 2. Done): ",
                );
                switch (newStatus) {
                  case "1":
                    taskToUpdate.status = "In-Progress";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  case "2":
                    taskToUpdate.status = "Done";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  default:
                    console.log("Invalid option. Please try again");
                }
              } else if (taskToUpdate.status === "In-Progress") {
                const newStatus = await ask(
                  "Change status to: (1. Done, 2. To-do): ",
                );
                switch (newStatus) {
                  case "1":
                    taskToUpdate.status = "Done";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  case "2":
                    taskToUpdate.status = "To-do";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  default:
                    console.log("Invalid option. Please try again");
                }
              } else {
                const newStatus = await ask(
                  "Change status to: (1. To-do, 2. In-Progress): ",
                );
                switch (newStatus) {
                  case "1":
                    taskToUpdate.status = "To-do";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  case "2":
                    taskToUpdate.status = "In-Progress";
                    taskToUpdate.updatedAt = new Date().toISOString();
                    saveTasks(tasks);
                    console.log(
                      `Task with ID "${updateTaskID}" successfully updated!`,
                    );

                    break;

                  default:
                    console.log("Invalid option. Please try again");
                }
              }

              break;

            default:
              console.log("Invalid option. Please try again");
          }
        }

        break;

      case "4":
        const deleteTaskId = await ask(
          "Enter the ID of the task you wanna delete: ",
        );
        if (!deleteTaskId) {
          console.log(`Task with ID "${deleteTaskId}" not found.`);
        }
        const taskIndex = tasks.findIndex((task) => task.id === deleteTaskId);
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1);
          saveTasks(tasks);
          console.log(`Task with ID "${deleteTaskId}" successfully deleted!`);
        } else {
          console.log(`Task with ID "${deleteTaskId}" not found.`);
        }

        break;

      case "5":
        console.log("Exiting the application. Goodbye!");
        rl.close();
        return;

      default:
        console.log("Invalid option. Please try again.");
    }
  }
}

main();
