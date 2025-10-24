This project is a straightforward static website. It doesn't have a package.json file or any dependencies that need to be installed with npm. This means you don't need to go through the npm init process you mentioned.

Here are the step-by-step instructions to get the project running locally for debugging:

First, you'll need to have all the project files on your local machine. Make sure you have the following files and folders in a single directory.

Next rename or re-copy .env.example Or env.js.example and configure(Depends on server environnement you using and your project configuration).

To view the website and debug it, you need to serve the files using a local web server. The easiest way to do this is by using Python's built-in HTTP server.

Open your terminal or command prompt.
Navigate to the directory where you saved the project files. You can do this using the cd command. For example:
cd path/to/your/project



Start the web server. If you have Python 3 installed, run the following command:
python -m http.server



If you have Python 2, use this command instead:
python -m SimpleHTTPServer



After running the command, you should see a message in your terminal like Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ....

Now you can access your project in your web browser:

Open your web browser (like Chrome, Firefox, or Edge).
Go to the following address: http://localhost:8000
Your browser will now load the index.html file, and you can use the browser's developer tools (usually opened by pressing F12 or Ctrl+Shift+I) to inspect the HTML, debug the JavaScript, and see network requests.