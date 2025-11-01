# PassOP - Password Manager

PassOP is a simple password manager built using React. It allows you to securely store, view, edit, and delete your passwords for different websites, all within your browser. It uses the browser's `localStorage` to persist your passwords locally.

## Features

- **Add new passwords**: Add your website, username, and password.
- **Edit passwords**: Modify existing passwords.
- **Delete passwords**: Remove individual passwords or delete all passwords at once.
- **Password visibility toggle**: Easily show or hide passwords using an eye icon.
- **Copy to clipboard**: Copy website URLs, usernames, or passwords to your clipboard.
- **Toast notifications**: Get visual feedback on actions like saving, deleting, or copying.

## Technologies Used

- **React**: The front-end framework used to build the UI.
- **React-Toastify**: For notifications (e.g., success or error messages).
- **UUID**: To generate unique IDs for each password entry.
- **LocalStorage**: Used for persisting passwords in the browser.

## Installation

To run this project locally, follow the steps below:

### 1. Clone the Repository

First, clone the repository to your local machine using Git:

```bash
git clone https://github.com/your-username/passop.git
