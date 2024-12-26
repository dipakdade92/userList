# React User List Application

This is a React application that fetches a list of users from an API and displays them in a tabular format with pagination and user details. The application uses **React Router** for navigation, **Radix UI** for UI components, and **React Query** for data fetching. The app also includes error handling with automatic retries and proper error messages for the user.

## Features

- **User List Page**:
  - Fetches and displays a list of users in a table.
  - Includes pagination to navigate through multiple pages of users.
  - Allows navigation to the user details page upon clicking a user.

- **User Details Page**:
  - Displays detailed information about the selected user.

- **Error Handling**:
  - Retries the API call up to 3 times in case of failure.
  - Provides appropriate error messages if the data cannot be loaded.

- **State Management**:
  - The application uses **React Query** for fetching, caching, and synchronizing server data.

- **UI**:
  - The UI is built using **Radix UI** components for a modern, accessible, and customizable interface.

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn for package management

## Getting Started

Follow these steps to set up and run the application:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/dipakdade92/userList.git


2. Install dependencies
 npm install

3. Start the Project
 npm run dev
