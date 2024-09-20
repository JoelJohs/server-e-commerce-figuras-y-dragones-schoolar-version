# Express and MongoDB Project

This is a basic web application project using Express and MongoDB.

## Project Structure

```
└── server
    └── controllers
        └── clientController.js
        └── productsController.js
    └── middleware
    └── models
        └── Client.js
        └── Products.js
    └── routes
        └── clientsRoutes.js
        └── index.js
        └── productRoutes.js
    └── uploads
        └── Playera-de-Angular_18-9-2024.jpg
        └── Playera-de-Vue_18-9-2024.jpg
    └── utils
        └── multer.js
    └── .env
    └── .gitignore
    └── index.js
    └── package-lock.json
    └── package.json
    └── README.md
```


## Installation

1. Clone the repository:
    ```sh
    git clone <REPOSITORY_URL>
    ```
2. Navigate to the project directory:
    ```sh
    cd <PROJECT_NAME>
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

## Configuration

1. Create a [.env](http://_vscodecontentref_/#%7B%22uri%22%3A%7B%22%24mid%22%3A1%2C%22fsPath%22%3A%22c%3A%5C%5CUsers%5C%5CDarkK%5C%5CDesktop%5C%5CProjects%5C%5CE-commerce%20Upgrade%20-%20Schoolar%20project%5C%5Cserver%5C%5C.env%22%2C%22_sep%22%3A1%2C%22path%22%3A%22%2FC%3A%2FUsers%2FDarkK%2FDesktop%2FProjects%2FE-commerce%20Upgrade%20-%20Schoolar%20project%2Fserver%2F.env%22%2C%22scheme%22%3A%22file%22%7D%7D) file in the root of the project and add the following environment variables:
    ```env
    MONGODB_URI=<YOUR_MONGODB_URI>
    ```

## Usage

1. Start the application:
    ```sh
    npm start
    ```
2. The application will be available at `http://localhost:3000`.

## MongoDB

This project uses MongoDB as the database. To run the project locally, you need to have MongoDB installed on your machine.

### Installing MongoDB

1. **Download MongoDB**: Go to the [MongoDB Download Center](https://www.mongodb.com/try/download/community) and download the version suitable for your operating system.
2. **Install MongoDB**: Follow the installation instructions for your operating system.
3. **Run MongoDB**: Start the MongoDB server by running the following command in your terminal:
    ```sh
    mongod
    ```

## Project Details

### Controllers

- **clientController.js**: Handles client-related operations.
- **productsController.js**: Handles product-related operations.

### Models

- **Client.js**: Defines the client schema and model.
- **Products.js**: Defines the product schema and model.

### Routes

- **clientsRoutes.js**: Defines routes for client operations.
- **index.js**: Main entry point for routes.
- **productRoutes.js**: Defines routes for product operations.

### Utils

- **multer.js**: Configures Multer for handling file uploads.

## License

This project is licensed under the MIT License.