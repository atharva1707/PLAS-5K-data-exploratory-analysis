
import Card from "../reuseables/Card"

function Experience(props) {

    const data = []

    return (
        <section
            id="dataset-summary"
            className="dataset-summary"
        >
            <Card
                title="Dataset summary"
                requireHeaders={true}
                resourceList={data}
                asList={true}
                isToggleRequired={true}
            />

            <div className="main-subtext">
                Accurate prediction of binding affinities between a small molecule and target proteins still remains to be a major challenge. The use of Artificial Intelligence (AI) models have been proposed as an alternative to traditional physics based scoring functions. Despite many advances in machine learning (ML) models over affinity prediction, they have mainly relied on feature engineering from static 3-Dimensional that often mask the dynamic features of protein-ligand interactions. To this end, we have curated MD-based datasets that provides protein-ligand affinities along with non-covalent interaction components for machine learning applications. Models built over these datasets can help to capture the dynamic binding modes by considering various geometric charactresitcs of the interaction. PLAS-5k comprises of 5000 protein-ligand complexes chosen from PDB database. The dataset consists of binding affinities along with energy components like electrostatic, van der Waals, polar and non-polar solvation energy calculated from molecular dynamics simulations using MMPBSA (Molecular Mechanics Poisson-Boltzmann Surface Area) method. The initial structures of all the 5000 protein ligand complexes are available in PDB format and the csv file containing information about binding affinity. This work is published in Scientific Data (https://doi.org/10.1038/s41597-022-01631-9)
                <br />
                <br />
                Data columns provided are:

                <h2>Column Descriptions:</h2>

  <p>
    <strong>pdbid:</strong> The unique identifier associated with a protein structure in the Protein Data Bank (PDB).
  </p>

  <p>
    <strong>binding_affinity (kcal/mol):</strong> The strength of binding between a ligand and a protein, measured in kilocalories per mole (kcal/mol).
  </p>

  <p>
    <strong>binding_affinity_sd (kcal/mol):</strong> The standard deviation of the binding affinity values, providing a measure of variability or uncertainty.
  </p>

  <p>
    <strong>electrostatic (kcal/mol):</strong> The electrostatic component of the binding energy, representing interactions between charged particles, measured in kcal/mol.
  </p>

  <p>
    <strong>electrostatic_sd (kcal/mol):</strong> The standard deviation of the electrostatic energy values, indicating the variability or uncertainty in electrostatic interactions.
  </p>

  <p>
    <strong>polar_solvation (kcal/mol):</strong> The solvation energy due to interactions with polar solvents, measured in kcal/mol.
  </p>

  <p>
    <strong>polar_solvation_sd (kcal/mol):</strong> The standard deviation of polar solvation energy values, indicating the variability or uncertainty in polar solvation interactions.
  </p>

  <p>
    <strong>non_polar_solvation (kcal/mol):</strong> The solvation energy due to interactions with non-polar solvents, measured in kcal/mol.
  </p>

  <p>
    <strong>non_polar_solvation_sd (kcal/mol):</strong> The standard deviation of non-polar solvation energy values, indicating the variability or uncertainty in non-polar solvation interactions.
  </p>

  <p>
    <strong>vdW (kcal/mol):</strong> The van der Waals component of the binding energy, representing attractive forces between non-bonded atoms, measured in kcal/mol.
  </p>
            </div>
        </section>
    )
}
export default Experience