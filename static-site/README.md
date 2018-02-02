## Static Site
[Deploy to PCF via staticbuildpack](https://docs.cloudfoundry.org/buildpacks/staticfile/)

### Deploy each drill to PWS
- if you do not have the CLI tools,
follow [Installing the cf CLI ](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html)


#### Drill 1:
- in the root of the drill-1 directory create a new file called `Staticfile`
  - this tells cf that you are building a static file

- in the terminal, **from the drill-1 directory**, run `$ cf login`
  - login with your cf credentials
  - API endpoint: <api.run.pivotal.io>
  - if you are a member of multiple orgs, select the org you want to deploy to


- in the terminal, run `cf push APP_NAME -m 64M`, where APP_NAME should be replaced with what you would like to call your app
  - ex: `cf push static_drill1 -m 64M`



#### Drill 2:
- in the terminal, **from the drill-2 directory**, run `$ cf login`
  - login with your cf credentials
  - API endpoint: <api.run.pivotal.io>
  - if you are a member of multiple orgs, select the org you want to deploy to

- in the terminal, run `cf push APP_NAME -m 64M -b staticfile_buildpack`, where APP_NAME should be replaced with what you would like to call your app
  - the -b flag is used to declare the type of buildpack 
  - ex: `cf push static_drill2 -m 64M -b staticfile_buildpack`


#### Drill 3:
  - in progress
