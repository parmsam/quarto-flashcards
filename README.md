# Flashcards Extension For Quarto

Simple RevealJS that allows you to create flashcards in Quarto.

Here's an example of what a flashcard looks like using this extension.

Front of a flashcard:

<img src="example-front.png" width="70%">


Back of a flashcard:

<img src="example-back.png" width="70%">

## Installing

```bash
quarto add parmsam/quarto-flashcards
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

Simply add the extension to the list of revealjs plugins like:

``` markdown
title: My Presentation
format:
    revealjs: default
revealjs-plugins:
  - flashcards
```

Then use the following syntax within a slide to create a flashcard.

``` markdown
## Slide title goes here

::: {.flashcard-front}
Front of the flashcard goes here
:::

::: {.flashcard-back}
Back of the flashcard goes here
:::
```

By default, the key to flip the flashcard is 'q'. You can change this by setting the `flipKey` option in your YAML header like:

``` markdown
title: My Presentation
format:
  revealjs:
    flashcards: 
      flipKey: 'r'
      shuffleKey: 't'
      showFlipButton: true
      resetOnSlideChange: true
      flipButtonColorFront: "#2a76dd"
      flipButtonColorBack: "#28a745"
revealjs-plugins:
  - flashcards
```

You'll also notice a `shuffleKey` option. This is a keyboard shortcut that can be used to shuffle the slides and jump to the new first slide. By default, it's set to 't' but you can change it to any key you like.

The `showFlipButton` option controls whether a flip button appears on the top right corner of flashcard slides. By default, it's set to `true` but you can change it to `false` to hide the flip buttons.

The `resetOnSlideChange` option controls whether flashcards automatically reset to show the front when you navigate to a new slide. By default, it's set to `true`, meaning that if you flip a card to the back and then move to another slide, any flashcards on the new slide will start showing their front side. Set this to `false` if you want flashcards to maintain their state when navigating between slides.

The `flipButtonColorFront` and `flipButtonColorBack` options allow you to customize the color of the flip button. The button will be blue (`#2a76dd`) when showing the front of the card and green (`#28a745`) when showing the back. You can set these to any valid CSS color value (hex codes, color names, rgb values, etc.).

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

The output of `example.qmd` is [here](https://parmsam.github.io/quarto-flashcards/).

