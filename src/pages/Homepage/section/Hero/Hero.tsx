import React from 'react'

import {
  FaSortDown,
} from 'react-icons/fa';

import {
  Wrapper,
  ArrowDown,
  Headline,
  Brand,
  Languages,
  Sep,
  DownloadResume,
} from './styles';

const Hero: React.FC = () => {

  return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8 col-12">
            <Headline>
              Full Stack Engineer
            </Headline>
            <Brand>
              PRITAM DEB
            </Brand>
            <Languages>
              English <Sep>|</Sep> Hindi <Sep>|</Sep>Japanese
            </Languages>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12">
            <DownloadResume href={process.env.PUBLIC_URL + 'portfolio-master1/PRITAM DEB - RESUME 2022 (12).pdf'} target="_blank">
              Resume
            </DownloadResume>
          </div>
          <div className="col-12">
            <ArrowDown>
              <FaSortDown />
            </ArrowDown>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Hero
