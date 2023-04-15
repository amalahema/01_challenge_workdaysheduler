# 05 Third-Party APIs: Work Day Scheduler
## Table of contents
- Overview
    - The Challenge
    - Screenshot
    - Links
- My Approach
    - Code construction
    - Learnings
- Author
## Overview
### The Challenge

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```
### Screenshot

![A user clicks on slots on the color-coded calendar and edits the events.](./Assets/images/workdayshedule%20updated%20with%20present%20past%20%26%20future.PNG)

### Links
Github url - https://github.com/amalahema/01_challenge_workdaysheduler

## My Approach

### Code construction

- Jquery and day.js
- HTML & CSS
### Learnings

- Design the Workdayshedule using jquery and day.js 
- How to set the attribute and dynamically generate the div element inside the for loop that i need to use later for the local storage
- How to apply individual color to the past present and future time block by using the class name
- How to check the target time with the current hour by day.js library
- How to save the event to the local storage by setting key value.
- How to get the saved description from the local to the description column using hour as a key.


# Author
 - Amala Hema,  https://github.com/amalahema

