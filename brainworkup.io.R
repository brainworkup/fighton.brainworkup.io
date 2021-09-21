### Website Hugo/Blogdown/Netlify: brainworkup.io

# blogdown

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
  lib = .libPaths()[[2L]],
  dependencies = TRUE,
  upgrade = "default",
  build = TRUE,
  force = TRUE)

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
