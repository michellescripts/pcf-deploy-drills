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



### Drill 2:

#### Part 1. Server:
- in the **drill-2/server directory**, add a new file called `manifest.yml`
  - in [manifest.yml](https://docs.run.pivotal.io/devguide/deploy-apps/manifest.html) add the following:
  ```
    ---
    applications:
    - name: node_drill2_server
      memory: 64MB
      instances: 1
      buildpack: nodejs_buildpack
  ```
  - save


- in the terminal, **from the drill-2/server directory**,
run `$ cf push`
  - make note of your deployed URL for part 2

#### Part 2. Client:
- in the **drill-2/client directory**, add a new file called `manifest.yml`
  - in [manifest.yml](https://docs.run.pivotal.io/devguide/deploy-apps/manifest.html) add the following:
  ```
    ---
    applications:
    - name: node_drill2_client
      memory: 64MB
      instances: 1
      buildpack: staticfile_buildpack
  ```
  - save


- update drill-2/client/main.js
  - replace 'http://localhost:3000' with your deployed server URL in the fetch request


- in the terminal, **from the drill-2/client directory**, run `cf push`

### Drill 3:
  - database, in progress
#### Part 1. Server:
#### Part 2. Client:
