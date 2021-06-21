# blogdown

library(blogdown)
library(rmarkdown)
library(highcharter)
library(httpuv)
library(htmltools)
library(htmlwidgets)
library(widgetframe)
library(crosstalk)
library(manipulateWidget)

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

blogdown::hugo_build()

rmarkdown::clean_site(preview = FALSE)

blogdown::clean_duplicates(preview = FALSE)

# To update a file, re-knit or use
blogdown::build_site(build_rmd = 'timestamp')

2. login to netlify
  - drag/drop "public" folder to file viewer
3. netlify will deploy w random subdomain
  - change this
4. use GitHub for continuous deployment

blogdown::serve_site()
blogdown::stop_server()

# check stuff
blogdown::check_site()

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
