let items = [true, true, false, true]
items.some((state) => state === false)? console.log("there is item out of stock") :console.log("No items out of stock")