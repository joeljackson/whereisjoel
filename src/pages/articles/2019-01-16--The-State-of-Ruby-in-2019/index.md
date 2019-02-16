---
title: The State of Ruby in 2019
date: "2019-01-16T00:00:00.000Z"
layout: post
draft: false
path: "/posts/the-state-of-ruby-in-2019/"
category: "Software Engineering"
tags:
  - "Software Engineering"
  - "Ruby"
  - Rails
description: "In the last half decade the world of software has changed. My thoughts on where Ruby fits moving into the 2020s."
---

**TLDR;** If you like Rails, use it.

I started a new project this week. Pretty much greenfield. Very little code in place. Immense task in front of us. Toolset to choose. As it has over the last decade the first thing that came to mind was Ruby on Rails.

All the developers I know have been talking for the last 4 years about how Ruby is dying. I often hear quotes like "Starting a project in Rails now is like starting a project in COBOL in 2004", or "No one uses Rails anymore, learn something new." Given the ecosystem I thought it may be a good time to take a long hard look at where Ruby is now, and whether it really is the right choice to scale a company.

## Anecdotal Evidence
This is probably the easiest place to start. People in Los Angeles often reach out and ask for help with their new software stack. Nine times out of ten, it's Ruby on Rails. I'm the first to admit that there is significant bias there. My LinkedIn mentions Ruby, my Github features Ruby and anyone who refers me knows Ruby is my default tool. Despite all of this, I have to ask if it's really reasonable to call a language that seems to spawn 1-2 reasonable sounding startups a month *that I'm aware of* a dying language. 

I was talking with a friend who was launching a new codebase and he said almost verbatim
> We were starting to write the new app using node.js. And we went to add auth. A day later we had an auth system that I felt pretty good about. Then the next day I was talking with the team, and we realized that instead of 1 day, it would have taken 1 hour in Rails. I couldn't help but wonder how many more days we were going to lose, so we scrapped the project and started again in Rails.


## The Tiobe Index / Github languages / Stack Overflow
For the last fifteen years the [Tiobe index](https://www.tiobe.com/tiobe-index/) has been a simple way of checking the programming language ecosystem. It's pretty much just a count of search engine results for every language. Anyone who went to take a look probably noticed that Ruby had a bad year. The index is calculated by the relative number of search hits for each language across a range of search engines. For example google and baidu. Top 20 is nothing to snear at, but it's important to remember that Software Engineering as a job is growing rapidly. It's totally reasonable to assume that a smaller part of a larger pie will still offer a huge community to support you.

In Github's [State of the Octoverse](https://octoverse.github.com/projects#languages) a similar story emerges. Ruby is still a dominant language (#10 in the language poll) but slipping over time. Let's keep this in perspective, github itself is written in Rails, and the page you may have just linked out to was written in jekyll. If anyone is worried about support, don't.

![State of the Octoverse](https://d.pr/i/7L6jBv+)

In StackOverflow's [Most Loved, Dreaded Wanted](https://insights.stackoverflow.com/survey/2018/) Languages Ruby shows as somewhat loved, somewhat dreaded, but still present. (Rails fails to show it's face, but the only server side web development "Framework" to really make a showing is Django.)

## Google Trends
Google trends takes note of google search term use over time. I've included a few similar language/platforms in the following to get an understanding of how the programming-verse is changing.

![Google Trends](https://d.pr/i/LWRjtO+)

You can see that in terms of google search, Ruby has maintained a very stable search volume relative to the competition.

## The alternatives
Web applications in 2019 are more fun to build than they have ever been. The ecosystems have great answers on StackOverflow and better tooling than ever. Some options that aren't Rails  in no particular order with some overlap include...

#### Serverless
Serverless is the idea of deploying snippets of code to run on certain events. The code can be run ad hoc on lambda and you just pay for the compute power you use rather than full time servers. To be honest this is not incompatible with some of the upcoming choices. For example serverless Express, serverless Django and serverless Laravel are all possible. One fun advantage of serverless is if forces you to decompose your app into easy to grok pieces early, which can alleviate lots of SRP headaches later if you do it right!

#### JamStack
I obviously like JamStack. The website you are looking at is created in Gatsby. Write your website in a static site generation tool like Gatsby or Jekyll. Make changes to markdown to create and manage pages. All changes are pushed to github and commits to master cause automatic deployment of a static site to static hosting. No more database queries or downtime, just straight HTML and CSS. Then if you need dynamic rendering you can add some client side code that hits some sort of graphql server or something.

#### Django
Python's version of Rails.

#### Express
Lightweight JS framework. Great for deploying serverless and building microservices. Buyer beware - there is probably more upfront work with Express than others here in this list.

#### Laravel
PHP's version of Rails. Don't be put off by PHP! Starting with facebook the ecosystem was revitalized and is much more robust than the old days of "YOLO, make changes straight on the server".

#### Others
Elixir/Golang. So many options!

## No longer committed to the monolith
Long gone are the days when we fired up a Rails app, created some Rackspace servers and deployed using Capistrano. With modern infrastructure tools like Terraform and ansible it's possible to build Rails apps that work together, take advantage of ActiveRecord and can be deconstructed into their own responsibilities. There is a fear in the development community of working with a rails app that has a 12 hour spec suite and hour long deploy process with 3 god classes and who knows how much code. Rails doesn't force this to happen anymore than using express guarantees it won't. Thoughtfully build your app, we've all learned alot since the wild west days of Rails 2/3.

## What's happening in the Rails community?
To be honest, not all that much. Rails added Action Text in Rails 6. A rich text editor. Yawn... Parallel testing? Sure, but I got that from CircleCI years ago. But who cares? Rails has great support of JavaScript for the frontend since it adopted Yarn and WebPack. Why fix something not broken? It's proven itself to be one of the fastest ways to get time to value, and time to value should be your most important metric before you've found product market fit.

## Use what you know
On a new project your goal is to get things running and find product market fit. As much fun as learning a new tool is (And it really is) the thing that delivers value right now is being able to move fast. If you know Rails, you can use it without fear of it dying. If you know php, go use Laravel. Long story short, we started our project in Rails.