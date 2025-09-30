import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import '../style.css';

const ReadMoreServices = () => {
  useEffect(() => {
    ScrollReveal().reveal('.read-more-services .back-button', { origin: 'top', distance: '20px', duration: 1000 });
    ScrollReveal().reveal('.read-more-services .service-item', { origin: 'bottom', interval: 200, duration: 1000, delay: 200 });
  }, []);

  return (
<section className="read-more-services">
  <Link to="/#services" className="btn">← Back</Link>
  <div className="services-grid">

    <div className="service-item">
      <i className='bx bx-code-alt'></i>
      <h2>Web Development</h2>
      <p>
        Web development is at the core of my work. I specialize in creating modern and responsive 
        websites using technologies like React, Django, Python, and MySQL. My focus is on building 
        clean and user friendly interfaces that work seamlessly across devices while maintaining 
        strong back-end systems for reliability.
      </p>
      <br></br>
      <p>
        During my internship at the NUTECH Innovation Center, I worked on full-stack applications 
        where I learned how to handle projects from start to finish. This experience gave me 
        real world exposure to scalable systems and helped me understand how to balance performance 
        with design for better user experiences.
      </p>
      <br></br>
      <p>
        From planning and design to coding and deployment, I enjoy every step of the process. 
        My aim is to turn ideas into practical digital solutions that solve problems and bring 
        value to users. Each project is a chance to learn, improve, and deliver something meaningful.
      </p>
    </div>

    <div className="service-item">
      <i className='bx bx-paint'></i>
      <h2>Digital Design</h2>
      <p>
        Alongside development, I have a passion for digital design and content creation. 
        I use tools like Canva and Adobe Suite to create engaging graphics, layouts, and visuals 
        that help brands stand out online. My designs are simple, creative, and tailored to 
        deliver the right message to the audience.
      </p>
      <br></br>
      <p>
        I see design as a way to connect ideas with people. A well-thought-out design can make 
        a website or a social media campaign more effective by improving how users interact 
        with the content. I enjoy experimenting with colors, typography, and layouts to match 
        the purpose of each project.
      </p>
      <br></br>
      <p>
        Combining design with my technical background allows me to provide complete digital solutions. 
        Whether it’s a website, a presentation, or social media content, I focus on making visuals 
        that are both attractive and functional. Good design leaves a strong impression, and that’s 
        always my goal.
      </p>
    </div>

    <div className="service-item">
      <i className='bx bx-video-recording'></i>
      <h2>Studio Setup</h2>
      <p>
        Beyond coding and design, I have experience setting up studios for content creation. 
        I worked with my brother in his studio, where I helped arrange equipment, lighting, 
        and sound systems to create a professional setup. This hands on experience taught me 
        the importance of details in producing high-quality content.
      </p>
      <br></br>
      <p>
        A good studio setup is more than just placing cameras and lights. It’s about creating 
        an environment where creators can focus on their work without worrying about technical 
        issues. I learned how to make adjustments that improve recording quality and ensure 
        a smooth workflow for content production.
      </p>
      <br></br>
      <p>
        This experience also helped me develop problem solving and teamwork skills outside 
        of pure software development. It showed me how technology supports creativity in 
        different fields, and I enjoy applying what I’ve learned to help others achieve 
        professional results in their creative projects.
      </p>
    </div>

  </div>
</section>

  );
};

export default ReadMoreServices;
