# blogdown

library(blogdown)
library(rmarkdown)
require(highcharter)
library(httpuv)
library(htmltools)
library(htmlwidgets)

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
2. login to netlify
  - drag/drop "public" folder to file viewer
3. netlify will deploy w random subdomain
  - change this
4. use GitHub for continuous deployment

blogdown::serve_site()

blogdown::stop_server()


blogdown::check_config()
check_hugo()
check_netlify()
check_site()

check_gitignore()
