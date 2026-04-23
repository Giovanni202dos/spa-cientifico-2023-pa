const Header = () => {

const view = `
<header class="Header-main">

  <div class="Header-logo">
    <h1>
      <a href="/">Rick and Mortycio</a>
    </h1>
  </div>

  <nav class="Header-nav">
    <a href="#/about">About</a>
  </nav>

</header>

<section id="section-boton-apariencia">
  <button onclick="cambioAparaiencia()" id="boton-apariencia" class="theme-toggle">
    Dark
  </button>
</section>
`;
    return view;
};

export default Header
