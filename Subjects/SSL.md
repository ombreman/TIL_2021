### What is an SSL (Secure Socket Layer)?

It is a standard security technology for establishing an encrypted link between a sever and a client.
It is more widely known than TLS (Transport Layer Security)

More specifically, SSL is a security protocol. Protocols describe how algorithms should be used. in this case, the SSL protocol determines variables of the encryption for both the link and the data being transmitted.

SSL secures millions of ppl's data on the Internet every day, especially during online transactions ro when transmitting confidential information. Internet users have come to associate their online security with the lock icon that comes with ass SSL-secured website, or green address bar that comes with an Extended Validation SSL-secured website. SSL-secured websites also begin with "https" rather than just "http".

### How does the SSL certificate create a secure connection?

WHen a browser attempts to access a website that is secured by SSL, the browser and the web server establish as SSL connection using a process called an "SSL Handshake".

Essentially, three keys are used to set up the SSL connection: the public, private, and session keys. Anything encrypted with the public key can only be decrypted with the private key, and vice versa.
Because encrypting and decrypting with private and public key takes a lot of processing power, they are only used during the SSL Handshake to create a symmetric session key. After the secure connection is made, the session key is used to encrypt all transmitted data.

1. Browser connects to a web server (website) secured with SSL (https). Browser requests that the server idenify itself.
2. Server sends a copy of its SSL Certificate, including the server's public key.
3. Browser checks the certificate root against a list of trusted CAs and that the certificate is unexpired, unrevoked, and that it's common name is valid for the website that it is connecting to. If the browser trusts the certificate, if creates, encrypts, and sends back a symmetric session key using the server's public key.
4. Server decrypts the symmetric session key using its private key and sends back an acknowledgement encrypted with the session key to start the encrypted session
5. Server and browser now encrypt all transmitted data with the session key.
