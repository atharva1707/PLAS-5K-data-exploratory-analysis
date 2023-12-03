import { useMediaQuery } from 'react-responsive';

import CardHeading from '../reuseables/CardHeading';

function Skills(props) {

  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <section
        id='Skills'
        className="skills"
    >
        <CardHeading heading="Skills" />
        {
        props.skillData.map((item) => {
            return (
                <div
                    key={item.field}
                    className="skill-category"
                >
                    <div className="skill-name">
                        {item.field}
                    </div>
                    <div className="skill-category-container">
                        {item.tech.map((t) => {
                            return (
                                <a
                                    key={t.name} 
                                    target='_blank'
                                    rel='noreferrer'
                                    href={t.link} 
                                    className="skill-link"
                                >
                                    <div className="skill-category-item">
                                        <img
                                            src={t.img}
                                            alt={t.name} className="skill-category-img"
                                        />
                                            {isMobile ? (<></>) : (
                                                <div className="skill-category-name">
                                                    {t.name}
                                                </div>
                                            )}
                                    </div>
                                </a>
                            )
                        })}
                </div>
          </div>
        )
      })
    }
    </section>
  )
}
export default Skills
