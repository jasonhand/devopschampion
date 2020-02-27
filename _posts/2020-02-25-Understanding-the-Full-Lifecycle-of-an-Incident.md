---
- title: "Lifecycle of an incident"
- summary: "Your systems are down! Customers are calling. Every moment counts. What do you do?"
- toc: true
- branch: master
- badges: true
- comments: true
- image: [https://www.devopsdays.org/events/2016-boise/speakers/jason-hand.jpg]
- categories: [Ignite The Tour, sre, chatops, devops]
- metadata_key1: Ignite The Tour
- metadata_key2: sre
---

# Understanding the Full Lifecycle of an Incident

What I’m here to talk about today is what happens once we receive an alert. What is the next part that takes place? And you can see there’s much more to an incident than just the response. We’ll go over remediation a little more towards the end of the presentation. Here are each of the phases of an incident.

![](../images/LifecycleOfAnIncident.png)

## Phase 1: Detection

A problem has been detected through various tooling and practices

## Phase 2: Response

A coordinated effort to get the right people and tooling in place to diagnose, theorize, and triage.

## Phase 3: Remediation

Efforts made to change the system to either restore service or confirm theories.

## Phase 4: Analysis

Post-incident retrospective exercise to understand the the full the lifecycle of the incident including the human response.

## Phase 5: Readiness

Implementing knew knowledge and changes to improve and shorten the time and effects of future incidents.

## Response Foundations

If we are going to talk about the foundations of building reliable systems including the foundations of a good incident response plan, I think the best place to start is by determining “Who is expected to respond to problems?” and “How do let them know?” The best place to start, is to design what is known as a “Roster” or an on-call team. We’ll talk more about rosters in a moment. First, we’ll talk about some of the “Roles” of the people that make up that “Roster”.  And last, we’ll talk about what a rotation is.

[Previous](2020-02-25-Lifecycle-of-an-Incident.html) | [Next](2020-02-25-Response-Foundations.html)