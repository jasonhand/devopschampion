---
- title: "4. Tracking Incident Details"
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

# Tracking Incident Details

Another thing we want to do, to address the challenges of Tailwind Traders and their incident response improvements is we want to be able to track:  

## When Did We Know About This Problem

Is this a new incident? If we are trying to reduce the time it takes to recover from incidents, we will need to start capturing when we are aware of issues.

Not only that but we want to keep track of:  

## How Did We Know About the Problem

Did our monitoring systems tell us, or did a customer inform us? If we plan to learn and improve, capturing how we knew will uncover improvement opportunities in our monitoring practices.  

If I am just finding out about a problem...

## Am I the First to Know

Who else is aware?  

And let us say others are aware of the problem...

## What (if anything) is Being Done

Is everyone assuming someone else is looking into it?  

And last...

## How Bad is It

We may not have any notion of severity or impact and there is no place for us to find out how bad the problem really is, and who is affected. These are tough questions to answer if nothing is tracked.

## Resources

[MS Learn: Improve Incident Response with Alerting in Azure](https://docs.microsoft.com/en-us/learn/modules/incident-response-with-alerting-on-azure/)

## Next steps

[Measuring Incident Response](2020-02-25-Measuring-Incident-Response.html)