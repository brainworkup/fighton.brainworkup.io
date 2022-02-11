# Daily Note: 2021-08-25

## Changes

- changed "blog" to "post" under content/

# age as integer
wm <- wm[, age := as.integer(age)]
wm <- wm[, age_int := as.integer(age_int)]
wm <- wm[, age_5y := as.integer(age_5y)]
wm <- wm[, age_5y.1 := as.integer(age_5y.1)]
wm <- wm[, age_10y := as.integer(age_10y)]