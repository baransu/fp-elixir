// funkcja jako argument

const list = [1, 2, 3, 4, 5];

function square(a) {
  return a * a;
}

function apply(fn, item) {
  return fn(item);
}

const four = apply(square, 2);

// funkcja zwraca funkcje

function add(a, b) {
  return a + b;
}

function create() {
  return function(a) {
    return add(a, 2);
  };
}

// funkcja anonimowa

const greetings = function(name) {
  return 'Hello: ' + name;
};

greetings('Tomek');
