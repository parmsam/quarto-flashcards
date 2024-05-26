# Flashcards Extension For Quarto

Simple RevealJS that allows you to create flashcards in Quarto.

## Installing

```bash
quarto add parmsam/quarto-flashcards
```

This will install the extension under the `_extensions` subdirectory.
If you're using version control, you will want to check in this directory.

## Using

Simply add the extension to the list of reveal plugins like:

``` markdown
title: My Presentation
format:
    revealjs: default
revealjs-plugins:
  - flashcards
```

Then use the following syntax to within a slide to a create flashcards.

``` markdown
::: {.flashcard-front}
Front of the flashcard
:::

::: {.flashcard-back}
Back of the flashcard
:::
```

By default, the key to flip the flashcard is 'f'. You can change this by setting the `key` option in your YAML header like:

``` markdown
title: My Presentation
format:
  revealjs:
    flashcards: 
      key: 'f'
revealjs-plugins:
  - flashcards
```

## Example

Here is the source code for a minimal example: [example.qmd](example.qmd).

The output of `example.qmd` is [here](https://parmsam.github.io/quarto-easter-eggs/).


