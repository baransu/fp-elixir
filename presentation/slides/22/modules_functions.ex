def add(a, b) do
  a + b
end

def add(a, b), do: a + b

defmodule Math do
  def add(a, b) do
    a + b
  end
end

Math.add(1, 2)
# 3

def fib(a) do
  cond do
    a == 0 -> 0
    a == 1 -> 1
    true -> fib(a - 2) + fib(a - 1)
  end
end

def fib(0), do: 0
def fib(1), do: 1
def fib(a) do
  fib(a - 1) + fib(a - 2)
end

def zero?(0), do: true
def zero?(x) when is_integer(x) do
  false
end

def join(a, b, sep \\ " ") do
  a <> sep <> b
end
