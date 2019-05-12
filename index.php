<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <!--link to Font Awesome Icons-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="icon" href="resources/media/imgs/favicon.ico" type="image/x-icon"> <!--FIX THIS-->
    <link rel="stylesheet" href="resources/reset.css" type="text/css">
    <link rel="stylesheet" href="resources/styles.css" type="text/css">
    <title>Farnworth.com</title>
  </head>
  <body>
    <nav>
      <img id="logo" src="resources/media/imgs/logotest.png">
      <ul>
        <li><a class="navit" href="#skills">About</a></li>
        <li><a class="navit" href="#projects">Portfolio</a></li>
        <li><a class="navit" href="#contact">Contact</a></li>
      </ul>
    </nav>
    <section id="intro">
      <h1>
        <span id="intro1">Simple.</span>
        <span id="intro2">Intricate.</span>
        <div id="intro3"><span class="yellow">Unique.</span></div></h1>
      <div id="fullscreen-wrap">
        <video autoplay muted loop id="vid">
          <source src="resources/media/vid/network.mp4" type="video/mp4">
        </video>
      </div>
    </section>

    <section id="skills">
      <div id="self">
        <h1>About</h1>
        <img src="resources/media/imgs/wig.jpeg" alt="picture of me">
        <div id="txtbox">
          <p>
            Hello I'm Reece, an aspiring Front end developer.<br>
            As you will see from work I demonstrate an <span class="yellow">extensive</span> knowledge of html and css however I'd prefer to be
            judged by what I strive to create,
            an ever growing skill set <span class="yellow">engineered</span> through personal and professional challenges, fueled by my
            <span class="yellow">boundless</span> passion for web development.<br>
            And I can accuratly say I have a 100% satisfaction rate.<br> <span id="small">As I've currently only worked for myself.</span>
          </p>
      </div>
      </div>
      <div id="lang">
        <ul id="bar">
          <li class="bars"><span class="bartxt">HTML /5</span></li>
          <li class="bars"><span class="bartxt">CSS /3</span></li>
          <li class="bars"><span class="bartxt">Git</span></li>
          <li class="bars"><span class="bartxt">Responsive design</span></li>
          <li class="bars"><span class="bartxt">Unicycling</span></li>
        </ul>
      </div>
    </section>

    <section id="projects">
      <h1>Portfolio</h1>
      <div id="container">
        <a href="https://dokgreen.github.io/Capstone/" target="_blank">
          <div class="probox">
            <div id="cap" class="zoom"></div>
          </div>
        </a>
        <a href="https://dokgreen.github.io/TortoiseshellOptics/" target="_blank">
          <div class="probox">
            <div id="optics" class="zoom"></div>
          </div>
        </a>
        <a href="https://dokgreen.github.io/teacozy/" target="_blank">
          <div class="probox">
            <div id="tea" class="zoom"></div>
          </div>
        </a>
        <a href="https://dokgreen.github.io/mytimes/" target="_blank">
          <div class="probox">
            <div id="times" class="zoom"></div>
          </div>
        </a>
      </div>
    </section>

    <section id="contact">
      <form action="contact.php" method="post">
        <h1>Let's have a chat</h1>
        <div id="field1">
          <input type="text" id="name" name="name" placeholder="Name">
          <input type="email" id="email" name="email" placeholder="Email address">
      </div>
        <textarea id="subject" name="subject" rows="8" cols="80" placeholder="Message"></textarea>
        <input type="submit" id="btn" value="Send">
      </form>
    </section>

    <footer>
      <p>Copyright &copy 2019 Farnworth.com </p>
      <ul>
        <li>
          <a class="fab fa-github fa-2x" href="https://github.com/DokGreen" target="_blank"></a>
        </li>
        <li>
          <a class="fab fa-codepen fa-2x yellow" href="https://codepen.io/DokGreen/" target="_blank"></a>
        </li>
        <li>
          <a class="fab fa-linkedin-in fa-2x" href="https://www.linkedin.com/in/reece-farnworth-b3994897/" target="_blank"></a>
        </li>
      </ul>
    </footer
  </body>
</html>
