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
            <Card
                title="Resources"
                requireHeaders={false}
                resourceList={data}
                asList={false}
                isToggleRequired={false}
            />
        </section>
    )
}
export default Resources