# SupplyAlly Mock App - Neo Zhi Xuan

This application was made using React.js and TypeScript, and deployed on Vercel.
Check out the live application at https://supplyally-mock.vercel.app/.

## Available Scripts

In the project directory, you can run:
### `npm i`
### `npm start`

This runs the app in development mode.

### `npm test`

This runs the unit tests set up using React.js testing library.

## A run through of the document

The pages are abstracted into components in the "/pages" folder.
The components like Navbar, Tracking Dates are abstracted into components in the "/components" folder.
The "/theme" folder stores the repeated styles like the ones used for dark buttons.

Unit tests are set up in App.test.tsx to test for successful logins and tracking flow.

## My analysis of the task

The task was to create a frontend application for a logistics company with its existing backend,
converting from Mobile to Web application. As such, I had the basic assumptions:
- Data would be fetched in json format, for simpler mapping to components
- Mobile-first design for ease of compatibility to existing customer base

As I looked more into the application, there were more application based assumptions I made:
- Tracking ID should be strict to 11 digits to prevent unnecessary calls to the backend
- We would have to mark as tracked before submitting tracking requests

Overall, as a mock application, I went with a Single Page Application for better speed and ease of navigation.

However, I believe the application could be improved with more time:
- Upon calls for Tracking details, I could fetch data from a mock hosted database, and use React Router to "change pages" to a new tracking page.
- The statistics page is lacking the function to change dates left and right.

Hope you enjoyed the implementation!
