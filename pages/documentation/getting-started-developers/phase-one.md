---
permalink: /documentation/getting-started/developers/phase-one-install/
layout: styleguide
title: "Phase 1: Install"
category: How to use USWDS
lead: Install Design System files and source code into your project.
type: docs
subnav:
  - text: "Step 1: Install Node and npm"
    href: "#step-1-install-node-and-npm"
  - text: "Step 2: Initialize your project in Node"
    href: "#step-2-initialize-your-project-in-node"
  - text: "Step 3: Install USWDS"
    href: "#step-3-install-uswds"
  - text: Latest updates
    href: "#changelog"
changelog:
  key: docs-getting-started-devs-phase-1
---

The U.S. Web Design System distributes our source code through npm, a package manager that uses a flavor of JavaScript called Node.js. The best way to add the Design System to your project is with npm via a Terminal window (check out some tips for using Terminal on a [Mac](https://support.apple.com/guide/terminal/open-or-quit-terminal-apd5265185d-f365-44cb-8b09-71a064a42125/mac) or [Windows](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?rtc=1&activetab=pivot:overviewtab)).

Installing the Design System with Node and npm not only allows you to install all the code the Design System needs to compile with just a couple commands, but will version any installed packages, like USWDS, as well — meaning your project code is tied to a specific version of the Design System. Confirming what version you’re using and updating to a newer (or older) version is straightforward.

## Step 1: Install Node and npm
Open your Terminal application and a Terminal window. Check to see if you have the [most recent version of Node](https://github.com/uswds/uswds/blob/develop/.nvmrc) installed with `node -v`.

If you don’t have Node, install it from [Node.js](https://nodejs.org/en/download).

## Step 2: Initialize your project in Node
Once you have Node and npm installed, go to the root of your project directory in Terminal. The root is the topmost directory associated with your project, the directory that includes all your project files and directories. In Terminal, the root will read as follows:

{:.site-terminal}
```bash
cd path/to/project/root
```

Initialize your project to create a file called `package.json.` Once you have this file, you can use npm to install software (or packages) like USWDS. At this point, your Terminal window may read as follows:

{:.site-terminal}
```bash
npm init

# This utility will walk you through creating a package.json file.
# It only covers the most common items, and tries to guess sensible defaults.
# ...
```

This initialization will start a series of prompts at the command line. Usually the defaults (which are noted in parentheses) are okay for a simple project. You can always edit these values later. Once this process is finished, you’ll have a new package.json file in the root, which will read as follows:

{:.site-terminal}
```bash
ls

# package.json
# [other directory contents...]
```

## Step 3: Install USWDS
Now, you can install USWDS — and any other Node package — from the command line with npm.

Npm does the work of installing packages and, behind the scenes, automatically installing all the software each package needs to run (also known as a package’s dependencies). The final software is saved into a new directory called `node_modules`.

To install USWDS from the command line and save it as a dependency in your `package.json`, run the following command:

{:.site-terminal}
```bash
npm install @uswds/uswds --save-exact

# [a lot of notices]
# + uswds@{{ site.uswds_version }} [or another version number]
# [a few more notifications]
```

We recommend using the `--save-exact` flag when installing `@uswds/uswds` because it allows you to control when USWDS updates get pulled into your project. This flag pins the dependency to an exact version until you manually update it, which reduces the risk of a USWDS update unexpectedly breaking or changing your project.

Once you run this command, npm will show some notifications, install USWDS, and display the version number of the USWDS package. You’ll also see the following information in your package.json:

{:.site-terminal}
```json
"dependencies": {
  "@uswds/uswds": "{{ site.uswds_version }}" [or another version number]
}
```

Now, the USWDS source code is in your project, in `./node_modules/@uswds/uswds`.

{: .site-note }
**Don't modify the source code**
This guidance may seem counterintuitive, but now that you've installed the USWDS source code, you don't want to edit it in any way because the source code in the `node_modules` directory is controlled by npm and could be rewritten at any time, especially if you reinstall or update the USWDS version. In fact, if you use Git or GitHub for your project, you should add `node_modules` to your `.gitignore` file.

{: .site-note.margin-top-0 }
You do want to use the source code, but you don't want to modify it to use it. Instead, in Phase 2, we'll discuss how to compile, theme, and extend the USWDS source code in your project.

**Next:** [Phase 2: Compile]({{ site.baseurl }}/documentation/getting-started/developers/phase-two-compile/) →
