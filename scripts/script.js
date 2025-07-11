const DOM = {
  type: "body",
  classNames: [],
  id: null,
  children: [
    {
      type: "div",
      classNames: ["wrapper"],
      id: null,
      children: [
        {
          type: "header",
          classNames: ["header", "container", "mb-8"],
          id: null,
          children: [],
        },
        {
          type: "div",
          classNames: ["main", "container", "mb-8"],
          id: null,
          children: [
            {
              type: "div",
              classNames: ["products", "mb-8"],
              id: "unicalId",
              children: [
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
                {
                  type: "div",
                  classNames: ["product"],
                  id: null,
                  children: [],
                },
              ],
            },
          ],
        },
        {
          type: "footer",
          classNames: ["footer", "container"],
          id: null,
          children: [],
        },
      ],
    },
  ],
};

const querySelector = (selector, item) => {
  const match = (selector, elem) => {
    if (selector.startsWith('#')) {
      return elem.id === selector.slice(1);
    } else if (selector.startsWith('.')) {
      return elem.classNames && elem.classNames.includes(selector.slice(1));
    } else {
      return elem.type === selector;
    }
  }

  function traverse(elem) {
    if (match(selector, elem)) {
      return elem;
    }
    if (elem.children) {
      for (let child of elem.children) {
        const found = traverse(child);
        if (found) return found;
      }
    }
    return null;
  }

  return traverse(item);
}

const querySelectorAll = (selector, item) => {
  const result = [];

  function match(elem, selector) {
    if (selector.startsWith('#')) {
      return elem.id === selector.slice(1);
    } else if (selector.startsWith('.')) {
      return elem.classNames && elem.classNames.includes(selector.slice(1));
    } else {
      return elem.type === selector;
    }
  }

  const traverse = (elem) => {
    if (match(elem, selector)) {
      result.push(elem);
    }
    if (elem.children) {
      elem.children.forEach(child => traverse(child));
    }
  }

  traverse(item);
  return result;
}


console.log(querySelector('.abracadabra', DOM));
console.log(querySelector('.product', DOM));
console.log(querySelector('#unicalId', DOM));
console.log(querySelector('div', DOM));
console.log('==============================');
console.log(querySelectorAll('.abracadabra', DOM));
console.log(querySelectorAll('.product', DOM));
