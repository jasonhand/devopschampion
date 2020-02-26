---
- title: "Responding to Incidents"
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

## Lifecycle of an incident

What I’m here to talk about today is what happens once we receive an alert. What is the next part that takes place? And you can see there’s much more to an incident than just the response. We’ll go over remediation a little more towards the end of the presentation. Here are each of the phases of an incident.

### Phase 1: Detection

A problem has been detected through various tooling and practices

### Phase 2: Response

A coordinated effort to get the right people and tooling in place to diagnose, theorize, and triage.

### Phase 3: Remediation

Efforts made to change the system to either restore service or confirm theories.

### Phase 4: Analysis

Post-incident retrospective exercise to understand the the full the lifecycle of the incident including the human response.

### Phase 5: Readiness

Implementing knew knowledge and changes to improve and shorten the time and effects of future incidents.

## Response Foundations

If we are going to talk about the foundations of building reliable systems including the foundations of a good incident response plan, I think the best place to start is by determining “Who is expected to respond to problems?” and “How do let them know?” The best place to start, is to design what is known as a “Roster” or an on-call team. We’ll talk more about rosters in a moment. First, we’ll talk about some of the “Roles” of the people that make up that “Roster”.  And last, we’ll talk about what a rotation is.

### Rosters/Roles/Rotations

#### Roles

##### Primary Responder

The first role we need to talk about is the “Primary Responder” – the Primary “On-call” engineer.

##### Secondary Responder

Then we have the secondary responder – who is there as back up -Another engineer who can step in if the primary responder is unavailable or unreachable. Or if they just need another pair of eyes.

##### Incident Commander

Another key role to identify, in many cases, is the incident commander. An incident commander can be extremely helpful when you have got a large-scale outage that effects a lot of different components or requires coordination across many teams and different systems. They are great for making sure that engineers stay focused and they are working on their own remediation efforts... Ensuring people are not stepping on each other or undoing each other's work.  It is good to have a central person who can track what is going on and who is doing what.  

##### Communication Coordinator

The Communication Coordinator is meant to be the person working in conjunction with the incident commander to share more information beyond those who are in the firefight actively working to recover from the incident itself. That could be customers. It could be the sales and marketing teams. Maybe your customer support. There are many people within an organization who need to be made aware of what’s taking place and the status around how things are progressing. It's always good to put someone in charge of managing that communication and making sure that other stakeholders are aware of what is happening and what’s being done.

##### Scribe

The scribe’s role is to document the conversation in as much detail as possible. Teams commonly use phone bridges, conference calls, or video chat to get everyone together and try to understand what is going on, which can certainly help create space for the conversation. However, it is difficult for us to go through and understand in detail what the engineers were saying and doing unless it is transcribed. As a result, a scribe is that person who can help us document as much as possible to review later. What were people saying, doing, feeling, and even experiencing?  It is all data to be analyzed – but only if we capture it.

##### Subject Matter Experts

It’s quite common within on-call rosters to identify subject matter experts, so that early responders know who to escalate too quickly. These people should not be on call all the time, of course, but we do want to be able to identify who is our database expert. Who is our front-end expert? Who are the people that we can reach out to if our primary and secondary responders are not able to diagnose and resolve the issue themselves?

#### Rosters

Rosters establish a framework around who is on-call at any given point. A roster, or team, is made up of multiple engineers. Rosters can also contain multiple rotations. 

#### Rotations

A rotation is a scheduled shift. Engineers takes the “on-call” responsibility for their own specific recurring rotation. There are several types of shifts that you can create – some more common than others.

##### 24 x 7

is a rotation where engineers will be “on-call” for several days in a row. However, most “Elite/High performers” would agree that rotations longer than 3 or 4 days are detrimental to the overall health of engineering staff and therefore the entire system.  

##### Follow the Sun

Follow the sun shifts are nice for distributed teams. These allow for engineers to schedule their “on-call” shifts only during their normal working office hours. As they end their day and go home, engineers in a different time zone can take over.

And of course, there are many ways to customize shifts, especially for weekends when engineers need more flexibility. Engineers should be able to hand off the role to someone when personal conflicts arise.

#### Incident Tracking

Another thing we want to do, to address the challenges of Tailwind Traders and their incident response improvements is we want to be able to track:  

##### When Did We Know About This Problem

Is this a new incident? If we are trying to reduce the time it takes to recover from incidents, we will need to start capturing when we are aware of issues.

Not only that but we want to keep track of:  

##### How Did We Know About the Problem

Did our monitoring systems tell us, or did a customer inform us? If we plan to learn and improve, capturing how we knew will uncover improvement opportunities in our monitoring practices.  

If I am just finding out about a problem...

##### Am I the First to Know

Who else is aware?  

And let us say others are aware of the problem...

##### What (if anything) is Being Done

Is everyone assuming someone else is looking into it?  

And last...

##### How Bad is It

We may not have any notion of severity or impact and there is no place for us to find out how bad the problem really is, and who is affected. These are tough questions to answer if nothing is tracked.

#### Communication channels

To address some of the challenges around how we communicate we also want to find a way to create a unique channel or space for engineers to discuss the details of the incident - a “conversation bridge” in our persistent group chat tool -which for Tailwind Traders is Microsoft Teams.  

We want a channel that is unique to the incident only. We do not want conversations about other engineering efforts.We don’t want conversations about what people are doing for lunch. We ONLY want conversations related to the incident. Because then we can take that text (or data) and analyze later in a Post-incident review.

Using Logic App to create a workflow for responses (including Azure Boards, Azure Storage, Microsoft Teams)

>Task: Using Logic Apps

### Remediation

Although thinking of incidents in terms of phases allows for us to shorten each in their own unique ways, responding to and remediating an incident often begin to blur. Especially when actions to mitigate or improve the situation, have the opposite result.

Now that we’ve covered the foundations of building a good incident response plan, let's talk about remediation efforts and what that looks like for Tailwind Traders.

#### Supplying Context and Guidance

Where to start? How on-call engineers should escalate incidents? What metrics, tools, links or general resources might be helpful? In a non-prescriptive way, what can be provided to help assist in the efforts to fix the problems.

#### Update stakeholders

It's important that internal teams are aware of what's happening when an incident occurs. If we don’t provide consistent updates, stakeholders will start coming around and asking.They have every right to this information, but we've got to find a better way to make them aware of an issue and what is being done about it. We need to find a way to be clear about our acknowledgment to our internal teams.

#### Clear expectations

We should be clear in presenting what we know, what is being done and what kind of expectations should they have in terms of when they're going to hear back from us?

#### ChatOps

Task: Webhook (started from Microsoft Teams) hits an Azure Function endpoint to update a static HTML (hypertext markup language) (status) page stored in Azure Storage.