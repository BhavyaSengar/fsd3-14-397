# HTTP Module

HTTP - HyperText Transfer Protocol

HTML - HyperText Markup Language

CSS - Cascading Style Sheets

## Status Codes

200->OK
201->Created
202->Accepted
204->No Content
400->Bad Request
401->Unauthorized
403->Forbidden
404->Not Found
500->Internal Server Error
503->Service unavailable

# Content Type

Content-Type in JavaScript is an HTTP header that tells the browser or server what type of data is being sent.

# common Content Types

| Content-Type             | Used for         |
| ------------------------ | ---------------- |
| text/html              | HTML pages       |
| text/plain             | Plain text       |
| application/json       | JSON data        |
| text/css               | CSS files        |
| application/javascript | JavaScript files |
| image/jpeg             | JPG images       |
| image/png              | PNG images       |
| image/webp             | WebP images      |
| application/pdf        | PDF files        |


## server can send data
1->html content
2->html files
3->json data
4->plain text
5->css
6->jss
7->file

##Server can set Header to send data
- res.writeHeader()
- res.setHeader

## Server can set status cose
- res.statusCode()
- res.writeHeader()

##requestg methods
- get
- post
- put/patch
- delete
