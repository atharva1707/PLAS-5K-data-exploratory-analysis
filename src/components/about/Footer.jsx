import me from '../../images/me.png';
import resume from '../../resume/Saumya Bhatt Resume.pdf'
import doc from '../../images/icons/file.png'

export default function Footer(props) {

    return (
        <div 
            className="main-footer-links"
        >
            {/* <img 
                src={me} 
                alt="Saumya Bhatt" 
                className='main-footer-img' 
            /> */}
            {
                props.socialsData.map((item) => {
                    return (
                        <div 
                            key={item.name}
                            className="main-footer-item"
                        >
                            <img 
                                src={item.icon} 
                                alt={item.name} 
                                className="social-img"
                            />
                            <a 
                                href={item.link}
                                rel='noreferrer'
                                target='_blank'>
                                {item.name}
                            </a>
                        </div>
                    )
                })
            }
            <div className="main-footer-item">
                <img src={doc} alt="" className="social-img" />
                <a 
                    href={resume}
                    download="Saumya Bhatt Resume"
                    target='_blank'
                    rel="noreferrer"
                    className='"main-footer-item'
                >
                    Download Resume
                </a>
            </div>
        </div>
    )
}
