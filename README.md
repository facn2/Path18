![Path18 logo](logo.png)

[![Build Status](https://travis-ci.org/facn2/Path18.svg?branch=master)](https://travis-ci.org/facn2/Path18)

**[Web app](https://path18.herokuapp.com/) for informing young people of a variety of careers and paths** :mortar_board:

### Problem Statement:
* Young people have little exposure to the variety of jobs and careers paths they could pursue.
* Uncertainty around career prospects.
* Little knowledge of the path to take to get a specific job.

### User Journey:
As a user I can browse a variety of career paths and view detailed information about the ones that I am interested in.

### User Story:
##### As a user I can...
* read welcome page and instructions on how to use the app
* view card with job and decide if I like / dislike it
* click on card to view more details
* View list of jobs I like
* click on job to view details on the job and career path
* read details instructions for the app in the help page

---

### Wireframe:

### Architecture:

### Technologies:
* Express
* Handlebars
* MongoDB

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
* Add the `awaiting-review` label to the issue and PR.
* Request changes if appropriate.
* The final person to approve the PR should assign both QAs to review.
* Close issue after the PR has been merged and all tasks relating to the issue are complete.

### Stretch Goals:
* Ability to delete a job from the list of matched jobs.
* User authentication.
* Use of logic for browsing job options.
* Expand data to include colleges.
* Expand data to include more jobs.
