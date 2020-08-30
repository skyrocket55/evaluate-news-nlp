# Project Instructions

This repo is your starter code for the project. It is the same as the starter code we began with in lesson 2. Install and configure Webpack just as we did in the course. Feel free to refer to the course repo as you build this one, and remember to make frequent commits and to create and merge branches as necessary!

The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

On top of that, I want to introduce you to the topic of Natural Language Processing. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech. Systems like Alexa, Google Assistant, and many voice interaction programs are well known to us, but understanding human speech is an incredibly difficult task and requires a lot of resources to achieve. Full disclosure, this is the Wikipedia definition, but I found it to be a clear one:

> Natural language processing (NLP) is a subfield of computer science, information engineering, and artificial intelligence
concerned with the interactions between computers and human (natural) languages, in particular how to program computers to
process and analyze large amounts of natural language data.

You could spend years and get a masters degree focusing on the details of creating NLP systems and algorithms. Typically, NLP programs require far more resources than individuals have access to, but a fairly new API called Aylien has put a public facing API in front of their NLP system. We will use it in this project to determine various attributes of an article or blog post.

## Run project in development and production mode
` $ npm run build-dev` and ` $ npm run build-prod`
` $ npm run start`

Development will run at port 8081. Server will run at port 8000.

## Config Files
The project has a `package.json` file that has all the required packages.  Webpack config files for dev and production are `webpack.config.dev.js` and `webpack.config.prod.js`.

## API
The sentiment analysis API used is MeaningCloud. 

## Sample Article Text Input for Sentiment Analysis
In Signh's view, the Bitcoin market is largely driven by traders who follow technical indicators, which is why unforeseen events where new buyers enter the market have had such a large impact on the cryptocurrency's past price movements. Singh pointed to last year's surprise announcement from Facebook about their Libra project as an example of this phenomenon.

This year, again, things like China, Russia, or India could legalize Bitcoin, added Singh. Some new companies competitive to Facebook could get involved. The American government could do something. Something unforeseen that could happen will really move it faster.

Singh also pointed out that fundamental building blocks for a stronger Bitcoin ecosystem are already here through developments like the launch of Fidelity's crypto services and Square's hiring engineers to focus on Bitcoin. However, he reiterated that it will be the unforeseen events that trigger big Bitcoin price moves in 2020.

## Unit Testing
Run jest unit testing by executing `npm run test`.