##Deploy Node app to AWS EB from Github via Semaphore

This is a sample Node app to deploy to AWS Elastic Beanstalk directly from Github.
I could not find a good tutorial, so sharing here.

Deployed app: http://default-environment.ycn9jgnj6p.us-west-2.elasticbeanstalk.com/

If you are looking for tutorial on how to deploy Meteor app fto Digital Ocean with Mup tool and Letsencrypt, check up this repository: https://github.com/tima101/meteor-deploy-letsencrypt

If you are building Adblock Detector, check this repo: https://github.com/tima101/Native-adblock-detector

If you are building Paywall/Membership software, stay tuned, we are in the process of open-sourcing one.

#Setting up sample app on AWS EB
Go to the welcome page of AWS ElasticBeanstalk. At "Select a platform", choose Node and click "Launch now".
Setting up environment and sample app will take 2-3 minutes.
Sample app will be created with pre-defined default settings.
You can click "Create new application" and fine-tune settings manually.
At the end, you will see dashboard of your application:
![screen shot 2017-03-10 at 9 52 56 am](https://cloud.githubusercontent.com/assets/10218864/23806935/83e94c58-0578-11e7-8850-351f34794a6b.png)

Go to the application's URL (something like: Default-Environment.ycn9jgnj6p.us-west-2.elasticbeanstalk.com), confirm that your app is live and well:
![screen shot 2017-03-10 at 10 27 28 am](https://cloud.githubusercontent.com/assets/10218864/23807851/33a23b48-057c-11e7-947d-d3acbd069333.png)

#Giving Semaphore access to Github
Upload your app to Github, no need to upload node_modules, make sure to include package.json. You will be able to specify build commands, such as `npm install`, on Semaphore.
This repo contains a sample app, ready for deploy.

Next step is authorize Semaphore to access your code on Github. 
Follow this simple steps:

>Create new project on Semaphore.

>Where is your repository hosted? Select: Github

>Let Semaphore access: Select: All repos

>You'll be redirected to typical OAuth screen, click "Authorize application"

>Select repository. Select repo for deploy from the list of all repos.

>Select branch. Select branch for deploy from the list of all branches. I deploy from master branch in this example.

>Create organization. Specify name for your organization and click "Create".

In the section "Preparing for deploy", we will prepare project for deploy by specifying build commands and etc in "Project settings".


#Giving Semaphore AWS EB user permission
On AWS dashboard, go to "My Security Credentials", click "Users", click "Add user":
![screen shot 2017-03-10 at 1 56 26 pm](https://cloud.githubusercontent.com/assets/10218864/23814749/8b93fac2-0599-11e7-8e64-9bf26f5566af.png)

>Create new user, click "Users" to bring list of existing users.

>Click on newly created user and go to "Permissions", click "Add permissions", click "Add existing policies directly",
from the list "Policy time" select `ElasticBeanstalkFullAccess`.

> Click on newly created user, go to "Security Credentials", create new Access key ID. You will need this "Access key ID" and "Secret Access Key" later, to give Semaphore permission to your AWS EB server:

![screen shot 2017-03-10 at 2 12 57 pm](https://cloud.githubusercontent.com/assets/10218864/23815228/0df1e022-059c-11e7-8a56-1bfb26cd5c46.png)

In the next two sections, we will prepare Semaphore project for deploy.

#Preparing project on Semaphore for deploy. Part 1

>Go to Semaphore. Select existing project. Click "Add new server".

>Select "AWS Elastic Beanstalk". Then select "Automattic".

>Select branch, select "master" if you plan to deploy from master branch.

>Next, add "Access key ID", "Secret Access" Key and "Region" (for example us-west-2).

>At this point Semaphore talks to AWS. Next, select "Application name", "Environment name" and "S3 Bucket name".

>Finally, give your Semaphore server name and click "Create server".

#Preparing project on Semaphore for deploy. Part 2

>On Semaphore, click "Project settings". Specify build settings and commands as shown below:
![screen shot 2017-03-10 at 2 22 30 pm](https://cloud.githubusercontent.com/assets/10218864/23815458/30e2f9b2-059d-11e7-83ec-dbd13bb4fe7a.png)

>Specify location of package.json file. If file is located at the root folder, just type package.json in the field and click "Save".
![screen shot 2017-03-10 at 2 24 16 pm](https://cloud.githubusercontent.com/assets/10218864/23815477/4bb85f70-059d-11e7-9915-377785b0c017.png)

>In your package.json file, make sure to add "start" attribute and its value:
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  }
```

>Go back to Semaphore project, initiate your Build, if Build is successful, Deploy will be initiated automatically.
Since you've selected "Automatic" while setting up Semaphore server, every successful build will result in Deploy.
