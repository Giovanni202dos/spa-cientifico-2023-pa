const About = () => {
    const view = `
        <div class="about">
            <section class="intro">
                <img src="tu-foto.jpg" alt="[img-giovanni]">
                <p>Hola, soy Giovanni, un estudiante de licenciatura en Sistemas de Información apasionado por la tecnología y la programación. Estoy en busca de conocimientos y experiencias que me ayuden a crecer en el mundo de la informática.</p>
            </section>

            <section class="educacion">
                <h2>Educación</h2>
                <ul>
                    <li>Estudiante de Licenciatura en Sistemas de Información en Facultad de Ciencia y Tecnologias Sede Concepciòn del Uruguay</li>
                    <li>Cursando materias relacionadas con programación, bases de datos, seguridad informática y más.</li>
                </ul>
            </section>

            <section class="intereses">
                <h2>Intereses</h2>
                <ul>
                    <li>Desarrollo web y diseño de interfaces de usuario.</li>
                    <li>Aplicaciones móviles y desarrollo de software.</li>
                    <li>Análisis de datos y big data.</li>
                    <li>Seguridad informática y ciberseguridad.</li>
                </ul>
            </section>

            <section class="contacto">
                <h2>Contacto</h2>
                <p>Si deseas ponerse en contacto conmigo, puedes hacerlo a través de los siguientes medios:</p>
                <ul>
                    <li>Email: [----]</li>
                    <li>LinkedIn: <a href="[Enlace a tu perfil de LinkedIn]" target="_blank">[Tu Perfil de LinkedIn]</a></li>
                    <li>GitHub: <a href="[Enlace a tu perfil de GitHub]" target="_blank">[Tu Perfil de GitHub]</a></li>
                </ul>
            </section>
         </div>   
    `
    return view
};

export default About;