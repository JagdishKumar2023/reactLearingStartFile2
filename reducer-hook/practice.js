function calculate(type) {
  switch (type) {
    case "add": {
      return 5 + 4;
    }

    case "minus": {
      return 5 - 4;
    }

    case "divide": {
      return 35 / 4;
    }

    case "multi": {
      return 5 * 4;
    }

    default: {
      return "no type passed";
    }
  }
}

// console.log(calculate("divide"));

let obj = {
  name: "jai",
  address: {
    city: "Indore",
  },
};

console.log(obj.address.city);
