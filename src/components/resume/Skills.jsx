import { useMediaQuery } from 'react-responsive';
import { IpynbRenderer } from "react-ipynb-renderer";

// Jupyter theme
import "react-ipynb-renderer/dist/styles/monokai.css";

import CardHeading from '../reuseables/CardHeading';

import ipynb from "../error_analysis_protein.ipynb";


export const Skills = () => {
    return (
      <IpynbRenderer
        ipynb={ipynb}
      />
    );
  };
export default Skills
