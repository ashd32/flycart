# flycart

Comments are not permitted in JSON.


config.json Comments:

MYSQL DEFAULT:
"port": 3306,

REQUIRED IN ORDER TO WORK ON HEROKU WITH JAWSDB:
	"production": {
		"use_env_variable": "JAWSDB_URL",
	  "dialect": "mysql"
	}