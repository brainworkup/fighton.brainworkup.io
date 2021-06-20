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
    ## Highcharts (www.highcharts.com) is a Highsoft software product which is
    ## not free for commercial and Governmental use
    ## ── Attaching packages ────────────────────────────────── tidyverse 1.3.1.9000 ──
    ## ✓ ggplot2 3.3.4     ✓ tidyr   1.1.3
    ## ✓ tibble  3.1.2     ✓ stringr 1.4.0
    ## ── Conflicts ────────────────────────────────────────── tidyverse_conflicts() ──
    ## x dplyr::filter() masks stats::filter()
    ## x dplyr::lag()    masks stats::lag()

### Import data

## Drilldown using percentiles

``` r
colors <-
  c(
    "#058DC7",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4"
  )

colors8 <-
  c(
    "#058DC7",
    "#50B432",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4"
  )

## for Tooltip

ncogL1status <- ncogL1status %>%
  dplyr::mutate(
    rangep = case_when(
      y >= 98 ~ "Exceptionally High",
      y %in% 91:97 ~ "Above Average",
      y %in% 75:90 ~ "High-Average",
      y %in% 25:74 ~ "Average",
      y %in% 9:24 ~ "Low-Average",
      y %in% 2:8 ~ "Below Average",
      y < 2 ~ "Exceptionally Low",
      TRUE ~ as.character(y)
    )
  )

x <- c("Name", "Score", "Range")
y <- c("{point.name}", "{point.y}", "{point.rangep}")
tt <- tooltip_table(x, y)

# Create drilldown bar plot

frameWidget(
  highchart() %>%
    hc_title(text = patient,
             style = list(fontSize = "15px")) %>%
    hc_add_series(
      ncogL1status,
      type = "bar",
      name = "Neuropsychological Test Scores",
      hcaes(x = name, y = y, color = colors8)
    ) %>%
    hc_xAxis(
      type = "category",
      title = list(text = "Domain"),
      categories = .$name
    ) %>%
    hc_yAxis(
      title = list(text = "Percentile"),
      labels = list(format = "{value} ‰")
    ) %>%
    hc_tooltip(
      pointFormat = tt,
      useHTML = TRUE,
      valueDecimals = 0
    ) %>%
    hc_plotOptions(
      series = list(
        colorByPoint = TRUE,
        allowPointSelect = TRUE,
        dataLabels = TRUE
      )
    ) %>%
    hc_drilldown(
      allowPointDrilldown = TRUE,
      series = c(ncogL2drill, ncogL3drill, ncogL4drill)
    )
)
```

<div class="figure">

<div id="htmlwidget-1" style="width:100%;height:100%;" class="widgetframe html-widget"></div>
<script type="application/json" data-for="htmlwidget-1">{"x":{"url":"index.en_files/figure-html//widgets/widget_drillp.html","options":{"xdomain":"*","allowfullscreen":false,"lazyload":false}},"evals":[],"jsHooks":[]}</script>
<p class="caption">
Figure 1: Drilldown Neuropsych Pct
</p>

</div>

## Drilldown using zScores

``` r
colors <-
  c(
    "#058DC7",
    "#50B432",
    "#ED561B",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4"
  )

colors8 <-
  c(
    "#058DC7",
    "#50B432",
    "#DDDF00",
    "#24CBE5",
    "#64E572",
    "#FF9655",
    "#FFF263",
    "#6AF9C4"
  )

## for Tooltip

ncogL1statusz <- ncogL1statusz %>%
  dplyr::mutate(
    rangez = case_when(
      y >= 2 ~ "Exceptionally High",
      y %in% 1.3:1.9 ~ "Above Average",
      y %in% 0.7:1.2 ~ "High-Average",
      y %in% -0.7:0.6 ~ "Average",
      y %in% -1.3:-0.6 ~ "Low-Average",
      y %in% -2:-1.4 ~ "Below Average",
      y < -2 ~ "Exceptionally Low",
      TRUE ~ as.character(y)
    )
  )

x <- c("Name", "Score", "Range")
y <- c("{point.name}", "{point.y}", "{point.rangez}")
tt <- tooltip_table(x, y)

# Create drilldown bar plot

frameWidget(
  highchart() %>%
    hc_title(text = patient,
             style = list(fontSize = "15px")) %>%
    hc_add_series(
      ncogL1statusz,
      type = "bar",
      name = "Neuropsychological Test Scores",
      hcaes(x = name, y = y, color = colors8)
    ) %>%
    hc_xAxis(
      type = "category",
      title = list(text = "Domain"),
      categories = .$name
    ) %>%
    hc_yAxis(
      title = list(text = "z-score"),
      labels = list(format = "{value}")
    ) %>%
    hc_tooltip(
      pointFormat = tt,
      useHTML = TRUE,
      valueDecimals = 0
    ) %>%
    hc_plotOptions(
      series = list(
        colorByPoint = TRUE,
        allowPointSelect = TRUE,
        dataLabels = TRUE
      )
    ) %>%
    hc_drilldown(
      allowPointDrilldown = TRUE,
      series = c(ncogL2drillz, ncogL3drillz, ncogL4drillz)
    )
)
```

<div class="figure">

<div id="htmlwidget-2" style="width:100%;height:100%;" class="widgetframe html-widget"></div>
<script type="application/json" data-for="htmlwidget-2">{"x":{"url":"index.en_files/figure-html//widgets/widget_drillz.html","options":{"xdomain":"*","allowfullscreen":false,"lazyload":false}},"evals":[],"jsHooks":[]}</script>
<p class="caption">
Figure 2: Drilldown Neuropsych zScores
</p>

</div>
