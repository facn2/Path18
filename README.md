![Path18 logo](./public/images/logo.png)

[![Build Status](https://travis-ci.org/facn2/Path18.svg?branch=master)](https://travis-ci.org/facn2/Path18)

**[Web app](https://path18.herokuapp.com/) for informing young people of a variety of careers and paths** :mortar_board:

### Local Install

Clone the repository.
```
git clone https://github.com/facn2/Path18.git
```
Install npm modules.
```
npm install
```
View on localhost.
```
npm start
```
Run tests.
```
npm test
```

### Problem Statement:
* Young people have little exposure to the variety of jobs and careers paths they could pursue.
* Uncertainty around career prospects.
* Little knowledge of the path to take to get a specific job.

### User Journey:
As a user I can browse a variety of career paths and view detailed information about the ones that I am interested in.

### User Story:
##### As a user I can...
* read welcome page and instructions on how to use the app.
* view card with job and decide if I like / dislike it.
* click on card to view more details.
* View list of jobs I like.
* click on job to view details on the job and career path.
* read details instructions for the app in the help page.

---

### Prototype:

<img alt="Prototype start and info page" src="https://user-images.githubusercontent.com/25408167/31076462-ddb5dd62-a782-11e7-993b-b03bd4b87c79.png" width=49%>
<img alt="Prototype start and info page" src="https://user-images.githubusercontent.com/25408167/31076752-61ce4a70-a784-11e7-8542-998d451edd45.png" width=50%>
<img alt="Prototype start and info page" src="https://user-images.githubusercontent.com/25408167/31076464-dde5ca54-a782-11e7-9d93-30a080092e30.png" width=25%>
<img alt="Prototype start and info page" src="https://user-images.githubusercontent.com/25408167/31076466-ddead8dc-a782-11e7-8e45-ea310e21ac7a.png" width=25%>

### Architecture:

### Technologies:
* Express
* Handlebars
* MongoDB
* Mocha
* Chai

### Team Guidelines:

* CamelCase for JavaScript id's.
* kebab-case for CSS Classes.
* snake_case for multiple word file names.
* comments for code clarification.
* ES6 on backend and ES5 on the frontend.
* all team members should understand code before approval (comments on PR).


**Git Flow**
* Split each user story into technical tasks.
* Assign yourself to a task and add the `in-progress` label.
* Small commits with each sub-task of the technical issue.
* Create a `[WIP]` branch.
* Once the work is complete remove `[WIP]` and assign each team member to review.
* Remove the `in-progress` label and add the `awaiting-review` label and to the issue and PR.
* Request changes if appropriate.
* The final person to approve the PR should assign both QAs to review.
* Close issue *after* the PR has been merged and all tasks relating to the issue are complete.

### Stretch Goals:
* Ability to delete a job from the list of matched jobs.
* User authentication.
* Use of logic for browsing job options.
* Expand data to include colleges.
* Expand data to include more jobs.
