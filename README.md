### Authentication system using MERN stack (MongoDB, Express, React, Node)

#### Instructions

cd into parent folder and create a .env with following parameters and fill their values

- PORT=5000
- MONGO_URI=
- JWT_SECRET=stringofyourchoice
- JWT_EXPIRE=10min
- EMAIL_SERVICE=SendinBlue
- EMAIL_USERNAME=
- EMAIL_PASSWORD=
- EMAIL_FROM=

### Create free email service account

create account on SendinBlue email service and not down email (EMAIL_USERNAME) and web api key (EMAIL_PASSWORD) and replace in the .env file

### Mongo URI format

MONGO_URI=mongodb+srv://userid:password@clustername.clusterid.mongodb.net/dbname

### To run the project

cd into parent folder and run:

1. npm install (all dependencies will be installed from package.json)
2. npm start
3. open localhost:5000 to verify server running on default root
