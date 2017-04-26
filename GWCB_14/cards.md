STEPS IN STRATEGIC PROBLEM SOLVING

1.Determine your assumptions
2.Create a viable response
3.Optimize response

I give you an array of 51 cards. Each card contains two properties: the suite, and the title (a string of either a number or a ranking: king, ace, so on).

Fifty-two cards form a deck. But I gave you 51. One is missing! How do you find it?

Try to come up with the most efficient steps to solve this.
Hint: Using a for loop against an array of values is not the most efficient solution--what if the cards aren't sorted?

data structure [{suite:xxx,title:xxx}];

initialize four stacks(arrays) in an deck array, one for each suite

forEach, if/else has Own property(suite name)

initialize targert array;
forEach in , if array.length < 13 -->
push values to target array

forEach in target array ->

