import Card from "../reuseables/Card"
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';
import React, { useState } from 'react';
import histogram1 from './../../images/histogram1.png';
import histogram2 from './../../images/histogram2.png';
import histogram3 from './../../images/histogram3.png';
import histogram4 from './../../images/histogram4.png';
import histogram5 from './../../images/histogram5.png';
import histogram6 from './../../images/histogram6.png';
import histogram7 from './../../images/histogram7.png';
import histogram8 from './../../images/histogram8.png';
import scatter1 from './../../images/scatter1.png';
import scatter2 from './../../images/scatter2.png';
import scatter3 from './../../images/scatter3.png';
import scatter4 from './../../images/scatter4.png';
import scatter5 from './../../images/scatter5.png';
import scatter6 from './../../images/scatter6.png';

export default function Projects(props) {

  const [currentHistogram, setCurrentHistogram] = useState(0);

  const histograms = [
    histogram1,
    histogram2,
    histogram3,
    histogram4,
    histogram5,
    histogram6,
    histogram7,
    histogram8
    
  ];

  const scatters = [
    scatter1,
    scatter2,
    scatter3,
    scatter4,
    scatter5,
    scatter6
  ];

  const errors = [

  ];

  const nextHistogram = () => {
    setCurrentHistogram((prev) => (prev + 1) % histograms.length);
  };

  const prevHistogram = () => {
    setCurrentHistogram((prev) => (prev - 1 + histograms.length) % histograms.length);
  };

  const [currentScatter, setCurrentScatter] = useState(0);

  const nextScatter = () => {
    setCurrentScatter((prev) => (prev + 1) % scatters.length);
  };

  const prevScatter = () => {
    setCurrentScatter((prev) => (prev - 1 + scatters.length) % scatters.length);
  };


  const [currentError, setCurrentError] = useState(0);

  const nextError = () => {
    setCurrentError((prev) => (prev + 1) % errors.length);
  };

  const prevError = () => {
    setCurrentError((prev) => (prev - 1 + errors.length) % errors.length);
  };



  let data = []

  return (
    <section
      id="Projects"
      className="projects"
    >
      <Card
        title="Data Exploratory Analysis"
        requireHeaders={true}
        resourceList={data}
        asList={false}
        isToggleRequired={false}
      />


      <div style={{ display: 'flex', height: '70vh' }}>
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
            <img style={{ marginTop: '80px', width: '100%', height: 'auto', transition: 'transform 0.5s ease-in-out' }} src={histograms[currentHistogram]} alt={`Slide ${currentHistogram + 1}`} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={prevHistogram} disabled={currentHistogram === 0}>
              <NavigateBefore />
            </button>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={nextHistogram} disabled={currentHistogram === histograms.length - 1}>
              <NavigateNext />
            </button>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 style={{ marginBottom: '20px', color: '#ffffff' }}>Histograms</h1>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
            Histograms are crucial for data analysis. They provide a visual representation of the distribution of a dataset, helping analysts and researchers understand the underlying patterns and characteristics of the data.
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Data Distribution Visualization:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms visually represent the distribution of a dataset, aiding in understanding patterns and characteristics.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Identifying Central Tendencies:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Central tendencies like mean, median, and mode can be identified from the shape of the histogram, providing insights into the distribution.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Outlier Detection:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1', color: '#555' }}>
                Histograms make it easy to identify outliers, which may indicate errors or interesting phenomena in the dataset.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Understanding Data Spread:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms assist in assessing the spread or dispersion of the data, providing insights into variability and range.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Binning for Grouping Data:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms use bins to group data points into intervals, allowing analysts to highlight specific patterns or trends by adjusting bin widths.
              </p>
            </li>
          </ul>
        </div>

      </div>





      <div style={{ display: 'flex', height: '80vh' }}>
        
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 style={{ marginBottom: '20px', color: '#ffffff' }}>Scatterplots</h1>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
          Scatter plots are useful for visualizing the relationship between two continuous variables, revealing patterns, trends, and potential correlations in the data.          </p>

          <ul style={{ paddingTop: '50px',listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Relation between Binding affinity, polar solvation and vanderwall:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                These three can be seen to be highly correlated , as each increases with an increase in the others
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Relation between Electrostatic, non-polar solvation:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                These two can be seen to be negatively correlated, as one decreases with an increase in other
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Relation between entity count and non polar solvation and electrostatic</h4>
              <p style={{ fontSize: '14px', lineHeight: '1', color: '#555' }}>
                With an increase in entity count, the non polar solvation and electrostatic energy decreases
              </p>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
            <img style={{ marginTop: '60px', width: '100%', height: 'auto', transition: 'transform 0.5s ease-in-out' }} src={scatters[currentScatter]} alt={`Slide ${currentScatter + 1}`} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={prevScatter} disabled={currentScatter === 0}>
              <NavigateBefore />
            </button>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={nextScatter} disabled={currentScatter === scatters.length - 1}>
              <NavigateNext />
            </button>
          </div>
        </div>

      </div>



      <div style={{ display: 'flex', height: '70vh' }}>
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
            <img style={{ marginTop: '80px', width: '100%', height: 'auto', transition: 'transform 0.5s ease-in-out' }} src={errors[currentError]} alt={`Slide ${currentError + 1}`} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={prevError} disabled={currentError === 0}>
              <NavigateBefore />
            </button>
            <button style={{ padding: '8px 16px', cursor: 'pointer', backgroundColor: 'transparent', border: '0', color: 'white' }} onClick={nextError} disabled={currentError === errors.length - 1}>
              <NavigateNext />
            </button>
          </div>
        </div>
        <div style={{ flex: 1, padding: '20px', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1 style={{ marginBottom: '20px', color: '#ffffff' }}>Histograms</h1>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#666' }}>
            Histograms are crucial for data analysis. They provide a visual representation of the distribution of a dataset, helping analysts and researchers understand the underlying patterns and characteristics of the data.
          </p>

          <ul style={{ listStyleType: 'none', padding: 0, marginTop: '10px' }}>
            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Data Distribution Visualization:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms visually represent the distribution of a dataset, aiding in understanding patterns and characteristics.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Identifying Central Tendencies:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Central tendencies like mean, median, and mode can be identified from the shape of the histogram, providing insights into the distribution.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Outlier Detection:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1', color: '#555' }}>
                Histograms make it easy to identify outliers, which may indicate errors or interesting phenomena in the dataset.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Understanding Data Spread:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms assist in assessing the spread or dispersion of the data, providing insights into variability and range.
              </p>
            </li>

            <li style={{ marginBottom: '10px' }}>
              <h4 style={{ marginBottom: '5px', color: '#ffffff' }}>Binning for Grouping Data:</h4>
              <p style={{ fontSize: '14px', lineHeight: '1.4', color: '#555' }}>
                Histograms use bins to group data points into intervals, allowing analysts to highlight specific patterns or trends by adjusting bin widths.
              </p>
            </li>
          </ul>
        </div>

      </div>





    </section>
  )
}