# Programowanie funkcyjne in general

## Czym jest funkcyjne programowanie
 - brak stanu

### Brak stanu
 - czym jest stan? (przyklad)   
 - funkcyjne jako baza jezyka
 - pure functions (brak efektow ubocznych)
 - immutability (nie ma zmiennych)
 - higher order functions
 - wszystko jest wyrazeniem (everything is and expression)
 - kompozycja
 - rekurencja

Przykladowe algorytmy imperative vs functional
- odwracanie tablicy
-

## Dlaczego funkcyjne programowanie
 - wielowatkowosc
 - hot code deployment
 - unit testing
 - zagniezdzone struktury danych (rekurencja!!!)

# Elixir

## Podstawowe typy
 - integer - 1, 0x1F
 - float - 1.0
 - boolean - true, false
 - atom - :atom
 - string - "elixir", "string #{variable}"
 - list - [1,2,3]
 - tuple - {1,2,3}
 - funkcje anonimowe

## Podstawowe operatory
 - + - / *
 - ++ --
 - <> (string concatention)
 - and or not
 - && || !
 - ==, !=, ===, !==, <=, >=, <, >
  - 1 == 1.0 -> true,
  - 1 === 1.0 -> false

## Pattern matching
- = match operator
- destructuring - {1,2, :ok} = tuple
- | operator - [head | tail]
- wildcard (underscore) - _ (write only)

## case, cond, if
- case (guards guards)
- cond ( true as else)
- if/unless

## Binarki, stringi oraz listy charow
 - to be defined

## Keyword lists
- [{:a, 1}, {:b, 1}]
- [a: 1, b: 2]
- k_list[:a]

## Mapy
 - to be defined

## Moduly i funkcje
- moduł jako grupa funkcji
- def/2, defp/2
- pattern matching po naglowkach funkcji
- domyslne wartosci

## Rekurencja
- jak zastapic imperatywne petle
- tail call
- map, reduce jako baza FP

## Co dalej
 - procesy
 - OTP
 - meta programming

# Zrodla
- http://learnyousomeerlang.com/
- http://elixir-lang.org/getting-started/
- https://medium.com/@cscalfani/so-you-want-to-be-a-functional-programmer-part-1-1f15e387e536
