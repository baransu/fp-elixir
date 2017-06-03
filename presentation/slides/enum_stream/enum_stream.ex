Enum.map([1, 2, 3], fn x -> x * 2 end)
# [2, 4, 6]

Enum.map(%{1 => 2, 3 => 4}, fn {k, v} -> k * v end)
# [2, 12]

Enum.sum(1..3)
# 6

def some_complex_stuff(list) do
  mapped = Enum.map(list, &(&1 * &1))
  filtered = Enum.filter(mapped, odd?)
  Enum.sum(filtered)
end

def piped(list) do
  list
  |> Enum.map(&(&1 * &1))
  |> Enum.filter(odd?)
  |> Enum.sum()
end

1..100_000 |> Enum.map(square)
1..100_000 |> Stream.map(square)

stream = Stream.cycle([1, 2, 3])
Enum.to_list(stream)

Enum.take(stream, 10)
