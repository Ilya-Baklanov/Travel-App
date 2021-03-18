import React from 'react';
import { Player, ControlBar, VolumeMenuButton, PlayToggle, LoadingSpinner, BigPlayButton } from 'video-react';
import { connect } from 'react-redux';

import "video-react/dist/video-react.css";

const VideoPlayer = ({currentCountry}) => {
  return (
    <Player
      poster={`../../../../assets/countries/${currentCountry}/photo/thumb.jpg`}
      src={`../../../../assets/countries/${currentCountry}/video/video.mp4`}
      au
    >
      <LoadingSpinner />
      <BigPlayButton position="center" />
      <ControlBar autoHide={true} autoHideTime={1000}>
        <PlayToggle />
        <VolumeMenuButton vertical />
      </ControlBar>
    </Player>
  );
}

const mapStateToProps = state => ({
  currentCountry: state.switchCountryReducer.country
})

export default connect(mapStateToProps, null)(VideoPlayer);
