const employees = [
  {
    id: 1,
    name: "Aditi Patil",
    email: "aditi.patil@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page for the employee management system.",
        taskDate: "2026-10-08",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Create Navbar",
        taskDescription:
          "Design and implement the main navigation bar for the dashboard.",
        taskDate: "2026-10-05",
        category: "UI Design",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Employee Dashboard",
        taskDescription:
          "Build the employee dashboard with task statistics and recent tasks.",
        taskDate: "2026-10-10",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Update Profile Page",
        taskDescription:
          "Update the employee profile page with new UI requirements.",
        taskDate: "2026-10-03",
        category: "Frontend",
      },
    ],
  },
  {
    id: 2,
    name: "Rohit Shinde",
    email: "rohit.shinde@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create REST API",
        taskDescription:
          "Develop REST API endpoints for employee task management.",
        taskDate: "2026-10-08",
        category: "Backend",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription:
          "Create the required database tables for the EMS application.",
        taskDate: "2026-10-04",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "API Testing",
        taskDescription: "Test employee and task APIs using Postman.",
        taskDate: "2026-10-09",
        category: "Testing",
      },
    ],
  },
  {
    id: 3,
    name: "Sneha Jadhav",
    email: "sneha.jadhav@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Employee Form",
        taskDescription:
          "Develop a form for adding new employees to the system.",
        taskDate: "2026-10-08",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Form Validation",
        taskDescription: "Add validation for employee registration fields.",
        taskDate: "2026-10-05",
        category: "JavaScript",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Responsive Design",
        taskDescription:
          "Make the employee management pages responsive for different screen sizes.",
        taskDate: "2026-10-11",
        category: "CSS",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Fix Mobile Layout",
        taskDescription: "Fix layout issues found on mobile devices.",
        taskDate: "2026-10-02",
        category: "Bug Fixing",
      },
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Dashboard Cards",
        taskDescription:
          "Create cards showing total, active, completed and failed tasks.",
        taskDate: "2026-10-12",
        category: "UI",
      },
    ],
  },
  {
    id: 4,
    name: "Akshay Deshmukh",
    email: "akshay.deshmukh@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Implement Authentication",
        taskDescription:
          "Implement login authentication for employees and admin users.",
        taskDate: "2026-10-08",
        category: "Authentication",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "GitHub Repository Setup",
        taskDescription:
          "Create the project repository and configure the main branch.",
        taskDate: "2026-10-03",
        category: "Git",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Task API Integration",
        taskDescription:
          "Connect the React frontend with the task management API.",
        taskDate: "2026-10-10",
        category: "Integration",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve the login issue reported during testing.",
        taskDate: "2026-10-01",
        category: "Bug Fixing",
      },
    ],
  },
  {
    id: 5,
    name: "Pooja Mhase",
    email: "pooja.mhase@gmail.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        complete: false,
        failed: false,
        taskTitle: "Create Task Component",
        taskDescription:
          "Build a reusable task component for displaying employee tasks.",
        taskDate: "2026-10-08",
        category: "React",
      },
      {
        active: false,
        newTask: false,
        complete: true,
        failed: false,
        taskTitle: "Design Task Card",
        taskDescription:
          "Design a clean card layout for displaying task information.",
        taskDate: "2026-10-04",
        category: "UI Design",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Add Task Filters",
        taskDescription: "Add filters for active, completed and failed tasks.",
        taskDate: "2026-10-10",
        category: "JavaScript",
      },
      {
        active: true,
        newTask: false,
        complete: false,
        failed: false,
        taskTitle: "Improve Dashboard UI",
        taskDescription:
          "Improve spacing, typography and overall dashboard appearance.",
        taskDate: "2026-10-12",
        category: "UI",
      },
      {
        active: false,
        newTask: false,
        complete: false,
        failed: true,
        taskTitle: "Fix Task Counter",
        taskDescription:
          "Fix incorrect task counts displayed on the dashboard.",
        taskDate: "2026-10-02",
        category: "Bug Fixing",
      },
    ],
  },
];
const admin = [
  {
    id: 1,
    name: "Nutan Mhase",
    email: "admin@ems.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  console.log(JSON.parse(employees, admin));
};
