---
title: Cycle Time
date: '2019-04-23T00:00:00.000Z'
layout: post
draft: false
path: '/posts/cycle-time-your-most-important-metric/'
category: Software Engineering
tags:
  - 'Sooftware Engineering'
  - 'Team Effectiveness'
description: 'Your Most Important Overlooked Metric'
---

## Metrics in software

It's always important to preface any discussion of "measuring" a software team with metrics with a quick caveat. Don't put a number on your software team and say "This means the team is (in?)effective." Trying to do this will always result in dysfunction. Hire managers who are good and who you trust. A good manager always knows how effective a team is or is not. However, picking a metric and tightening it up can be an effective way to shake out problems in your software behaviors and to improve how effective your team is.

## What is Cycle Time?

Cycle time is defined as the length of time between deciding to start work on something and being finished with that work.

## How do I apply cycle time?

One of the strengths of cycle time is that it applies to any part of your software process. It's frequently a trait of effective software organizations that whichever portion of their workflow you look at, the cycle time is relatively short.

### Time to release

Decreasing the time from deciding to build something to actually releasing gives your team 3 superpowers that not every team has

1. Better feedback. When your cycle time is short, it gives your team more opportunity to understand the effectiveness of features. The most important barometer of whether your software is good is whether it's being used for the thing it's intended to accomplish. Teams that have long cycle times lose valuable opportunities to get feedback on whether their software actually works.

2. More working software. I'm always amazed by the power of good software in organizations. Even software that's not "All the way done". The world can be very unpredictable and despite the best of intentions, product roadmaps often have to change more than we'd like. Fast cycle time guarantees software will go live. Live software, even if it's not "done", can empower organizations in surprising ways.

3. More agility. A corollary to the last point, sometimes software turns out to be good enough long before the intended scope is complete. Knowing a feature is already delivering value gives your team the ability to take on different work than was originally anticipated if needed.

4. Decreased risk. Understanding scope estimates is critical to any effective product discipline. The same initiative might be a company's top priority if it can be accomplished in a week, and not even worth doing if it were to take 4 months. Decreasing cycle time allows your team to more accurately estimate the size of projects which will in turn empower your team to do a dramatically better job of deciding what's the right thing to do.

### Time to run tests

This is an example of a cycle time measurement that's not behavioral, but rather technical. It does a good job of showing how a bad cycle time in a piece of the SDLC can affect cycle time on the whole chain though. Imagine a change a developer needs to make that might take them 45 minutes and someone in QA will need 20 minutes to test it. In an ideal world the time between the developer starting the word and it being in production should be under 2 hours. Now imagine that a spec suite takes 45 minutes to run. The developer finishes their 'work' phase and the specs start spinning. By the time they're complete teh developer has moved to a new task. They may come back to the first task in 2 hours and notice a spec is broken, no problem 5 minute fix. Context switch to another task, 2 more hours and the developer notices the tests have passed and the change can be tested. QA notices a minor change. Back to the developer who won't get to it today. The next morning they make the change, but QA can't get to it until the afternoon when the change is approved.

This task that you probably estimated as a "45 minute change" has now taken 2 days, maybe will spill over into a third depending on your deploy infrastructure and has cost 3 context switches for your developer on top of being a consistent mental drag while they monitored it. If the tests could run in 5 minutes, the entire back and forth ordeal would have been complete in under 2 hours and deployed. Now that we see how a single cycle time break can cascade through a simple task, imagine multiple problems like this. That's how your 30 minute tasks are taking two weeks

### Places to consider looking for cycle time problems

Time for feedback on tests. Time for feedback on QA. Time from a developer picking up a task to it being in production. Time to repair a critical bug in production. Keep looking. You'll find important cycle times all throughout the SDLC.

## What should I do?

Your cycle time directly affects your team's effectiveness. Any portion of your workflow with a long cycle time will directly hinder your team's ability to execute. The great thing about this is cycle time is a good place to start to hunt for dysfunctions. If you suspect a software team could be more effective, start to look at the cycle times on each part of their SDLC and ask yourself "could this be faster". It's not always a cycle time problem, but I'd wager more often than not you'll run into a cycle time problem somewhere in their flow.

A few strategies you can use to start to attack cycle time problems include

### Decouple projects

It might seem like it's really important to release the new auth microservice at the same time as adding oauth to your app. Propose doing the two things separately. Maybe you estimate it will take 4 weeks to do them concurrently and 5 weeks in serial. The 5 week project plan will almost always be safer, and you will be surprised by how much more often projects actually get done in the time estimated.

### Measure your cycle time

Engineers hate measuring their productivity. This may not be 100% true, but I've never met or heard of a team excited by it. Do it nonetheless. If you suspect a portion of the SDLC is moving slowly, measure it. Get creative. For example, you can get someone to make a quick script to see how long it takes PRs to be reviewed. You can have someone turn on a toggl timer when an issue is turned over to QA. Don't use this to decide if the team's effective, use ot to identify and fix pieces of your behavior.

### Focus on tools

Bad tooling is a huge enemy of good cycle time. Whether it's because things don't always "work" or because they require someone to shift their focus around while managing a group of asynchronous tasks tools can have a surprising impact on software performance.

### Get creative

It can helps to try something unconventional to shake a team out of a rut. For example, having trouble figuring out your cycle time on QA? Try getting QA team members to write test plans on changes and having your developers test themselves.
