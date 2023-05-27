/** @format */

import React from "react";

const Blog = () => {
  return (
    <div className="my-10 md:mx-10 mx-6 space-y-5 text-black">
      <div className="p-4 rounded-md shadow-2xl border-purple-500 border bg-purple-300 shadow-purple-600">
        <h2 className="text-2xl text-center font-bold">
          What is an access token and refresh token?
        </h2>
        <p className="p-4">
          <span className="text-primary font-bold">Access Token : </span>
          Access Token: An access token is a credential that is used to
          authenticate and authorize a user or application when making API
          requests. It is typically short-lived and has an expiration time,
          after which it becomes invalid. Access tokens are commonly used in
          stateless authentication systems like OAuth 2.0 and JSON Web Tokens
          (JWT). When a user logs in or authenticates, an access token is issued
          to them. The access token is sent with each API request as an
          authorization header or as a parameter in the request. The server
          validates the access token to ensure that the user has the necessary
          permissions to access the requested resource.
        </p>
        <p className="p-4">
          <span className="text-primary font-bold">Refresh Token : </span>A
          refresh token is a long-lived credential that is used to obtain a new
          access token. Unlike access tokens, refresh tokens have a longer
          expiration time and can be revoked by the server. When an access token
          expires, the client can use the refresh token to request a new access
          token without requiring the user to log in again. The refresh token is
          sent to a token endpoint or authentication server, and in exchange, a
          new access token is issued. This process is often referred to as token
          refresh or token renewal.
        </p>
      </div>
      <div className="p-4 rounded-md shadow-2xl border-purple-500 border bg-purple-300 shadow-purple-600">
        <h2 className="text-2xl text-center font-bold">
          Compare SQL and NoSQL databases?
        </h2>
        <p className="p-4">
          <span className="text-primary font-bold">SQL Database : </span>
          Use structured data models and enforce a predefined schema. Data is
          organized into tables with rows and columns, allowing for
          relationships between tables through keys. Follow the ACID (Atomicity,
          Consistency, Isolation, Durability) principles, which ensure data
          integrity and reliability. Use SQL as a standard query language for
          data manipulation and retrieval. Suitable for complex, transactional
          applications where data consistency and strong relationships are
          crucial, such as financial systems or e-commerce platforms. Examples:
          MySQL, PostgreSQL, Oracle, SQL Server.
        </p>
        <p className="p-4">
          <span className="text-primary font-bold">NoSQL Database : </span>A Use
          flexible, schema-less data models that can accommodate unstructured,
          semi-structured, or changing data formats. Data is stored in various
          formats like key-value pairs, documents, column families, or graphs.
          Do not enforce strict relationships or join operations between data
          elements. Provide high scalability, availability, and performance by
          distributing data across multiple nodes or clusters. Offer eventual
          consistency and focus on high-speed data retrieval rather than strict
          consistency.
        </p>
      </div>
      <div className="p-4 rounded-md shadow-2xl border-purple-500 border bg-purple-300 shadow-purple-600">
        <h2 className="text-2xl text-center font-bold">
          What is express js? What is Nest JS?
        </h2>
        <p className="p-4">
          <span className="text-primary font-bold">ExpressJS : </span>
          Minimalistic and flexible web application framework for Node.js.
          Handles HTTP requests, defines routes, and manages middleware and easy to use. Extensive ecosystem of
          middleware and plugins. Popular choice for building web applications
          and APIs in Node.js.
        </p>
        <p className="p-4">
          <span className="text-primary font-bold">NestJS : </span>A Use
          Progressive Node.js framework for scalable server-side applications.
          Built on top of Express.js, leveraging its features. Focuses on
          modularity, reusability, and testability. Utilizes TypeScript and
          object-oriented programming. Provides features like dependency
          injection, decorators, and modules. Suitable for building robust and
          maintainable applications and APIs.
        </p>
      </div>
      <div className="p-4 rounded-md shadow-2xl border-purple-500 border bg-purple-300 shadow-purple-600">
        <h2 className="text-2xl text-center font-bold">
          What is MongoDB aggregate and how does it work?
        </h2>
        <p className="p-4">
          <span className="text-primary font-bold">MongoDB aggregate : </span>
          In MongoDB, the aggregate function performs advanced data aggregation
          operations on collections. It takes an array of stages as input, where
          each stage represents an operation to be applied to the data. The
          function processes the data through the stages sequentially, allowing
          you to reshape, filter, sort, and calculate aggregate values. You can
          chain multiple stages together to create complex data processing
          pipelines. The aggregate function is powerful for performing advanced
          data transformations and analysis in MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blog;
