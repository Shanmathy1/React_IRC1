// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>FORM</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #403b4a; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #403b4a, #e7e9bb); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #403b4a, #e7e9bb);
;
    }

    .registration-form {
      background:powderblue;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      width: 300px;
    }

    .registration-form h2 {
      text-align: center;
      color: #333;
    }

    .registration-form label {
      display: block;
      margin: 10px 0 5px;
      color: #555;
    }

    .registration-form input {
      width: 100%;
      padding: 8px;
      margin-bottom: 10px;
      box-sizing: border-box;
    }

    .registration-form button {
      background-color:d;
      color:darkslategray;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      width: 100%;
    }


    .registration-form button:hover {
      background-color:darkslategray;
    }
  </style>
</head>

<body>

  <div class="registration-form">
    <h2>Registration Form</h2>
    <form onsubmit="register()">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required/>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required/>

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required/>
      <label for="Confirm password">Confirm Password:</label>
      <input type ="password" id="Confirm password" name="password" required/>

      <input type="submit" value="Submit"/>
    </form>
  </div>
  

</body>
<script>
    function register()
    {
        let x = document.getElementById("password").value;
        let y = document.getElementById("Confirm password").value;
        // alert("registered !"+x);
        if(x!=y)
        {
          alert("Password do not match"+x);
        }
        else
        alert("WELL DONE ! LOGIN SUCCESSFUL");
    }
    function show()
    {
        document.getElement("user").innerHTML="hello";
        }
    
        </script>

</html>

    
  );
}

export default App;
