// Escape the room
// You are creating an "Escape the room" game. The first step is to create a hash table ( dict in Python) called rooms that contains all of the rooms of the game. There should be at least 3 rooms inside it, each room being a hash table with at least 3 properties (e.g. name, description, completed).

const rooms = {
  caravan: {
    name: "Caravan",
    description: "A dusty old caravan parked outside. The door creaks ominously.",
    completed: false,
    items: ["flashlight", "map"],
    locked: false
  },
  
  lab: {
    name: "The Lab",
    description: "A mysterious laboratory filled with bubbling beakers and strange equipment.",
    completed: false,
    items: ["test tube", "notes", "key"],
    locked: true
  },
  
  shed: {
    name: "The Shed",
    description: "A small wooden shed beside the house. Tools hang on the walls.",
    completed: false,
    items: ["hammer", "rope", "crowbar"],
    locked: true
  },
  
  basement: {
    name: "The Basement",
    description: "Dark stone stairs lead down to a cold, damp basement.",
    completed: false,
    items: ["old book", "candle"],
    locked: true
  }
};


console.log("=== Escape Room Game ===\n");


console.log("Current Room:", rooms.caravan.name);
console.log("Description:", rooms.caravan.description);
console.log("Items:", rooms.caravan.items.join(", "));
console.log("Locked:", rooms.caravan.locked);
console.log();


console.log("=== All Rooms ===");
for (const key in rooms) {
  console.log(`\n${rooms[key].name}:`);
  console.log(`  Description: ${rooms[key].description}`);
  console.log(`  Completed: ${rooms[key].completed}`);
  console.log(`  Items: ${rooms[key].items.join(", ")}`);
  console.log(`  Locked: ${rooms[key].locked}`);
}


rooms.lab.completed = true;
console.log("\n\nLab completed:", rooms.lab.completed);