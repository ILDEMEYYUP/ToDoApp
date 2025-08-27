# To-Do App

This is a full-stack To-Do application built with **JavaScript** for the frontend and **ASP.NET Core** for the backend. The app allows users to create, update, delete, and view to-do items.

## Features

- Add new to-do items
- Update existing to-do items (status or title)
- Delete a single to-do item
- Clear all to-do items
- Mark to-do items as completed
- Fully connected frontend and backend via REST API

## Frontend

- Built with HTML, CSS, and vanilla JavaScript
- Uses ES6 modules for better structure
- Dynamic UI updates with DOM manipulation
- Compatible with modern browsers

## Backend

- Built with ASP.NET Core Web API
- Provides RESTful endpoints for CRUD operations
- Uses a simple in-memory or database storage (depending on setup)
- JWT authentication (optional) for secure access

## API Endpoints

| Method | Endpoint                  | Description                 |
|--------|---------------------------|-----------------------------|
| GET    | /api/Todo/GetAll           | Retrieve all to-do items    |
| POST   | /api/Todo/Create           | Create a new to-do item     |
| PUT    | /api/Todo/Update/{id}      | Update a to-do item         |
| DELETE | /api/Todo/Delete/{id}      | Delete a single to-do item  |
| DELETE | /api/Todo/Delete           | Delete all to-do items      |

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/ILDEMEYYUP/todo-app.git
