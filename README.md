##Deploy Node app to AWS EB from Github via Semaphore

This is a sample Node app to deploy to AWS Elastic Beanstalk directly from Github.

I could not find a good tutorial, so sharing here.
Detailed instructions are coming...

Deployed app: http://default-environment.ycn9jgnj6p.us-west-2.elasticbeanstalk.com/

#Setting up sample app on AWS EB
Go to the welcome page of AWS ElasticBeanstalk. At "Select a platform", choose Node and click "Launch now".
Setting up environment and sample app will take 3 to 5 minutes.
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



#Preparing project on Semaphore for deploy



#Deploying
