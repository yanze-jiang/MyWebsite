import { Link } from 'react-router-dom'
import mePhoto from '../pic/Me.jpg'
import wuhanPhoto from '../pic/WH.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <h1 className="welcome-title">Welcome to my page!</h1>
        
        <div className="intro-text-wrapper">
          <p className="intro-text">
            I am <strong>JIANG, Yanze (江彦泽)</strong>, and you can also call me <strong>Robert</strong>.
          </p>
        </div>

        <div className="intro-section">
          <div className="intro-left">
            <div className="photo-container">
              <img src={mePhoto} alt="Yanze Jiang" className="photo" />
            </div>
          </div>
          <div className="intro-content">
            <p>
              Currently I am a third year student from <strong className="idadm-bold">IDADM in both CUHK and CUHK-Shenzhen</strong>, concentrating in <strong className="cs-ds-bold">Computer Science and Data Science</strong>. You can see my education background at{' '}
              <Link to="/education" className="education-link">Education</Link>.
            </p>
            <p className="intro-description">
              Through my academic projects and research experience, I have developed hands-on skills in fine-tuning LLMs, implementing RAG systems, and building machine learning models. I recently fine-tuned the Qwen3-4B model with LoRA and PEFT, achieving 79.6% accuracy on professional benchmarks. I have also led the development of a noise monitoring web application and built predictive models for healthcare data.
            </p>
            <p className="intro-description">
              I am currently seeking a Co-op or internship where I can apply my skills in AI, LLM development, and data-driven problem-solving to impactful projects.
            </p>
          </div>
        </div>

        <div className="wuhan-section">
          <div className="wuhan-content">
            <p>
              I am from <strong>Wuhan (武汉)</strong>, the biggest city in central part of China, which is recovering from the trauma of the COVID-19.
            </p>
            <p className="wuhan-intro">
              Wuhan is located at the confluence of the Yangtze and Han rivers, where you can enjoy beautiful riverbanks. I love the food in Wuhan, especially the breakfast (过早), with various delicious food including hot dry noodles (热干面), doupi (豆皮), youtiao (油条). (Too many to be listed here!)
            </p>
            <p className="wuhan-intro">
              You can also see a lot of Western buildings in downtown, which used to be concessions (租界) that witnessed the development of the city in the past century. It could be a very chill journey to walk through them, and see how the city thrived through wars and developed into a modern metropolis.
            </p>
          </div>
          <div className="wuhan-right">
            <div className="photo-container">
              <img src={wuhanPhoto} alt="Wuhan" className="photo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
