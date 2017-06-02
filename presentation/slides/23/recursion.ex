def print(msg, n) when n <= 1 do
  IO.puts msg
end

def print(msg, n) do
  IO.puts msg
  print(msg, n - 1)
end

def sum([], acc), do: acc
def sum([head | tail], acc) do
  sum(tail, head + acc)
end

def square([]), do: []
def square([head | tail]) do
  [head * head | square(tail)]
end

Enum.reduce([1,2,3], 0,
  fn(x, acc) -> x + acc end
)

Enum.sum([1, 2, 3])

Enum.map([1, 2, 3], fn(x) -> x * x end)

def sqrt(x), do: x * x

Enum.map([1, 2, 3], sqrt)

def add(a, b), do: a + b

Enum.map([1, 2, 3], &add(&1, 3.14))

Enum.map([1, 2, 3], &(&1 + 64))
