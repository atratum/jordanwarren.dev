---
title: Garden bird counter
date: "2020-08-10"
description: ""
---

My partner's passion for animal conservation recently piqued our interest in the birds that frequent our garden.

Pursuing scientific value from this hobby, we signed up to take part in the [British Trust for Ornithology's BirdTrack study](https://www.bto.org/our-science/projects/birdtrack). This case-study we selected involves noting down the quantity and species of the birds that interact within the confines our garden.

These recordings soon began to fill a notepad, which seemed wasteful. The process of inputting this collated data from paper-to-computer was also inefficient.

I sensed an opportunity a create a low power - albeit over-engineered - electronic solution. I quickly settled on a wall-mounted Raspberry Pi with an integrated touch-screen, running a lightweight OS and an auto-booting SPA.

Thus, [garden-bird-counter](https://github.com/atratum/garden-bird-counter) was born.

It was rushed out as an MVP and therefore it's currently in a very primitive state. However, I do plan to add additional functionality, such as automatic CSV generation and a CMS for manipulating available species.