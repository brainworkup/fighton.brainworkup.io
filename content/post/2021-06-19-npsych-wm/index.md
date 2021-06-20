---
title: Joey Real Post Maybe
author: Joey Trampush
date: '2021-06-19'
slug: npsych-real-post
categories: []
tags: []
subtitle: ''
summary: ''
authors: []
lastmod: '2021-06-19T21:24:48-07:00'
featured: no
image:
  caption: ''
  focal_point: ''
  preview_only: no
projects: []
---

**Insert Lead paragraph here.**

## New Cool Post

{{ range first 10 ( where .Site.RegularPages "Type" "cool" ) }}\
\* {{ .Title }}\
{{ end }}





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

 Named list()


```
## Error in select(wm, one_of("phe_digit_span_fwd", "phe_digit_span_bkwd", : object 'wm' not found
```

List of 1
 $ NA: NULL





## Genomic SEM

Rcpp (1.0.6 -> 1.0.6.7) [CRAN]

  There is a binary version available but the source version is later:
     binary  source needs_compilation
Rcpp  1.0.6 1.0.6.7              TRUE

  
   checking for file ‘/private/var/folders/6l/57_kbxxx7bsgkdxp053b_yc40000gn/T/RtmpmgKkxn/remotes494d7231a507/GenomicSEM-GenomicSEM-e2cee62/DESCRIPTION’ ...
  
✓  checking for file ‘/private/var/folders/6l/57_kbxxx7bsgkdxp053b_yc40000gn/T/RtmpmgKkxn/remotes494d7231a507/GenomicSEM-GenomicSEM-e2cee62/DESCRIPTION’

  
─  preparing ‘GenomicSEM’:

  
   checking DESCRIPTION meta-information ...
  
✓  checking DESCRIPTION meta-information

  
─  checking for LF line-endings in source and make files and shell scripts

  
─  checking for empty or unneeded directories
   Omitted ‘LazyData’ from DESCRIPTION

  
─  building ‘GenomicSEM_0.0.3.tar.gz’

  
   


## Create list column


```
## Error: Problem with `mutate()` column `type`.
## ℹ `type = map_chr(phe_digit_span_fwd, typeof)`.
## x object 'phe_digit_span_fwd' not found
```

```
## Error in UseMethod("mutate"): no applicable method for 'mutate' applied to an object of class "list"
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
<bytecode: 0x7fb29eff94c8>
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

 Named list()
