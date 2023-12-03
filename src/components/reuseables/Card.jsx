
import ToggleButton from "./ToggleButton"
import CardHeading from "./CardHeading"
import external from '../../images/icons/external_link.svg'

export default function Card(props) {

    return (
        <div className="card-container">
            <CardHeading heading={props.title} />
            <div className="card">
                {props.resourceList.map((item) => {
                    return (
                        <div className="card-item" key={item.cardName}>
                            {
                                props.requireHeaders ? (
                                    <div className="card-metadata">
                                        <div>{item.metadataLeft}</div>
                                        <div>{item.metadataRight}</div>
                                    </div>
                                ) : (<></>)
                            }
                            <a 
                                rel='noreferrer'
                                target="_blank"
                                href={item.cardLink} 
                                className="card-item-title"
                            >
                                {item.cardName}
                                <img src={external} alt="External Link" className="external-icon" />
                            </a>
                            <div className="card-summary">
                                {item.cardSummary}
                            </div>
                            {
                                props.isToggleRequired ? (
                                    <ToggleButton
                                        asList={props.asList}
                                        data={item.toggleData}
                                    />
                                ) : (<></>)
                            }
                        </div>
                    )
                })}
            </div>
        </div>
    )
}