### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  JSON WEB TOKEN store data for transmitting and validation


- What is the signature portion of the JWT?  What does it do?
  used to verify token hasnt been changed 

- If a JWT is intercepted, can the attacker see what's inside the payload?
  yes

- How can you implement authentication with a JWT?  Describe how it works at a high level.
  store non sensitive infromation in data payload, Ex. username, isAdmin, sign it with jwt library and send it to user. retreive when needed for auth
- Compare and contrast unit, integration and end-to-end tests.

- What is a mock? What are some things you would mock?
  reating a fake version of a a function used to test. mocking a random number.

- What is continuous integration?
   the practice of automating the integration of code changes from multiple contributors into a single software project

- What is an environment variable and what are they used for?
   An environment variable is a variable whose value is set outside the program

- What is TDD? What are some benefits and drawbacks?
  writing test first and modify code to pass

- What is the value of using JSONSchema for validation?
  ensures data fits the format expected

- What are some ways to decide which code to test?
  functions, routes, end to end testing

- What does `RETURNING` do in SQL? When would you use it?
  allows you to select which data is returned after the SQL query

- What are some differences between Web Sockets and HTTP?
  web socket is real time continously being sent back and forth between server and client. Http stateless
  
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  I prefer Flask, syntax is more simple and easy to use. 