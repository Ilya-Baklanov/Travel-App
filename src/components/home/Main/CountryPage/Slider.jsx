import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { connect } from 'react-redux';

import { guide } from '../../../../assets/atlases/guide.js';

const Slider = ({currentCountry, language}) => {
  const images = new Array(6).fill('').map((image, index) => ({
    original: `../../../../assets/countries/${currentCountry}/photo/0${index + 1}.jpg`,
    thumbnail: `../../../../assets/countries/${currentCountry}/photo/0${index + 1}.jpg`,
    originalTitle: guide[language][currentCountry][`0${index + 1}`],
    thumbnailTitle: guide[language][currentCountry][`0${index + 1}`],
    thumbnailLabel: guide[language][currentCountry][`0${index + 1}`],
    description: guide[language][currentCountry][`0${index + 1}`],
  }))

  return <ImageGallery
    items={images}
    showBullets={true}
    showIndex={true}
    autoPlay={true}
    slideOnThumbnailOver={true}
  />;
}

const mapStateToProps = state => ({
  currentCountry: state.switchCountryReducer.country,
  language: state.switchLanguageReducer.language,
})

export default connect(mapStateToProps, null)(Slider);
