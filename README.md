Steps for Json Server Setup

Step:1 ->  Run the Below Command to install json server on your machine
		npm install -g json-server 
		
		This will generate one db.json file which will be used for CRUD Operations.
		I have attached my db.json file replace your file with mine db.json as my db.json has all 		the data that is used in this application


        Important Notes: 

        db.json file has 3 objects
        1. login-> login data is used for admin login( admin don't have signup option in appp)
        2. signup-> Students signup and signin data is fetched from here
        3. notice- Add,Edit and delete is performed using this object

Step:2 : -> To run the Server use the below command
		   json-server --watch db.json



Steps To Run The Angular App


Step 1: -> Download the project with the GitHub link provided. 
		This will not have node modules but  that’s not an issue as all the package details are 		already available in package.json so it will download all the dependencies for you.

Step:2 -> I have used bootStrap 5 here for all the Styling so kindly check the bootstrap after 		setting up the project. 

		Note: I have not used a single line of css other than bootstrap in the project.

Step:3 -> This project uses angular routing, reactive forms,CRUD operations and Route guard.
		

I have also shared one google Drive link for Demo video of the project,Kindly check that.