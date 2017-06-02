keyword_list = [{:a, 1}, {:b, 2}]
# [a: 1, b: 2]

list == [a: 1, b: 2]
# true

new_list = [{:k, 1} | list]

new_list[:a]

[a: a] = list
# ** (MatchError)

query = from w in Weather,
      where: w.prcp > 0,
      where: w.temp < 20,
     select: w

if false do
  :no
else
  :yes
end

if false, do: :no, else: :yes

if(false, do: :no, else: :yes)

if(false, [{:do, :no}, {:else, :yes}])
