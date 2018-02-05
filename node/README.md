## Node, full stack
[Deploy to PCF via Node.js Buildpack](https://docs.run.pivotal.io/buildpacks/node/index.html)

### Deploy each drill to PWS
- if you do not have the CLI tools,
follow [Installing the cf CLI ](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)


### Drill 1:
- in the terminal, **from the drill-1 directory**, run `$ cf login`
- login with your cf credentials
- API endpoint: <api.run.pivotal.io>
- if you are a member of multiple orgs, select the org you want to deploy to


#### Part 1. Server:  
- in drill-1/server create a new file `.cfignore`
  - in .cfignore write node_modules
  - save

  
- in the terminal, **from the drill-1/server directory**,
run `$ cf push APP_NAME -m 64MB -b nodejs_buildpack`,
where APP_NAME should be replaced with what you would like to call your app
- ex: `cf push node_drill1_server -m 64M -b nodejs_buildpack`
- make note of your deployed URL for part 2


#### Part 2. Client:
- update drill-1/client/main.js
  - replace 'http://localhost:3000' with your deployed server URL in the fetch request


- in the terminal, **from the drill-1/client directory**, run `cf push APP_NAME -m 64M -b staticfile_buildpack`, where APP_NAME should be replaced with what you would like to call your app
  - ex: `cf push node_drill1_client -m 64M -b staticfile_buildpack`



#### Drill 2:
- database, in progress


#### Drill 3:
  - tbd
