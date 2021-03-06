# th.linden

Generate lindenmayer system string expansions with custom rules for algorithmic composition

**Please consider to download and donate via http://gumroad.com/tmhglnd**

**or become a patron on http://patreon.com/timohoogland**

---

## About

A Max-abstraction that generates Lindenmayer System string expansions based on a custom set of rules, axiom and number of generations. It returns a message with the resulted array/string from the production rules. Rules are stored in a dictionary and can be accessed from outside the abstraction, or can refer to an external dictionary. Custom rules are very powerful for making more complex systems which can be very interesting for algorithmic composition. The help-file contains a few examples on how to use it for rhythm, melody and relative intervals. The system is generated in javascript and outputs a max-message of the values returned based on the rules. Rules can consist of integers, floats, symbols/strings and single characters.

## Sources used

- [Lindenmayer System Wiki](https://en.wikipedia.org/wiki/L-system)

- [Algorithmic Composition: 6.6 Lindenmayer Systems in Algorithmic Composition](https://books.google.nl/books?id=jaowAtnXsDQC&pg=PA148&lpg=PA148&dq=gerhard+nierhaus+lindenmayer&source=bl&ots=GOKgbS9iZm&sig=ACfU3U0k_2yFkWX5aAyk1FVCyVFWt_dFcQ&hl=en&sa=X&ved=2ahUKEwjNl7Ha-fPmAhVP2KQKHSEEAz4Q6AEwAXoECAsQAQ#v=onepage&q=gerhard%20nierhaus%20lindenmayer&f=false)

- [Coding Train Fractal-trees](https://www.youtube.com/watch?v=E1B4UoSQMFw&t=133s)

## Install

```
1. download zip 
2. unzip in Max searchpath (eg. on MacOS ~/Documents/Max 8/Library)
3. restart Max8
```

```
1. open terminal
2. navigate to Max searchpath (eg. on MacOS cd ~/Documents/Max\ 8/Library)
3. $ git clone https://github.com/tmhglnd/th.linden.git
```
