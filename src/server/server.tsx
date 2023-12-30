import { Model, createServer } from "miragejs";

createServer({
  models: {
    runner: Model,
  },

  seeds(server) {
    server.create("van", {
      id: "1",
      name: "Modest Explorer",
      price: 60,
      description:
        "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
      type: "simple",
    });
    server.create("van", {
      id: "2",
      name: "Beach Bum",
      price: 80,
      description:
        "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
      type: "rugged",
    });
    server.create("van", {
      id: "3",
      name: "Reliable Red",
      price: 100,
      description:
        "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
      type: "luxury",
    });
    server.create("van", {
      id: "4",
      name: "Dreamfinder",
      price: 65,
      description:
        "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
      type: "simple",
    });
    server.create("van", {
      id: "5",
      name: "The Cruiser",
      price: 120,
      description:
        "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
      type: "luxury",
    });
    server.create("van", {
      id: "6",
      name: "Green Wonder",
      price: 70,
      description:
        "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
      imageUrl:
        "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
      type: "rugged",
    });
  },
  //         {
  //           id: 2,
  //           name: "Runner 2",
  //           email: "new@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 3,
  //           name: "Runner 3",
  //           email: "new@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 4,
  //           name: "Runner 4",
  //           email: "jake@gmail.com",
  //           location: "New York",
  //           distance: 11,
  //           pace: 53,
  //           time: 10,
  //           description: "I am a runner of a New York group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 5,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 6,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 7,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 8,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 9,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 10,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 11,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //         {
  //           id: 12,
  //           name: "Runner 5",
  //           email: "non@gmail.com",
  //           location: "New York",
  //           distance: 10,
  //           pace: 5,
  //           time: 50,
  //           description: "I am a runner of a new group",
  //           image:
  //             "https://images.unsplash.com/photo-1512310604669-443b2520fa8f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cnVubmVycyUyMGJ1ZGR5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
  //         },
  //       ],
  //     });
  //   },

  routes() {
    this.namespace = "api";
    this.logging = true;

    this.get("/runners", (schema, request) => {
      return schema.db.all;
    });

    this.get("/runners/:id", (schema, request) => {
      const id = request.params.id;
      return schema.db.runners.find(id);
    });
  },
});
