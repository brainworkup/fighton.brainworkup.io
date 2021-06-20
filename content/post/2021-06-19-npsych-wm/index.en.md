---
authors:
- admin
categories: []
date: '2021-06-19'
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
title: Neuropsych WM
subtitle: trying genomicsem for wm
summary: trying genomicsem for wm
slug: npsych-wm
lastmod: '2021-06-19T21:24:48-07:00'
output: distill::distill_article
keep_md: true
---

**Insert Lead paragraph here.**

## New Cool Post



## Developmental/Lifespan Trajectory of WM Skills

## Tidy Data

### Import


```
## Error in files %>% purrr::set_names() %>% purrr::map_df(~readr::read_tsv(file.path(data_path, : could not find function "%>%"
```

```
## Error in as_tibble(wm): could not find function "as_tibble"
```

### Clean with Janitor


```
## Error in wm %>% janitor::clean_names(): could not find function "%>%"
```

### Glimpse 1


```
## Error in glimpse(wm_clean): could not find function "glimpse"
```

## paged table



### Mean dsf


```
## Error in select(., c(phe_digit_span_fwd, phe_digit_span_bkwd, phe_digit_span, : object 'wm_clean' not found
```



## Create list


```
## Error in cols(IID = col_character(), FID = col_character()): could not find function "cols"
```

```
## Error in glimpse(wm_list): object 'wm_list' not found
```


```
## Error in select(wm, one_of("phe_digit_span_fwd", "phe_digit_span_bkwd", : object 'wm' not found
```


```
## Error in glimpse(wm_list[2]): object 'wm_list' not found
```





## Genomic SEM

### Create list column


```
## Error in tibble::enframe(wm_list): object 'wm_list' not found
```

```
## Error in mutate(., type = map_chr(phe_digit_span_fwd, typeof), length = map_int(phe_digit_span_fwd, : object 'wm1' not found
```

```
## Error in mutate(., smry = map2_chr(name, value, ~stringr::str_c(.x, ": ", : object 'wm_list' not found
```


```
## Error in ncol(wm): object 'wm' not found
```

```
## Error in eval(expr, envir, enclos): object 'wm' not found
```

```
## Error in eval(expr, envir, enclos): object 'output' not found
```

```
## Error in ncol(wm): object 'wm' not found
```

```
## Error in eval(expr, envir, enclos): object 'wm' not found
```

function (x, na.rm = FALSE, ...) 
UseMethod("median")
<bytecode: 0x7ff8ff116068>
<environment: namespace:stats>

```
## Error in ncol(wm): object 'wm' not found
```

```
## Error in eval(expr, envir, enclos): object 'wm' not found
```

```
## Error in eval(expr, envir, enclos): object 'na' not found
```

```
## Error in select(., contains(c("filename", "fid", "iid", "digit_span", : object 'wm_clean' not found
```

```
## Error in is.data.frame(x): object 'phe_wm' not found
```

```
## Error in glimpse(wm_list): object 'wm_list' not found
```
