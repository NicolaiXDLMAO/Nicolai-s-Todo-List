//Retrieve from local storage or initialize an empty array

let todo = JSON.parse(localStorage.getItem("todo")) || [];

const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const deleteButton = document.getElementById("deleteButton");
const addButton = document.querySelector(".btn");

//Init

document.addEventListener("DOMContentLoaded", function()
{
    
});