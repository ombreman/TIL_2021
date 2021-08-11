## What I learned Today
---
What does HTTP Header have and consist of?
---
1. General Header
 - date or time
 - not related to main content
 - i.e. Date:Tue, 17 Nov 2021 14:12:53 GMT
---
2. Request / Response Header
2.1 Reqeust Header
 - contains information of requested URL, method(GET, POST, PUT, DELETE...), browser infomation, et cetera
 - i.e. User-Agent:"Mozilla / 5.0 (Windows NT 10.0: WOW64; rv : 41.0) Gecko / 20100101 Firefox / 41.0"
---
2.2 Response Header
 - contains information such as the encoding used in the content, the server software that is used on the server machine to generate the response and other information
 - i.e. Server:nginx 
---
3. Entity Header
 - Contains information about the actual message or the HTTP body that is being sent
 - i.e. Content-Length:4959