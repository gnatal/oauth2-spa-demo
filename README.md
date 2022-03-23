This project is a standart Oauth2 implementation (just an SPA)
It's a working in progress

<p>

    This is an auth code default implementation, it uses PKCE to secure that the tokens are 
    valid. This implementation does identity validation using clientSecret, if you use an SPA
    this won't work because SPA's doesn't get clientSecrets (SPA's are insecure by default), but
    you still can use this work to authenticate SPA's because uses PKCE

</p>

<br />
<h1> Features </h1>
<ol>
    <li> Home page</li>
    <li> Login page</li>
    <li> Consent grant page</li>
    <li> Profile page</li>
    <li> Internationalization</li>
</ol>
<p> you must create an .env file to and set the following properties 
    <br /> OAUTH_URL=your_oauth_server_url
</p>

<h2>To do </h2>
<ol>
    <li> [] Home page</li>
    <li> [] Login page</li>
    <li> [] Consent grant page</li>
    <li> [] Profile page</li>
    <li> [x] Internationalization</li>
</ol>

<h2> Demonstration apps</h2>

<ol>
    <li> Oauth server <a href="https://github.com/gnatal/oauth2"> click here! </a> as your authenticator and authorization</li>
    <li> SPA usage <a href="https://github.com/gnatal/oauth2-spa-demo"> click here! </a>(as your main app)</li>
    <li> Back-end <a href="https://github.com/gnatal/Oauth2-data-server"> click here! </a>Using as a data server</li>
    <li> Back-end <a href=""> click here! </a>usage (as a third party app)</li>
</ol>


<h1> License </h1>

MIT License

Copyright (c) 2021 Natal

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.