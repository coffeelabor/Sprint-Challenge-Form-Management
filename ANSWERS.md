# Answers

- [ ] Why are forms used so often in web applications and software?

  They are one of the oldest and most reliable ways to have a user provide data and interact with a website

- [ ] What advantages are there by using a forms library like Formik?

  Formik, like most libraries, streamlines some of the repetitive complex parts of implementing certain features. In this case forms. Formik is helpful in areas like validation, error messages, state management, and nested aspects of forms

- [ ] What is stateful logic?

  Stateful logic is a piece of a component. It uses logic to determine how state will change or be handled withing the component

- [ ] What is a custom hook, and what does it mean to compose hooks together?

  Custom hooks are similar to standard hooks like useState and useEffect in that they use the same naming patters. However, custom hooks can be designed specifically to fit an applications needs by being reusable to handle stateful logic that is unique to an app

- [ ] Describe the process of retriving a token from a server and using that token in subsequent API calls.


    First a user needs to be registered with the server.  If the user is registered, and logins in, the server will send the user a JSON web token to be stored on the users local storage.  The server does this since the server is not usually responsible for keeping track of users after a session has ended.  Servers can easily keep track of hashed tokens and who they were issued to.  Once a token is in a users local storage access can be granted to protected parts of an application by verifying a user against the server.
