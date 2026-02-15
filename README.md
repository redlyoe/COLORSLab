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

Clone the entire git repository into your remote machine's default web root
directory. For Apache web servers, this is by default located in:

```bash
/var/www/html
```

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
