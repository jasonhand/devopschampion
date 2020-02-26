---
- title: "What is an incident"
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

# Incidents

First, we should discuss what we mean by incident.

I believe we can all agree that an incident is a “**service disruption**” - something that is affecting our user's ability to use the services they have come to rely on. Beyond that

There are other properties of an incident that are worth mentioning, however.  

Incidents are commonly:

- Subjective
- Feared
- Unplanned

## Subjective

If you ask engineers across different organizations and industries, you will get many different answers about what an incident is.

Sometimes it is only when a customer is affected.

Others will label disruptions as incidents even if a customer never experienced a thing.

Subjectivity is an unfortunate property of incidents in a lot of cases, even when it comes to identifying severity levels.

## Feared  

In some cases, we downplay the significance of an outage ... or worse ... intentionally mis-label or not report a disruption in service for fear of reprimand.

Historically, we have felt that incidents reflected poorly in several areas of our engineering efforts and the organization.  

It is not been until more recently through many of the conversations around devops and site reliability engineering, that we are starting to rethink incidents and now view them as opportunities to learn and improve our systems.

## Unplanned Work

The last thing I want to point out regarding incidents, is that most of what we as engineers and technologists do is planned work.  

We spend a lot of time and effort understanding the work in front of us.  

We calculate story points.  We plan sprints. We mostly have a good idea on what we are supposed to be working on.

So, when an incident occurs, it is disruptive. It is... unplanned work.

Often, we view this as a terrible thing, but in reality, incidents are actually “investments” in supplying the value we are trying to deliver to end users.

## Resources

[MS Learn: Improve Incident Response with Alerting in Azure](https://docs.microsoft.com/en-us/learn/modules/incident-response-with-alerting-on-azure/)

## Next steps

[The Lifecycle of An Incident](2020-02-25-Lifecycle-of-an-Incident.html)