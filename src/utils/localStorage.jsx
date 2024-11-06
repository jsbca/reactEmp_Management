localStorage.clear()
const employees = [
    {
      "id": 1,
      "email": "e@e.com",
      "password": "123",
      "firstName": "Aarav",
      "taskCounts": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      },
      "tasks": [
        {
          "taskTitle": "Project Report",
          "taskDescription": "Complete the annual project report.",
          "taskDate": "2024-10-25",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Team Meeting",
          "taskDescription": "Participate in the weekly team meeting.",
          "taskDate": "2024-10-21",
          "category": "Meetings",
          "active": false,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Code Review",
          "taskDescription": "Review code submissions from the team.",
          "taskDate": "2024-10-22",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "taskTitle": "Paper Review",
          "taskDescription": "Review paper submissions from the team.",
          "taskDate": "2024-10-12",
          "category": "Audit",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "firstName": "Vivaan",
      "taskCounts": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Database Update",
          "taskDescription": "Update the client database with new entries.",
          "taskDate": "2024-10-24",
          "category": "Updating",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Presentation Preparation",
          "taskDescription": "Prepare slides for the upcoming presentation.",
          "taskDate": "2024-10-23",
          "category": "Work",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "User Testing",
          "taskDescription": "Conduct user testing for the new feature.",
          "taskDate": "2024-10-25",
          "category": "Testing",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "firstName": "Aditya",
      "taskCounts": {
        "active": 3,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Wireframe Design",
          "taskDescription": "Create wireframes for the new project.",
          "taskDate": "2024-10-26",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Feedback Gathering",
          "taskDescription": "Gather feedback from users on the new design.",
          "taskDate": "2024-10-27",
          "category": "Research",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Submit Designs",
          "taskDescription": "Submit designs for final review.",
          "taskDate": "2024-10-28",
          "category": "Design",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "firstName": "Diya",
      "taskCounts": {
        "active": 3,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Market Analysis",
          "taskDescription": "Analyze current market trends.",
          "taskDate": "2024-10-29",
          "category": "Analysis",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Marketing Strategy",
          "taskDescription": "Draft a marketing strategy for next quarter.",
          "taskDate": "2024-10-30",
          "category": "Marketing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Quarterly Report",
          "taskDescription": "Prepare the quarterly performance report.",
          "taskDate": "2024-10-31",
          "category": "Reporting",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "firstName": "Kabir",
      "taskCounts": {
        "active": 3,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      },
      "tasks": [
        {
          "taskTitle": "Feature Implementation",
          "taskDescription": "Implement new features as per specifications.",
          "taskDate": "2024-10-21",
          "category": "Development",
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Bug Fixing",
          "taskDescription": "Fix reported bugs in the application.",
          "taskDate": "2024-10-22",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "taskTitle": "Pull Request Review",
          "taskDescription": "Review and merge pull requests.",
          "taskDate": "2024-10-23",
          "category": "Code Review",
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ];
  
  const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123",
  }];
  export const setLocalStorage = () => {
        localStorage.setItem('employees', JSON.stringify(employees))
        localStorage.setItem('admin', JSON.stringify(admin))
  }
  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
  }