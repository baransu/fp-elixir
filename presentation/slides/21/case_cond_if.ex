case may_fail() do
  {:ok, result} -> result
  {:error, _reason} -> []
end

case [1,2,3] do
  [3,2,1] -> "Never"
  _ -> "Always"
end

case {1, 2} do
  {x, _y} when is_atom(x) -> x
  -> :error
end

cond do
  2 + 2 == 5 ->
    "False"
  2 * 2 == 22 ->
    "Also false"
  1 + 1 == 2 ->
    "True"
end

cond do
  4 * 2 == 42 ->
    "False"
  true ->
    "True"
end

if true do
  "True"
end

unless true do
  "Never happens"
end

if true do
  :ok
else
  :not_ok
end
