# Spark 2 Backend

A content management system based on the Strapi.io framework and hosted on the Google Cloud Platform (App Engine + Cloud Storage).
\
\
![Drag Racing](spark-2-backend-architecture.png)

## Jamstack
This project makes use of a modern architecture design known as Jamstack. Technologies in the stack include JavaScript frameworks, Static Site Generators, Headless CMSs and CDNs. For reference: [jamstack.org](https://jamstack.org/).
\
\
<img src="jamstack.svg" alt="drawing" width="400"/>

## API
The Strapi.io framework delivers content as REST or GraphQL API. For example, below endpoint returns all entries within the article collection:
```
GET https://cms.gylley.com/articles
```

## Admin Panel
The admin panel allows for adding, updating and removing content and can be found at [cms.gylley.com/admin](https://cms.gylley.com/admin).

## Run local
1. Clone the repository
```
git clone https://github.com/allspark-io/spark-2-backend.git && cd spark-2-backend
```
2. Set Algolia environment variables
```
export ALGOLIA_APP_ID="" ALGOLIA_API_KEY=""
```
3. Start application
```
npm run develop
```