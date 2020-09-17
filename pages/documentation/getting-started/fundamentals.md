---
permalink: /documentation/fundamentals/
layout: styleguide
title: USWDS fundamentals and quickstart guide
category: How to use USWDS
lead: Getting started with the design system
subnav:
---

USWDS is a powerful and adaptable design system. There are two fundamental concepts teams need to understand to set started:

- How to add USWDS source code to your project
- How to compile the source code into browser-readable CSS

Once you understand how to work with USWDS source code, you'll be well on your way to designing and building with the design system.

## How to add USWDS source code to your project

In order to _use_ USWDS with your project, you need to add it to your project.

The best way to add USWDS to your project is through a terminal window (see tips for using **Terminal** on a [Mac](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) or [Windows](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)). We distribute our source code through a service called **Node Package Manager** (or **npm**) which uses a flavor of JavaScript called **Node.js**.

Installing USWDS with Node and npm allows you not only to install all the code the design system needs to compile, but versions this code as well — meaning that it ties the code to a specific version. It's easy to know what version of the design system you're using, and it's easy to update to a newer (or older) version of the design system as well.

### Install Node and npm

Open up your terminal application and a terminal window. Check to see if you have Node installed with `node -v` should be at least **12.16.1**.

{:.maxw-tablet}
```bash
> node -v

v12.16.1 [or higher]
```
