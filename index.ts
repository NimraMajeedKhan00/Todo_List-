#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todolist:string[] = [];

let conditions = true;

console.log(chalk.yellow("\n \tTodo_list_Allpication\n"));

// while (conditions){
//     let addtask = await inquirer.prompt([
//         {
//             name: "task",
//             type: "input",
//             message: "Enter your new Task:"
//         }

//     ]);

//     todolist.push(addtask.task);
//     console.log(`${addtask.task} task added in Todo list Successfully`);

//     let addmoretask = await inquirer.prompt([
//         {
//             name: "addmore",
//             type: "confirm",
//          ;   message: "DO you want to add more task?",
//             default: "false"
//         }
//     ]);

//     conditions = addmoretask.addmore;
// };

// console.log("Your updated Todo list", todolist);
let main = async () => {
while(conditions){
    let option = await inquirer.prompt([
        {
            name:"choice",
            type:"list",
           message:chalk.green("Select an option you want to do"),
            choices:["Add Task","Delete Task","Update Task","View Todo List","Exit"]
        }
    ]);
    if(option.choice === "Add Task"){
        await addtask()
    }else if(option.choice === "Delete Task"){
    await deletetask()
    }else if(option.choice === "Update Task"){
     await updatetask()
    }
    
    else if(option.choice === "View Todo List"){
        await viewtask()
    }else if(option.choice === "Exit"){
        conditions = false
    }
}
}
//function to add new task to the list
let addtask = async () => {
    let newtask = await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:chalk.blue("Enter your new Task")
        }
    ]);
    todolist.push(newtask.task)
    console.log(chalk.yellow(`\n ${newtask.task} task added Successfully in Todo list`));
}
//function to view all Todo list task
let viewtask = ()=>{
    console.log(chalk.yellow("\n Your Todo list \n"))
    todolist.forEach((task,index)=>{
        console.log(chalk.blue(`${index+1}: ${task}`))
    })

}
//function to delete a task from list
let deletetask = async()=>{
    await viewtask()
    let taskindex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.green("Enter the index number of the task you want to delete ")
        }
    ]);
    let deletedtask = todolist.splice(taskindex.index-1,1);
    console.log(chalk.blue(`\n ${deletedtask} this task has been deleted Successfully fromm your Todo List`))
}
//funcion to update a task
let updatetask = async ()=>{
    await viewtask() 
    let updatetaskindex = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:chalk.green("Enter the index number of the task you want to update")
        },
        {
            name:"new_task",
            type:"input",
            message:chalk.green("Now enter a new Task name:")
        }
    ]);

    todolist[updatetaskindex.index-1]=updatetaskindex.new_task

    console.log(chalk.yellow(`\nTask add index number ${updatetaskindex.index-1} updated Successfully ,for updated list check option "view Todo List"`))
  
}
main()