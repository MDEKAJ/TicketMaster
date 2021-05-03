# Task

Fans would like to be added to a waiting list when they have been unlucky after the first batch of tickets sold out quickly. This will enable them to come back to the site and buy when more tickets become available.

Create a form that does a POST request with JSON to `/api/waiting-list`.

The body should be JSON and contain `emailAddress` and `mobileNumber` fields

## Minimum requirements:

- Allow fans to ‘join the waiting list’ by adding their email and phone number
- A success message "You have been added to the waiting list" should be displayed on successful submission
- Display error message returned by the api on an unsuccessful submission
- Accessibility should be considered
- Design should be loosely based on the Ticketmaster website: https://www.ticketmaster.co.uk/

## Additional features:

- Form and field validation
- Tests
- Visualise loading state

## Notes

- You're welcome to use any method of styling you feel comfortable with. We use styled-components at Ticketmaster but we don't expect you to learn a new library for this exercise!
- You are encouraged to add comments in the code, or by extending this readme file explaining logic or reasoning for your decisions.

# Met's Notes

- Styling; basic material ui layout for perspective. If I was to copy the ticket master site I would used styled component library Aurora by ticketmaster.
- Aurora relies on the react, prop-types, react-transition-group, classnames, and styled-components peer-dependency packages are already to be installed and set up in your project. // I think 'to be' needs to be removed from this sentence right?
