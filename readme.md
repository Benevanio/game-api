# Game API

This is a simple RESTful API built with Node.js and Express for managing a collection of video games. It allows users to perform CRUD operations on a database of games. The API supports retrieving all games, getting a specific game by its ID, adding new games, updating existing games, and deleting games.

## Prerequisites

Before running the application, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository or download the project files to your local machine.

```bash
git clone <repository-url>
cd <project-folder>
```

2. Install the necessary dependencies by running the following command:

```bash
npm install
```

## Usage

1. Start the server by running:

```bash
node app.js
```

2. The server will run on `http://localhost:3000`. You can now interact with the API using HTTP requests.

### Endpoints

- **GET `/games`**  
  Retrieves a list of all games in the database.

  **Response:**
  ```json
  {
      "games": [
          {
              "id": 23,
              "title": "Call of Duty",
              "year": 2019,
              "price": 60
          },
          {
              "id": 65,
              "title": "GTA V",
              "year": 2013,
              "price": 80
          },
          ...
      ]
  }
  ```

- **GET `/game/:id`**  
  Retrieves a specific game by its `id`.

  **Parameters:**
  - `id`: The ID of the game.

  **Response:**
  ```json
  {
      "id": 23,
      "title": "Call of Duty",
      "year": 2019,
      "price": 60
  }
  ```

  **Status Codes:**
  - `200`: Success, game found.
  - `400`: Invalid ID format.
  - `404`: Game not found.

- **POST `/game`**  
  Adds a new game to the collection.

  **Request Body:**
  ```json
  {
      "title": "Game Title",
      "year": 2024,
      "price": 40
  }
  ```

  **Response:**
  - `200`: Game added successfully.
  - `400`: Missing required fields (title, year, or price).

- **PUT `/game/:id`**  
  Updates an existing game by its `id`.

  **Parameters:**
  - `id`: The ID of the game.

  **Request Body:**
  ```json
  {
      "title": "Updated Title",
      "year": 2024,
      "price": 50
  }
  ```

  **Response:**
  - `200`: Game updated successfully.
  - `400`: Invalid ID or missing fields.
  - `404`: Game not found.

- **DELETE `/game/:id`**  
  Deletes a specific game by its `id`.

  **Parameters:**
  - `id`: The ID of the game to be deleted.

  **Response:**
  - `200`: Game deleted successfully.
  - `400`: Invalid ID format.
  - `404`: Game not found.

## Database

The API uses a simple in-memory database to store the games, which is initialized with some sample data:

```json
{
    "games": [
        { "id": 23, "title": "Call of Duty", "year": 2019, "price": 60 },
        { "id": 65, "title": "GTA V", "year": 2013, "price": 80 },
        { "id": 2, "title": "Minecraft", "year": 2010, "price": 20 },
        { "id": 45, "title": "FIFA 12", "year": 2012, "price": 15 },
        { "id": 40, "title": "God of War", "year": 2018, "price": 50 }
    ]
}
```

Note that the data is not persistent between server restarts, as it is stored only in memory.

## Error Handling

The API returns appropriate HTTP status codes for various error scenarios:

- `400`: Bad request, such as missing required fields or invalid ID format.
- `404`: Not found, when a game with the given ID does not exist.
- `500`: Internal server error (if any unexpected issues occur).

## Contributing

If you'd like to contribute to this project, feel free to fork it and submit a pull request with your improvements or fixes.

## License

This project is open-source and available under the [MIT License](LICENSE).