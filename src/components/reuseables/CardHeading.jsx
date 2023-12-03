export default function CardHeading(props) {
    return (
        <div className="card-heading">
            <h1 className="card-heading-title">{props.heading}</h1>
            <div className="card-heading-divider"></div>
        </div>
    )
}