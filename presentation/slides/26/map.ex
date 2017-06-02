map = %{:a => 1, 2 => :b}

map[:a]
# 1

map[2]
# :b

map[:c]
# nil

%{} = %{:a => 1, 2 => :b}

%{:a => a} = %{:a => 1, 2 => :b}

%{map | :c => 0}
# ** (KeyError) key :c not found

%{map | :a => 0}
# %{2 => :b, :a => 0}

Map.put(map, :c, 0)
# %{2 => :b, :a => 1, :c => 0}

map = %{a: 1, b: 2}

map.a
# 1
