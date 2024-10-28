const data = [
  {
    userId: 3,
    id: 41,
    title:
      "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    completed: false
  },
  {
    userId: 3,
    id: 42,
    title: "rerum perferendis error quia ut eveniet",
    completed: false
  },
  {
    userId: 3,
    id: 43,
    title: "tempore ut sint quis recusandae",
    completed: true
  },
  {
    userId: 3,
    id: 44,
    title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    completed: true
  },
  {
    userId: 3,
    id: 45,
    title: "velit soluta adipisci molestias reiciendis harum",
    completed: false
  },
  {
    userId: 3,
    id: 46,
    title: "vel voluptatem repellat nihil placeat corporis",
    completed: false
  },
  {
    userId: 3,
    id: 47,
    title: "nam qui rerum fugiat accusamus",
    completed: false
  },
  {
    userId: 3,
    id: 48,
    title: "sit reprehenderit omnis quia",
    completed: false
  },
  {
    userId: 3,
    id: 49,
    title: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    completed: false
  },
  {
    userId: 3,
    id: 50,
    title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
    completed: true
  },
  {
    userId: 3,
    id: 41,
    title:
      "aliquid amet impedit consequatur aspernatur placeat eaque fugiat suscipit",
    completed: false
  },
  {
    userId: 3,
    id: 42,
    title: "rerum perferendis error quia ut eveniet",
    completed: false
  },
  {
    userId: 3,
    id: 43,
    title: "tempore ut sint quis recusandae",
    completed: true
  },
  {
    userId: 3,
    id: 44,
    title: "cum debitis quis accusamus doloremque ipsa natus sapiente omnis",
    completed: true
  },
  {
    userId: 3,
    id: 45,
    title: "velit soluta adipisci molestias reiciendis harum",
    completed: false
  },
  {
    userId: 3,
    id: 46,
    title: "vel voluptatem repellat nihil placeat corporis",
    completed: false
  },
  {
    userId: 3,
    id: 47,
    title: "nam qui rerum fugiat accusamus",
    completed: false
  },
  {
    userId: 3,
    id: 48,
    title: "sit reprehenderit omnis quia",
    completed: false
  },
  {
    userId: 3,
    id: 49,
    title: "ut necessitatibus aut maiores debitis officia blanditiis velit et",
    completed: false
  },
  {
    userId: 3,
    id: 50,
    title: "cupiditate necessitatibus ullam aut quis dolor voluptate",
    completed: true
  }
];

const user3Todos = data.filter(todo => todo.userId === 3);

const incompleteTasks = user3Todos.filter(todo => !todo.completed).length;
