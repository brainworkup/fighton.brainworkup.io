---
authors:
- admin
categories: []
date: '2021-06-18'
draft: false
featured: false
gallery_item:
- album: gallery
  caption: Default
  image: theme-default.png
- album: gallery
  caption: Ocean
  image: theme-ocean.png
- album: gallery
  caption: Forest
  image: theme-forest.png
- album: gallery
  caption: Dark
  image: theme-dark.png
- album: gallery
  caption: Apogee
  image: theme-apogee.png
- album: gallery
  caption: 1950s
  image: theme-1950s.png
- album: gallery
  caption: Coffee theme with Playfair font
  image: theme-coffee-playfair.png
- album: gallery
  caption: Strawberry
  image: theme-strawberry.png
image:
  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/CpkOjOcXdUY)'
  focal_point: ""
  preview_only: false
projects: []
tags: []
title: Drilldown on Neuropsych Data with R
subtitle: drilldown plot in highcharter
summary: drilldown plot in highcharter
slug: npsych-drilldown
lastmod: '2021-06-18T18:11:39-07:00'
keep_md: yes
---

<script src="{{< blogdown/postref >}}index.en_files/htmlwidgets/htmlwidgets.js"></script>
<script src="{{< blogdown/postref >}}index.en_files/pymjs/pym.v1.js"></script>
<script src="{{< blogdown/postref >}}index.en_files/widgetframe-binding/widgetframe.js"></script>
<script src="{{< blogdown/postref >}}index.en_files/htmlwidgets/htmlwidgets.js"></script>
<script src="{{< blogdown/postref >}}index.en_files/pymjs/pym.v1.js"></script>
<script src="{{< blogdown/postref >}}index.en_files/widgetframe-binding/widgetframe.js"></script>

## Highcharter Drilldown Setup

### R Markdown chunk options

### Load libraries

    ## 
    ## Attaching package: 'dplyr'
    ## The following objects are masked from 'package:stats':
    ## 
    ##     filter, lag
    ## The following objects are masked from 'package:base':
    ## 
    ##     intersect, setdiff, setequal, union
    ## Registered S3 method overwritten by 'quantmod':
    ##   method            from
    ##   as.zoo.data.frame zoo
    ## ── Attaching packages ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── tidyverse 1.3.1.9000 ──
    ## ✔ ggplot2 3.3.4     ✔ tidyr   1.1.3
    ## ✔ tibble  3.1.2     ✔ stringr 1.4.0
    ## ── Conflicts ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── tidyverse_conflicts() ──
    ## ✖ dplyr::filter() masks stats::filter()
    ## ✖ dplyr::lag()    masks stats::lag()

### Import data

## Drilldown using percentiles

<div class="figure">

<div id="htmlwidget-1" style="width:100%;height:480px;" class="widgetframe html-widget"></div>
<script type="application/json" data-for="htmlwidget-1">{"x":{"url":"index.en_files/figure-html//widgets/widget_drillp.html","options":{"xdomain":"*","allowfullscreen":false,"lazyload":false}},"evals":[],"jsHooks":[]}</script>
<p class="caption">
Figure 1: Drilldown Neuropsych Pct
</p>

</div>

## Drilldown using zScores

<div class="figure">

<div id="htmlwidget-2" style="width:100%;height:480px;" class="widgetframe html-widget"></div>
<script type="application/json" data-for="htmlwidget-2">{"x":{"url":"index.en_files/figure-html//widgets/widget_drillz.html","options":{"xdomain":"*","allowfullscreen":false,"lazyload":false}},"evals":[],"jsHooks":[]}</script>
<p class="caption">
Figure 2: Drilldown Neuropsych zScores
</p>

</div>
