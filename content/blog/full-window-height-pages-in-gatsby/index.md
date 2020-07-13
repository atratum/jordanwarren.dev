---
title: Full window height pages in Gatsby
date: "2020-07-13"
description: ""
---

Here's a small CSS snippet to ensure your Gatsby pages are spanning - at minimum - the full height of the browser window.

```
html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
}
```

You can further compliment this by pushing the last DOM element to the bottom of the page.

```
  <div style={{
    height: `100%`,
    display: `flex`,
    flexDirection: `column`
  }}>
    <header></header>
    <main style={{
      flex: 1
    }}>
    </main>
    <footer></footer>
  </div>
```

The `<footer>` element will now be pushed to the bottom of the page, regardless of if the content that precedes it is too short to span the entire height of the window.
