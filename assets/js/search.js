
var documents = [{
    "id": 0,
    "url": "https://jasonhand.github.io/404.html",
    "title": "",
    "body": " 404 Page not found :(  The requested page could not be found. "
    }, {
    "id": 1,
    "url": "https://jasonhand.github.io/about/",
    "title": "About",
    "body": "This is where you put the contents of your About page. Like all your pages, it’s in Markdown format. This website is powered by fastpages 1.       a blogging platform that natively supports Jupyter notebooks in addition to other formats.  &#8617;    "
    }, {
    "id": 2,
    "url": "https://jasonhand.github.io/categories/",
    "title": "Tags",
    "body": "Contents: {% if site. categories. size &gt; 0 %} {% for category in site. categories %} {% capture category_name %}{{ category | first }}{% endcapture %} {{ category_name }}{% endfor %}{% endif %} {% for category in site. categories %}  {% capture category_name %}{{ category | first }}{% endcapture %} &lt;h3 id = {{ category_name }} &gt;&lt;i class= fas fa-tags category-tags-icon &gt;&lt;/i&gt;&lt;/i&gt; {{ category_name }}&lt;/h3&gt;&lt;a name= {{ category_name | slugize }} &gt;&lt;/a&gt;{% for post in site. categories[category_name] %}{%- assign date_format = site. minima. date_format | default:  %b %-d, %Y  -%}&lt;article class= archive-item &gt; &lt;p class= post-meta post-meta-title &gt;&lt;a class= page-meta  href= {{ site. baseurl }}{{ post. url }} &gt;{{post. title}}&lt;/a&gt; • {{ post. date | date: date_format }}&lt;/p&gt;&lt;/article&gt;{% endfor %} {% endfor %}"
    }, {
    "id": 3,
    "url": "https://jasonhand.github.io/README_old.html",
    "title": "",
    "body": "  https://jasonhand. github. io/fastpages/ My Blogpowered by fastpages What To Do Next?: Great! You have setup your repo.  Now its time to start writing content.  Some helpful links:    Writing Blogs With Jupyter     Writing Blogs With Markdown     Writing Blog Posts With Word     (Optional) Preview Your Blog Locally  Note: you may want to remove example blog posts from the _posts, _notebooks or _word folders (but leave them empty, don’t delete these folders) if you don’t want these blog posts to appear on your site. Please use the nbdev &amp; blogging channel in the fastai forums for any questions or feature requests. "
    }, {
    "id": 4,
    "url": "https://jasonhand.github.io/images/copied_from_nb/",
    "title": "",
    "body": "WarningDo not manually save images into this folder. This is used by GitHub Actions to automatically copy images.  Any images you save into this folder could be deleted at build time. "
    }, {
    "id": 5,
    "url": "https://jasonhand.github.io/2020/02/25/2020-02-25-TTR.html",
    "title": "Time to Recover/Remediate/Restore (TTR)",
    "body": "2020/02/25 - How many of you are familiar with the acronym T. T. R. ? It is known as the “Time to Recover” or also sometimes referred to as the “time to remediate” or “time to restore. ” In other words, the total time that it takes for us to bring services back online… with regards to the value we provide our end users and customers. What is the duration? This is just one metric that is often measured to understand how teams are performing when it comes to responding to incidents. I think you would all agree that complete prevention of problems is not very realistic. We must do better at knowing when something is wrong and being able to respond to it in an effective way. "
    }, {
    "id": 6,
    "url": "https://jasonhand.github.io/2020/02/25/2020-02-25-Responding-To-Incidents.html",
    "title": "Lifecycle of an incident",
    "body": "2020/02/25 - What I’m here to talk about today is what happens once we receive an alert. What is the next part that takes place? And you can see there’s much more to an incident than just the response. We’ll go over remediation a little more towards the end of the presentation. Here are each of the phases of an incident. Phase 1: Detection: A problem has been detected through various tooling and practices Phase 2: Response: A coordinated effort to get the right people and tooling in place to diagnose, theorize, and triage. Phase 3: Remediation: Efforts made to change the system to either restore service or confirm theories. Phase 4: Analysis: Post-incident retrospective exercise to understand the the full the lifecycle of the incident including the human response. Phase 5: Readiness: Implementing knew knowledge and changes to improve and shorten the time and effects of future incidents. Response Foundations: If we are going to talk about the foundations of building reliable systems including the foundations of a good incident response plan, I think the best place to start is by determining “Who is expected to respond to problems?” and “How do let them know?” The best place to start, is to design what is known as a “Roster” or an on-call team. We’ll talk more about rosters in a moment. First, we’ll talk about some of the “Roles” of the people that make up that “Roster”.  And last, we’ll talk about what a rotation is. Rosters/Roles/Rotations: Roles: Primary ResponderThe first role we need to talk about is the “Primary Responder” – the Primary “On-call” engineer. Secondary ResponderThen we have the secondary responder – who is there as back up -Another engineer who can step in if the primary responder is unavailable or unreachable. Or if they just need another pair of eyes. Incident CommanderAnother key role to identify, in many cases, is the incident commander. An incident commander can be extremely helpful when you have got a large-scale outage that effects a lot of different components or requires coordination across many teams and different systems. They are great for making sure that engineers stay focused and they are working on their own remediation efforts… Ensuring people are not stepping on each other or undoing each other’s work.  It is good to have a central person who can track what is going on and who is doing what. Communication CoordinatorThe Communication Coordinator is meant to be the person working in conjunction with the incident commander to share more information beyond those who are in the firefight actively working to recover from the incident itself. That could be customers. It could be the sales and marketing teams. Maybe your customer support. There are many people within an organization who need to be made aware of what’s taking place and the status around how things are progressing. It’s always good to put someone in charge of managing that communication and making sure that other stakeholders are aware of what is happening and what’s being done. ScribeThe scribe’s role is to document the conversation in as much detail as possible. Teams commonly use phone bridges, conference calls, or video chat to get everyone together and try to understand what is going on, which can certainly help create space for the conversation. However, it is difficult for us to go through and understand in detail what the engineers were saying and doing unless it is transcribed. As a result, a scribe is that person who can help us document as much as possible to review later. What were people saying, doing, feeling, and even experiencing? It is all data to be analyzed – but only if we capture it. Subject Matter ExpertsIt’s quite common within on-call rosters to identify subject matter experts, so that early responders know who to escalate too quickly. These people should not be on call all the time, of course, but we do want to be able to identify who is our database expert. Who is our front-end expert? Who are the people that we can reach out to if our primary and secondary responders are not able to diagnose and resolve the issue themselves? Rosters: Rosters establish a framework around who is on-call at any given point. A roster, or team, is made up of multiple engineers. Rosters can also contain multiple rotations. Rotations: A rotation is a scheduled shift. Engineers takes the “on-call” responsibility for their own specific recurring rotation. There are several types of shifts that you can create – some more common than others. 24 x 7is a rotation where engineers will be “on-call” for several days in a row. However, most “Elite/High performers” would agree that rotations longer than 3 or 4 days are detrimental to the overall health of engineering staff and therefore the entire system. Follow the SunFollow the sun shifts are nice for distributed teams. These allow for engineers to schedule their “on-call” shifts only during their normal working office hours. As they end their day and go home, engineers in a different time zone can take over. And of course, there are many ways to customize shifts, especially for weekends when engineers need more flexibility. Engineers should be able to hand off the role to someone when personal conflicts arise. Incident Tracking: Another thing we want to do, to address the challenges of Tailwind Traders and their incident response improvements is we want to be able to track: When Did We Know About This ProblemIs this a new incident? If we are trying to reduce the time it takes to recover from incidents, we will need to start capturing when we are aware of issues. Not only that but we want to keep track of: How Did We Know About the ProblemDid our monitoring systems tell us, or did a customer inform us? If we plan to learn and improve, capturing how we knew will uncover improvement opportunities in our monitoring practices. If I am just finding out about a problem… Am I the First to KnowWho else is aware? And let us say others are aware of the problem… What (if anything) is Being DoneIs everyone assuming someone else is looking into it? And last… How Bad is ItWe may not have any notion of severity or impact and there is no place for us to find out how bad the problem really is, and who is affected. These are tough questions to answer if nothing is tracked. Communication channels: To address some of the challenges around how we communicate we also want to find a way to create a unique channel or space for engineers to discuss the details of the incident - a “conversation bridge” in our persistent group chat tool -which for Tailwind Traders is Microsoft Teams. We want a channel that is unique to the incident only. We do not want conversations about other engineering efforts. We don’t want conversations about what people are doing for lunch. We ONLY want conversations related to the incident. Because then we can take that text (or data) and analyze later in a Post-incident review. Using Logic App to create a workflow for responses (including Azure Boards, Azure Storage, Microsoft Teams)  Task: Using Logic Apps Remediation: Although thinking of incidents in terms of phases allows for us to shorten each in their own unique ways, responding to and remediating an incident often begin to blur. Especially when actions to mitigate or improve the situation, have the opposite result. Now that we’ve covered the foundations of building a good incident response plan, let’s talk about remediation efforts and what that looks like for Tailwind Traders. Supplying Context and Guidance: Where to start? How on-call engineers should escalate incidents? What metrics, tools, links or general resources might be helpful? In a non-prescriptive way, what can be provided to help assist in the efforts to fix the problems. Update stakeholders: It’s important that internal teams are aware of what’s happening when an incident occurs. If we don’t provide consistent updates, stakeholders will start coming around and asking. They have every right to this information, but we’ve got to find a better way to make them aware of an issue and what is being done about it. We need to find a way to be clear about our acknowledgment to our internal teams. Clear expectations: We should be clear in presenting what we know, what is being done and what kind of expectations should they have in terms of when they’re going to hear back from us? ChatOps: Task: Webhook (started from Microsoft Teams) hits an Azure Function endpoint to update a static HTML (hypertext markup language) (status) page stored in Azure Storage. "
    }, {
    "id": 7,
    "url": "https://jasonhand.github.io/2020/02/25/2020-02-25-JasonTest.html",
    "title": "This is the secondary header to my first post",
    "body": "2020/02/25 - How does it look:  twitter: https://twitter. com/jasonhand/status/1230541316116758529 "
    }, {
    "id": 8,
    "url": "https://jasonhand.github.io/2020/02/25/2020-02-25-Incidents.html",
    "title": "What is an incident",
    "body": "2020/02/25 - Service disruption: I think we should fist discuss what we mean by incidents so we can come to a general understanding for today’s presentation. I am confident everyone would agree that an incident is a “service disruption” - something that is affecting our user’s ability to use the services they have come to rely on. Incidents are commonly… Feared and Avoided: In some cases, we downplay the significance of an outage … or worse … intentionally mis-label or not report a disruption in service for fear of reprimand. Historically, we have felt that incidents reflected poorly in several areas of our engineering efforts and the organization. It is not been until more recently through many of the conversations around devops and site reliability engineering, that we are starting to rethink incidents and now view them as opportunities to learn and improve our systems. Incidents can also be… Subjective: If you ask engineers across different organizations and industries, you will get many different answers about what an incident is. Sometimes it is only when a customer is affected. Others will label disruptions as incidents even if a customer never experienced a thing. Subjectivity is an unfortunate property of incidents in a lot of cases, even when it comes to identifying severity levels. The last thing I want to point out regarding incidents, is that most of what we as engineers and technologists do is planned work. We spend a lot of time and effort understanding the work in front of us. We calculate story points.  We plan sprints. We mostly have a good idea on what we are supposed to be working on. So, when an incident occurs, it is disruptive. It is… Unplanned Work: Often, we view this as a terrible thing, but if you stop and think about it, incidents are really “investments” in supplying the value we are trying to deliver to end users. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')
    this.metadataWhitelist = ['position']

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}