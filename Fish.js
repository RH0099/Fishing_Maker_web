function doGet(e) {
  var site1 = e.parameter.site1 || "https://example.com";
  var site2 = e.parameter.site2 || "https://google.com";
  var site3 = e.parameter.site3 || "https://youtube.com";

  return HtmlService.createHtmlOutput(`
    <html>
    <head>
        <title>Smart Link Launcher</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                background: linear-gradient(135deg, #ff416c, #ff4b2b);
                color: white;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            .container {
                background: rgba(0, 0, 0, 0.2);
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
            }
            h1 {
                font-size: 24px;
                margin-bottom: 15px;
            }
            button {
                background: #00c9ff;
                border: none;
                color: white;
                padding: 15px 20px;
                font-size: 18px;
                cursor: pointer;
                border-radius: 5px;
                transition: 0.3s;
            }
            button:hover {
                background: #008cff;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Smart Link Launcher 🚀</h1>
            <p>আপনার ব্রাউজার অটোমেটিক কাজ করছে...</p>
            <button id="autoClickButton" onclick="openWebsites()">Launch Links</button>
        </div>

        <script>
            window.onload = function() {
                document.getElementById("autoClickButton").click();
            };

            function openWebsites() {
                window.open("${site2}", "_blank");
                window.open("${site3}", "_blank");
            }
        </script>
    </body>
    </html>
  `);
}
