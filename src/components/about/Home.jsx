import Footer from "./Footer"

export default function Home(props) {
    return (
        <div className='about'>
                <div className="main-heading">
                    <div className="main-heading-typed">
                        PLAS-5K
                    </div>
                </div>
                <p className="main-subheading">
                    Protein Dataset
                </p>
                <div className="main-subtext">
                Accurate prediction of binding affinities between a small molecule and target proteins still remains to be a major challenge. The use of Artificial Intelligence (AI) models have been proposed as an alternative to traditional physics based scoring functions. Despite many advances in machine learning (ML) models over affinity prediction, they have mainly relied on feature engineering from static 3-Dimensional that often mask the dynamic features of protein-ligand interactions. To this end, we have curated MD-based datasets that provides protein-ligand affinities along with non-covalent interaction components for machine learning applications. Models built over these datasets can help to capture the dynamic binding modes by considering various geometric charactresitcs of the interaction. PLAS-5k comprises of 5000 protein-ligand complexes chosen from PDB database. The dataset consists of binding affinities along with energy components like electrostatic, van der Waals, polar and non-polar solvation energy calculated from molecular dynamics simulations using MMPBSA (Molecular Mechanics Poisson-Boltzmann Surface Area) method. The initial structures of all the 5000 protein ligand complexes are available in PDB format and the csv file containing information about binding affinity. This work is published in Scientific Data (https://doi.org/10.1038/s41597-022-01631-9)
                </div>
                
                <div className="main-navigation">
                        <a href="#Experience">01 - Dataset summary</a>
                        <a href="#Projects">02 - Exploratory analyses</a>
                        <a href="#Skills">03 - Notebooks</a>
                        <a href="#Resources">04 - Resources</a>
                    </div>
                <br />
                <br />
                <br />
            <Footer socialsData={props.socialsData} />
        </div>
    )
}