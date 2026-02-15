# COLORS Lab Assignment 1 Version Control

## Description
### 1. What is COLORS?
The COLORS lab is a web app designed to familiarize UCF students with the LAMP
(Linux, Apache, MySQL, PHP) stack for a simple CRUD application.

This involves:
1. Creating a database and inserting test data
2. Creating APIs to communicate with backend
3. Getting involved with the inner workings of frontend

This application tracks logins and information related to accounts, and supports
Create, Read, Update, and Delete (CRUD) operations for colors in user accounts.

### 2. How do I set this up?

###### Creating directories
Inside of ```/var/www/html```, create directories LAMPAPI, css, and js

###### Adding COLORS Lab APIs
Place all files in the remote repository directory 
```https://github.com/redlyoe/COLORSLab/tree/main/api```
into ```/var/www/html/LAMPAPI```

###### Handling visuals and client side logic
Of the files inside of ```https://github.com/redlyoe/COLORSLab/tree/main/public```, place:
- html files inside of ```/var/www/html/```
- js files inside of ```/var/www/html/js```
- css files inside of ```/var/www/html/css```

###### Finalizing APIs
For each of the .php files in the LAMPAPI directory, change the parameters of
```php
$conn = new mysqli("localhost", "MYSQLUSERNAME", "MYSQLPASSWORD", "DBNAME");
```
- MYSQLUSERNAME -> Your MySQL username
- MYSQLPASSWORD -> Your MySQL password
- DBNAME -> The name of the database to be queried.
to the proper mysql user credentials of your COLORS lab database

Refresh the page with ctrl + shift + r or clear browser cache to ensure changes are visible
on your browser!

### 3. How to run and access this application

Users may access the application via a domain name,

An example:
```
http://www.example.com/ -> 
```
pointing to
```
123.123.1.12
```

This typically purchased from a domain name service provider such as cloudflare. 
In the domain name configuration, set the domain to point to your remote machine's IP.
By default, Apache will direct the user to an initial web page.

```bash
var/www/html/index.html
```

### 4. Assumptions, limitations, and AI usage disclosure

###### Assumptions
This LAMP stack project assumes users are familiar with:
- linux kernel operating systems
- file structures in linux
- bash commands
- ssh, git, and github commands
- client server interactions

###### Limitations
This application does not cover the countless intricacies of web development, such as accessibility
requirements, ui ergonomics, response time requirements and more.

###### AI Disclosure
Tools: ChatGPT-5

Scope: Understanding of git and github commands and conventions.

Use: Used AI to aid in reversing commits, branch hygiene, and understand the purpose of certain files
found typically in git repositories.
