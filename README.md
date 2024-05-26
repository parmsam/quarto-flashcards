# Flashcards Extension For Quarto

Simple RevealJS that allows you to create flashcards in Quarto.

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

By default, the key to flip the flashcard is 'q'. You can change this by setting the `key` option in your YAML header like:

``` markdown
title: My Presentation
format:
  revealjs:
    flashcards: 
      key: 'r'
revealjs-plugins:
  - flashcards
```

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

The output of `example.qmd` is [here](https://parmsam.github.io/quarto-flashcards/).

