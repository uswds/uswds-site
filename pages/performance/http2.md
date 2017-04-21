---
title: HTTP/2 Performance Guide
permalink: /performance/http2/
category: Getting started
layout: styleguide
---

> TLDR;

> If possible, enable HTTP/2 support on your server for the performance gains it provides.

> If using HTTP/2, do not use the domain sharding/splitting technique of moving multiple resources to different domains, as it’s an anti-pattern with HTTP/2.

> If using HTTP/2, rather than concatenating and spriting all files together, split them up into smaller chunks, enough to ensure the server isn’t sending more than 50 resources per page.

## What is HTTP/2

HTTP/2 is the next version of the HTTP protocol, the protocol that powers the web. It originally came from the SPDY protocol, which was invented by Google to a bring safer, faster, and more efficient process of serving websites to browsers. Once Google started using SPDY, the W3C and other browser implementors decided that SPDY would make a good basis for the next version of HTTP.

## How it differs from HTTP 1.1

HTTP/2’s biggest difference is its transmission of data. Rather than sending data in plaintext, HTTP/2 transfers messages using a binary format. This binary format allows for much faster transmission as it equates to lower overall data size. This, combined with HTTP/2’s new multiplexing feature, can significantly speed up website speed when downloading resources.

Multiplexing is HTTP/2’s ability to send data back and forth in parallel over one existing open connection. In the prior version, HTTP 1.1, when requesting multiple resources from the same domain, each request would have to happen synchronously, one after the other. Additionally, if the HTTP connection wasn’t configured to stay open after each request, each resource would have to go through a multi-step handshake process before transmission, further increasing the time for resources to be downloaded. HTTP/2 changes this by allowing multiple channels to be opened within one connection so all resources requested can be downloaded in parallel.

The last prominent feature of HTTP/2 is that, in practice, browsers have only implemented HTTP/2 support  for sites that are served over HTTPS. While the HTTPS handshake can add some loading time, that extra time can be reduced through HTTPS configuration (more later) and regardless is not significant enough to warrant not using HTTP/2, considering the other performance gains.

For more information on HTTP/2, see [Google's developer reference](https://developers.google.com/web/fundamentals/performance/http2/).

## How HTTP/2 affects performance

HTTP/2 changes how resources affect a page’s download speed and affects how resources are downloaded from the server to the browser. Some performance improvement techniques  are no longer relevant when switching from HTTP 1.1 to HTTP/2. The two most relevant techniques are: splitting domains to download resources to ensure more parallelization when downloading resources and concatenating resources into single files as to not open multiple connections.

### Splitting domains

A common performance improvement pattern of the last decade is to split requests for resources (such as Javascripts, stylesheets, images, and fonts) over multiple domains. This would ensure the browser would download these resources in parallel, as there’s a limit to how many resources a browser can download from a single domain at a time.

Under HTTP/2 this pattern effectively becomes an anti-pattern, a commonly used, bad practice, and using CDNs or servers with different domains to serve assets is no longer required. With HTTP/2 being able to multiplex a single connection so multiple requests can be downloaded at once, there is no limit per domain as in HTTP 1.1.

### Concatenation

Concatenation in front end development is the process of combining similar file types into one central file to be downloaded by the browser. For example, all images are combined into a single, large image, or sprite, and just this image is sent to the server, with the browser picking out the correct image to use within the sprite. This ensures that the browser doesn’t have to make as many requests, which reduces expensive round trip times for each new connection.

Unlike splitting domains, concatenation is not a complete anti-pattern with HTTP/2. Under HTTP/2, it’s a good practice to split up files and ensure resources are only served when needed. That being said, other things affect the the speed tradeoffs of splitting up resources. For example, when Khan Academy served all of its 300+ JavaScript files separately to HTTP/2 users, they saw a degradation in performance. This was due to less efficient compression over multiple files and server delays related to having to serve so many files. For more information, see [Khan Academy's article](http://engineering.khanacademy.org/posts/js-packaging-http2.htm) or [Smashing Magazines article](https://www.smashingmagazine.com/2016/02/getting-ready-for-http2/)

When it comes to concatenation, splitting files into smaller, logical chunks rather than one large file seems to offer the best performance over HTTP/2.  The amount of chunks you can split until performance starts getting worse depends on the codebase and the server. But, as a general recommendation, don’t use over 50 chunks, as that seems to be where servers start to suffer from having to serve so many assets.

In order to fully take advantage of HTTP/2, it’s important to modify to take concatenation and domains into account to ensure it takes into account concatenation and domain splitting.

## How to upgrade to HTTP/2

A good first step before you upgrade is to check that your server hasn’t been running on HTTP/2 already. To do so, you can use this tool, which allows you to put in a public URL to see if the site is served over HTTP/2.

Upgrading to HTTP/2 requires that you have certain control of the CDN, or server your website and its assets are being served from. If your site is on a CDN not directly under your control, here are some tips on how to enable it for these common CDNs:

- [Akamai enabling HTTP/2 instructions](https://community.akamai.com/community/web-performance/blog/2015/01/26/enabling-http2-h2-in-akamai)
- [Cloudflare enabling HTTP/2 instructions](https://www.cloudflare.com/website-optimization/http2/)
- [Cloudfront enabling HTTP/2 instructions](https://aws.amazon.com/about-aws/whats-new/2016/09/amazon-cloudfront-now-supports-http2/)

## How to speed up HTTPS

There are a few techniques to improve HTTPS performance, both under HTTP 1.1 and HTTP/2. Most of these require access to certain layers of your website’s technology stack, such as direct server access. They also require more comprehensive knowledge on how to do each technique for the server and server tools in use. For general information on how to speed up HTTPS see [Optimizing nginx tls time to first byte](https://www.igvita.com/2013/12/16/optimizing-nginx-tls-time-to-first-byte/).

