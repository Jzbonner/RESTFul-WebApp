# RESTFul WebApp
A repository dedicated as a testing environment for use with the MongoDB, ExpressJS, and NodeJS. Should provide a foundation for understanding the intricacies of developing a RESTFul Web Application with JavaScript. 

![Diagram1](https://d32myzxfxyl12w.cloudfront.net/images/ckeditor_assets/pictures/272/content_api_for_restful_web_services.png)

## Overview
A **REST** is an acronym for _Representational State Transfer_. It is an architectural style for _distributed hypermedia systems_. Guiding Principles of REST: 
1. **Client–server** – By separating the user interface concerns from the data storage concerns, we improve the portability of the user interface across multiple platforms and improve scalability by simplifying the server components.
2. **Stateless** – Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
3. **Cacheable** – Cache constraints require that the data within a response to a request be implicitly or explicitly labeled as cacheable or non-cacheable. If a response is cacheable, then a client cache is given the right to reuse that response data for later, equivalent requests.
4. **Uniform interface** – By applying the software engineering principle of generality to the component interface, the overall system architecture is simplified and the visibility of interactions is improved. In order to obtain a uniform interface, multiple architectural constraints are needed to guide the behavior of components. REST is defined by four interface constraints: identification of resources; manipulation of resources through representations; self-descriptive messages; and, hypermedia as the engine of application state.
5. **Layered system** – The layered system style allows an architecture to be composed of hierarchical layers by constraining component behavior such that each component cannot “see” beyond the immediate layer with which they are interacting.
6. **Code on demand** (optional) – REST allows client functionality to be extended by downloading and executing code in the form of applets or scripts. This simplifies clients by reducing the number of features required to be pre-implemented.

A **RESTful API** is an application program interface that uses [HTTP](https://github.com/request/request) request to GET, PUT, POST, and DELETE data. REST is useful in cloud applications. Stateless components can be freely redeployed if something fails, and they can scale to accommodate load changes. That makes REST preferred for web use, but the RESTful model is also helpful in cloud services because binding to a service through an API is a matter of controlling how the URL is decoded

### Environments and Examples
* [Ajax Env](https://github.com/Jzbonner/RESTFul-WebApp/tree/master/AjaxEnv): An implementation of using Ajax request to manipulate and display JSON data 
* [Express Env](https://github.com/Jzbonner/RESTFul-WebApp/tree/master/ExpressEnv): An implementation of ExpressJS that shows the general process behind using the app engine to update and delete data from a server
* [React-Backend](https://github.com/Jzbonner/RESTFul-WebApp/tree/master/react-backend): An example of incorporating the ReactJS frontend framework into a backend engine like ExpressJS instead of the pre-configured templating options like (Jade/Pug and EJS)
* [Expense Manager](https://github.com/Jzbonner/RESTFul-WebApp/tree/master/expense-manager): An example of a full stack application that utilizes the MERN Stack in order to make simple HTTP request to a MongoDB Server. 