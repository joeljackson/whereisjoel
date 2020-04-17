---
title: On Making Decisions
layout: 'section'
chapter: On Software Strategy
order: 1
---

## The two activities of an organization

Everything your organization does falls into the category of "Making Decisions" or "Executing on Decisions". The focus of organizations often strays to improving execution, while failing address decision making. First we'll examine a few of the negative organizational byproducts of poorly executed decision making, then we'll look at some of the reasons that organizations fail to do a good job of decision making; finally we'll talk about what to do to make decision making better.

## Why is decision making important?

Your organization is a sum of decisions you've made. Probably some of them were good, probably some of them were not. It should be obvious that if we're able to bias the decisions towards good decisions the organization will be better off. What we don't realize is the infrastructure around making decisions will not just impact the quality of decisions, but also the happiness of employees and organizational effectiveness throughout the decision making process. Almost every real decision that needs to be made will lead to some sort of employee disagreement, and good behaviors around making the decisions will make those disagreements much easier to handle.

## How to know if you have a problem with decision making

Every organization I have ever talked to has an issue some issue with making decisions. Decision making problems in organizations are easy to spot, but are rarely acknowledged because no one looks for them. If any of the following applies to your organization you probably have an issue with decision making that you need to address.

1. **Members of the organization frequently complain about decision making.**

   This might sound obvious. People are complaining about decision making, so we have a decision making problem, right? As a leader, you can be completely oblivious to this unless you actually look, because the symptoms are hidden from organizational leaders. The way this manifests is people standing around in the kitchen will say things like

   > It's so stupid that we're changing the facebook landing pages to client side rendered pages.

   An organization that is good at making decisions will minimize this kind of conversation.

2. **"Decisions" are not followed through on**

   Decisions made through broken decision making behavior are much less likely to get executed. They will lack the organizational and team buy-in to make them actually work out.

3. **Members of the organization complain that other's are "in their lane"**

   No matter what you do this will occasionally come up in your teams. This manifests as people saying things like

   > I'm the director of data science, and the the database schema for this project is terrible. No one talked to me about it and it should be my call.

   Having "Lanes" should be the first red flag for you. An organization that understands decision making doesn't need to be nearly as black and white in terms of who owns what. There's no reason the director of data science mentioned above should have to be the person who decides on the database schema for a project. In fact, this project may not be the director of data science's main priority and requiring them to make the decision will slow down the project. Rather than making sure that everyone stays in their lane, we solve this problem by following good decision making behavior.

4. **The reason your managers are giving for doing something is "Because so and so said so"**

   Any time ay employee is discussing the "why" behind a decision they should understand the reasoning, even if they don't agree. Saying "We're doing this because Jeff said we have to do this" is destructive and usually caused by broken decision behaviors.

## How to make decisions

1. **Identify that you're making a decision**

   The fact a decision is being made is, sometimes, obvious. For example "Are we going to change from a homegrown software platform onto a turnkey software platform?" or "Are we going to use SQS or RabbitMQ for our queueing system?" Often, however, a decision being made slips through the cracks. For example you marketing team might set up a new facebook campaign that drives to a landing page that hasn't been used for marketing before. Maybe the lander wasn't meant to receive marketing traffic so the UTM parameters aren't set up correctly, or maybe it's just slow. Deciding to send a campaign to a new lander is the kind of decision that often goes un-noticed but that can cost an organization both in dollars and organizational trust down the line.

2. **Identify a person to make the decision**

   For every decision identify someone in the organization to make the decision. Groups are not well suited to making decisions. As a leader, It can be scary to surrender control over meaningful organizational choices. Remember that you've hired people because you trust them and they're good at their job! More importantly, you may not be the best person in the organization to make the choice. Front lines employees usually have more information and by being closer to the actual problem are better able to understand constraints.

   How do you identify the correct decision maker? Ideally you want an employee as close to the problem as possible, but with enough organizational influence that people will buy into a choice they've made.

   > > Imagine a company that manages software architecture. Something like Heroku. The founder/CEO is likely and excellent software architect and probably very good at devops. The organization will have devops problems and need to make decisions on them. Despite their apparent skillset, the organization's CEO is not the right choice to make decisions on the devops problems, the CEO probably doesn't spend nearly enough time in the weeds of your company's tech stack to make a good decision. On some specific decision like how to fix some sort of persistent deploy bug one of your developers with good social influence in the organization would be an appropriate decision maker.

3. **Make sure the person making the decision understands their framework and constraints**

   One side-effect of pushing decisions down to the frontline is that the decision maker will naturally have less context. This means that it's important that the organizational goals and contexts are communicated.

   > > Let's talk again about the Software Architecture organization. The CEO is an exceptional architect, but the CEO is not the most appropriate decision maker. It would be unwise to ignore the CEO's experience. There is a good chance that the company's CEO has a direction they want the team to move in. For example, maybe the CEO knows that the team will need to remain small based on budget, so they want to keep the surface area of different technologies minimal. If the decision making developer decided to fix the problem by introducing a new technology, then there has not been effective communication of the companies goals and the constraints the decision maker needs to work within.

4. **Have the person making the decision identify and talk with all key stakeholders**

   You've identified the decision maker and given them a set of constraints. No matter who the decision maker is, they will not have the full picture. Also, key stakeholders need to be involved in decisions to create buy-in. Your decision maker needs to talk to each stakeholder to understand their opinion and the reasons behind the opinion. The decision maker listening to each stakeholder will not only enable them to make a better decision, it will allow them to address any concerns the stakeholders will have if the decision does not go that stakeholder's way.

5. **Make the decision**

   As a leader, you've identified a decision-maker, you've made sure they understand the constraints, and they've talked to all the key stakeholders. Let them make the decision. This is why you hire people you trust who are good at their job. Be thoughtful about it, but unless it's a disaster of a decision, go with it. Remember, at this point they should know more about the problem than you do.

6. **Communicate with all key stakeholders what the decision is and why the decision was made**

   The decision, now made, needs to be communicated out. If you've built a diverse organization not everyone will agree with the decision. This results in problems at organizations that have not followed an effective decision making process. If you've done everything right up to here, you'll be fine. Everyone understands who's decision it was to make and the framework within which the decision was made. Now you need to communicate to each stakeholder what the decision was and as importantly why it was made. Since the decision maker has talked to each stakeholder they should know each stakeholder's concerns and be able to effectively address the concerns.

7. **Review**

   Any decision should get a retrospective that is blameless. Decisions will occasionally be bad or wrong, that doesn't make the decision-maker an ineffective employee. This is an opportunity to get better as an organization. Don't miss it by blaming. Do take the time to scrutinize whether stakeholders were all consulted, the framework was passed to the decision maker, and the reasons were effectively communicated out.

## How to implement a decision making process

All of this can be implemented without new "enforced processes" and without new stakeholder meetings, decision meetings etc. Rather it should become an organizational habit. For example in step 4 "Identify and talk to all stakeholders" the decision maker could accomplish this without having any large meetings, or passing through and "process gates". They should understand what's expected of them and all conversations can be handled 1-1 or on slack.

Implementing this playbook is easy. First, share the playbook. Second, pick a decision and run with the playbook. Third,
have a retrospective on how it went. Rinse, lather, repeat. If you and your managers continually decide to push effective decision making it will become an organizational habit.
