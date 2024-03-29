### Website Hugo/Blogdown/Netlify: brainworkup.io

# blogdown
library(bwu)
library(rmarkdown)
library(bookdown)
library(blogdown)
library(hugodown)
library(highcharter)
library(httpuv)
library(htmltools)
library(htmlwidgets)
library(widgetframe)
library(crosstalk)
library(manipulateWidget)
library(shiny)
library(pandocfilters)
library(tidyverse)
library(xaringan)
library(xaringanExtra)
library(xaringanthemer)
library(quarto)
library(tidytable)

file.edit("~/.Rprofile")
file.edit('.Rprofile')

# how to edit a page
# Workflow

## to start a new website
- done

## to publish a website
1. "Serve site"
2. "New Post"
3. "Update metadata"

## to edit a website
1. blogdown::hugo_build()
2. login to netlify
  - drag/drop "public" folder to file viewer
3. netlify will deploy w random subdomain
  - change this
4. use GitHub for continuous deployment

blogdown::hugo_build()
blogdown::build_site()
blogdown::check_hugo()
blogdown::check_netlify()

blogdown::serve_site()
blogdown::stop_server()

# check stuff
blogdown::check_site()

# these sometimes gets used after check_site()
rmarkdown::clean_site(preview = FALSE) # this might delete everything in "public"

rmarkdown::clean_site(preview = TRUE)

blogdown::clean_duplicates(preview = FALSE)

blogdown::build_site(build_rmd = "timestamp") # to update by re-rendering

blogdown::build_site(build_rmd = "newfile") # to render a file

blogdown::check_config()
blogdown::check_gitignore()
blogdown::check_hugo()
blogdown::check_netlify()

## how to render
markup:
  goldmark:
  renderer:
  unsafe: true

blogdown::edit_draft(c(
  "content/privacy.md"
))

{{ range .Params.html_dependencies }}
{{ . | safeHTML }}
{{ end }}

# install packages
devtools::install_github(
  'bhaskarvk/widgetframe',
  lib = .libPaths()[[1L]],
  dependencies = TRUE,
  upgrade = "default",
  build = TRUE,
  force = TRUE)

pak::pkg_install("bhaskarvk/widgetframe")

devtools::install_github(
  "kbodwin/flair",
  lib = .libPaths()[[2L]],
  dependencies = TRUE,
  upgrade = "default",
  build = TRUE,
  force = TRUE)

# reveal slides
# config.toml

[outputFormats.Reveal]
baseName = "index"
mediaType = "text/html"
isHTML = true

# ************************
# quarto ----
# ************************

## to convert to quarto

library(fs)
library(stringr)
rmd_names <- dir_ls(path = ".", glob = "*.Rmd")
qmd_names <- str_replace(string = rmd_names,
                         pattern = "Rmd",
                         replacement = "qmd")
file_move(path = rmd_names,
          new_path = qmd_names)

file_move(path = "_bookdown.yml",
          new_path = "_quarto.yml")

# ⸠ hugo ----

## to download more themes

`git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke`
