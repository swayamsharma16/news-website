# **Overview**

Develop a responsive React application that displays news articles fetched from a public API (GNews). The application should allow users to filter articles based on categories and implement pagination to navigate through articles efficiently.

## **Features and Requirements:**

### **Homepage Layout:**

- Display a list of news articles with a title, image, and summary.
- Each article should link to a detailed view.
- Include a responsive design that adapts to both desktop and mobile devices.

### **Category Filtering:**

- Include a dropdown or a set of buttons to filter articles by categories (e.g., Business, Technology, Entertainment).
- The UI should update to display articles from the selected category.

### **Pagination:**

- Implement pagination at the bottom of the homepage.
- Users should be able to navigate through different pages of articles.

### **Detailed Article View Page:**

- When a user clicks on an article summary from the homepage, they should be navigated to a detailed view of the article.
- Display the full content of the article, including any media like images or videos.

### **State Management:**

- Use React hooks for state management to handle user inputs, API responses, and application state.

### **Advanced Task (Optional):**

- Implement a search feature to allow users to search for articles by keywords.

### **Technical Requirements:**

- Application should be written using functional components and hooks.
- Use Axios or Fetch API for making API calls.
- Responsive design should be implemented using CSS Grid, Flexbox, or frameworks like Bootstrap or TailwindCSS.
- Include error handling and loading states for network requests.

## **Project Setup**

To set up the project, follow these steps:

1. Clone the repository:

2. Navigate to the project directory:

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Run the project:
   ```bash
   npm run dev
   ```

## **Dependencies**

- Bootstrap 4 for CSS
- Boxicons for icons
- React Router DOM for routing
- GNews Api
