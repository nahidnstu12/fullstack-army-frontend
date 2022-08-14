export const projectlists = [
  {
    id: 1,
    title: "My Projects",
    tasks: [
      {
        id: 1,
        title: "task1",
        assign_id: 1,
        status: "high",
        date: "12/8/22",
        subtasks: [
          {
            id: 11,
            title: "task11",
            assign_id: 1,
            status: "Low",
            date: "15/8/22",
          },
          {
            id: 12,
            title: "task11",
            assign_id: 1,
            status: "Low",
            date: "15/8/22",
          },
        ],
      },
      { id: 2, title: "task2", assign_id: 1, status: "Low", date: "15/8/22" },
      {
        id: 3,
        title: "task3",
        assign_id: 1,
        status: "Medium",
        date: "22/8/22",
        subtasks: [
            {
              id: 31,
              title: "task1131",
              assign_id: 1,
              status: "Low",
              date: "15/8/22",
            },
            {
              id: 32,
              title: "task1132",
              assign_id: 1,
              status: "Low",
              date: "15/8/22",
            },
          ],
      },
      { id: 4, title: "task4", assign_id: 1, status: "high", date: "27/8/22" },
    ],
  },
];

export const users = [
    {id:1, name: "Nahid"},
    {id:2, name: "Asif"},
    {id:3, name: "Rubel"},
]

export const priority = [
  {id: 1, name: "Low"},
  {id: 2, name: "Medium"},
  {id: 3, name: "High"},
  
]