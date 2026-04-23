const About = () => {
    const view = `
<div class="about">

  <section class="intro card">
    <img src="tu-foto.jpg" alt="Giovanni Palacios">
    <div>
      <h1>Giovanni Palacios</h1>
      <p>
        Desarrollador web enfocado en la creación de aplicaciones dinámicas.
        Programo desde 2019 y actualmente estoy finalizando mis estudios en
        Sistemas de Información, con interés en resolver problemas reales
        mediante software.
      </p>
    </div>
  </section>

  <section class="card">
    <h2>Educación</h2>
    <ul>
      <li>Licenciatura en Sistemas de Información – UADER (en curso)</li>
      <li>Enfocado en programación, bases de datos y arquitectura de software</li>
    </ul>
  </section>

  <section class="card">
    <h2>Intereses</h2>
    <ul>
      <li>Desarrollo web (Frontend / Backend)</li>
      <li>Aplicaciones interactivas</li>
      <li>Arquitectura y optimización de sistemas</li>
      <li>Ciberseguridad</li>
    </ul>
  </section>

  <section class="card contacto">
    <h2>Contacto</h2>
    <p>Podés encontrarme en:</p>
    <ul>
      <li>Email: [tu email]</li>
      <li><a href="[linkedin]" target="_blank">LinkedIn</a></li>
      <li><a href="[github]" target="_blank">GitHub</a></li>
    </ul>
  </section>

</div>
`;
    return view
};

export default About;
