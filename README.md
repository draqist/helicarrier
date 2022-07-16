## This app was built as a partial requirement for the Frontend Engineering assesment for HeliCarrier.

- Deliverables :
 * Framework (React)
 * Fetch Data from a graphQL API and render the data.
 * Data must contain at least 20 rows of data groups with different dates
 * Filter the displayed data with specific inputs.
 * Search data with inputs
 
 ### API MODEL.
 As i could not find a perfect API fit for my use case. I used the `json-graphql-server` library to create my own data model and tried to mock the data best i can. 
 
 

### To run this app, 

You have to start up the mocked API for by running `json-graphql-server mock.js --p 3001` in the terminal (root of your application). Leave it running 

Then proceed to running `yarn start` in another terminal (root of your application) to start up the application.

### This application is bootstrapped using 
`CRA, Chakra UI for an easy to mockup UI, ApolloClient for fetching the data and JSON-GRAPHQL-SERVER for mocking the data and running it on your local machine`
