defmodule Quick do
  def sort([]), do: []
  def sort([pivot | rest]) do
    { left, right } = Enum.partition(rest, &(&1 < pivot))
    sort(left) ++ [pivot | sort(right)]
  end
end
