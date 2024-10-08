function updateUniqueItems(map) {
  // Check if the argument is a Map
  if (!(map instanceof Map)) {
      throw new Error("Cannot process");
  }

  // Iterate through the map entries
  for (const [item, quantity] of map.entries()) {
      // Update quantity if it's 1
      if (quantity === 1) {
          map.set(item, 100);
      }
  }
  return map;
}

export default updateUniqueItems;
