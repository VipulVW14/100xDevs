import { getClient } from "../utils";

// Get all todos for a give user
// This shouldnt return a row if no todos exist for the user 
async function getAllTodosWithUserDetails() {
    const client = await getClient();

    const joinQuery = `
        SELECT todos.*, users.email, users.password
        FROM todos
        JOIN users ON todos.user_id = users.id;
    `;

    const res = await client.query(joinQuery);
    const results = res.rows;

    console.log("Todos with User Details:", results);
}

getAllTodosWithUserDetails();