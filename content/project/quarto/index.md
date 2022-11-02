---
title: Hello, Quarto
date: "2022-11-02"
categories: 
  - Matplotlib
  - Coordinates
format: hugo-md
jupyter: julia-1.7
---

## Polar Axis

For a demonstration of a line plot on a polar axis, see @fig-polar.

``` {python}
#| label: fig-polar
#| fig-cap: "A line plot on a polar axis"

import numpy as np
import matplotlib.pyplot as plt

r = np.arange(0, 2, 0.01)
theta = 2 * np.pi * r
fig, ax = plt.subplots(subplot_kw={'projection': 'polar'})
ax.plot(theta, r)
ax.set_rticks([0.5, 1, 1.5, 2])
ax.grid(True)
plt.show()
```
