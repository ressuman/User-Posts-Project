# React User Poster - Client-Side (Frontend)

This is the client-side (frontend) part of a Post Management Application built using React, Axios, and React Router. The application allows users to create, view, and interact with posts. It provides a user-friendly interface to create, display, and manage posts. The application also integrates with a backend server for storing and retrieving posts.

## Table of Contents

- [React User Poster - Client-Side (Frontend)](#react-user-poster---client-side-frontend)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
  - [Available Scripts](#available-scripts)
  - [Folder Structure](#folder-structure)
  - [Components Overview](#components-overview)
    - [`Post`](#post)
    - [`PostList`](#postlist)
    - [`NewPost`](#newpost)
  - [Routing](#routing)
  - [Loading \& Error Handling](#loading--error-handling)
    - [Loading State](#loading-state)
    - [Error Handling](#error-handling)
  - [Contributing](#contributing)
  - [License](#license)
- [React + Vite](#react--vite)

## Features

- **Post Creation**: Users can create new posts with an author and body.
- **Post Listing**: Posts are fetched from the backend and displayed in a list.
- **Post Details**: Each post can be clicked to view its details.
- **Responsive Design**: Built using Tailwind CSS for responsiveness.
- **Modal-based Post Creation Form**: A modal is used to create new posts.
- **Integration with Backend**: Communicates with a RESTful backend API.
- **Prop Validation**: Components use PropTypes for validation to ensure data integrity.
- **Loading State**: A loading spinner is displayed while data is being fetched.
- **Error Handling**: Errors during data fetching or post creation are handled gracefully and logged to the console.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Axios**: A promise-based HTTP client for making API requests.
- **React Router**: For managing navigation within the app.
- **React Icons**: For adding icons to the UI.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Vite**: A fast build tool and development server for modern web projects.
- **PropTypes**: For prop validation in React components.

## Setup and Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

   or if you're using Yarn:

   ```bash
   yarn install
   ```

## Environment Variables

Create a `.env` file in the root of the `client` directory with the following content:

```plaintext
VITE_REACT_USER_POSTS_BACKEND_SERVER=http://localhost:8080/posts
```

This environment variable points to the backend server URL where the posts are stored.

## Running the Application

To start the development server:

```bash
npm run dev
```

or if you're using Yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `yarn dev`: Starts the development server.
- `yarn build`: Builds the app for production.
- `yarn serve`: Serves the production build locally.
- `yarn lint`: Lints the code using ESLint.

## Folder Structure

Here's an overview of the project structure:

```plaintext
├── public/
├── src/
│   ├── components/
│   │   ├── MainHeader/
│   │   │   ├── MainHeader.jsx
│   │   │   └── MainHeader.module.css
│   │   ├── Modal/
│   │   │   ├── Modal.jsx
│   │   │   └── Modal.module.css
│   │   ├── NewPost/
│   │   │   ├── NewPost.jsx
│   │   │   └── NewPost.module.css
│   │   ├── Post/
│   │   │   ├── Post.jsx
│   │   │   └── Post.module.css
│   │   └── PostList/
│   │       ├── PostList.jsx
│   │       └── PostList.module.css
│   ├── pages/              # Pages
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── .env                    # Environment variables
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

- **MainHeader**: The header component with the logo and a button to create a new post.
- **Modal**: The modal component used to display the post creation form.
- **NewPost**: The form component for creating a new post.
- **Post**: The component for displaying individual posts.
- **PostList**: The component that manages and displays the list of posts.

## Components Overview

### `Post`

- **Props**:

  - `id` (string): The unique identifier for the post.
  - `author` (string): The author of the post.
  - `body` (string): The content of the post.

- **Usage**: Displays a single post. Clicking on the post redirects to its details page.

### `PostList`

- **Props**: None.
- **Usage**: Fetches and displays a list of posts. Handles loading and error states.

### `NewPost`

- **Props**:

  - `onAddPost` (function): Callback function to add a new post.

- **Usage**: Provides a form to create a new post.

## Routing

- **`/`**: Home page displaying the list of posts.
- **`/create-post`**: Page to create a new post.
- **`/post/:id`**: Post details page for viewing a single post.

## Loading & Error Handling

### Loading State

- A loading spinner is shown while the posts are being fetched. The spinner is managed using the `isFetching` state in the `PostList` component.

### Error Handling

- Errors during the fetching of posts or the creation of a new post are caught using `try/catch` blocks. Errors are logged to the console and can be extended to show error messages to the user.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```

```
