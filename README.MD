# dependencies on we download the following NPM:

![Alt text](/img/dependencies.png "Git checkbox")

- "express": "4.17.2" - version
  Express.js is an open source library based on MVC, created for Node.js. Express is created under the MIT license, and is maintained by the community.
  Express is considered part of the MEAN software collection, as part of the server side,And with it you can create a server and send requests

- "mongoose": "6.1.7" - version
  Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment. Mongoose supports both promises and repeat engagements.

- "fs-extra": "10.0.0" - version
  fs-extra adds file system methods that aren't included in the native fs module and adds promise support to the fs methods. It also uses graceful-fs to prevent EMFILE errors. It should be a drop in replacement for fs.

# devDependencies Downloading the developers

![Alt text](/img/devDependencies.png "Git checkbox")

- "nodemon": "2.0.15" - version
  nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
  nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.

# To run the server we will use

- ![Alt text](/img/scripts.png "Git checkbox")

# All requests and orders of the server

**'/creatingStudent'**
![Alt text](/img/addStudent.png "Git checkbox")

- here you can see how I get the JSON of all students

**'/students/:name'**
![Alt text](/img/findStundentName.png "Git checkbox")

- here you can see how I get the JSON name of the student

**'/students'**
![Alt text](/img/allStudentsJSON.png "Git checkbox")
![Alt text](/img/allUserInPOST.png "Git checkbox")

-here you can see how I get the JSON of all students

**'/grades'**
![Alt text](/img/gradeStundet.png "Git checkbox")

-here you can see how I get the JSON of the grades

**'/studentDel/:name'**
![Alt text](/img/DeletePOSTMAN.png "Git checkbox")

-Delete Student
