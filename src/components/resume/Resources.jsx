import Card from "../reuseables/Card"

function Resources(props) {

    let data = props.resourceData.map((item) => {
        return {
            "cardName" : item.name,
            "cardLink" : item.link,
            "metadataLeft" : null,
            "metadataRight" : null,
            "cardSummary" : item.description
        }
    })

    return (
        <section
            id="Resources"
            className="resources"
        >
            
        </section>
    )
}
export default Resources