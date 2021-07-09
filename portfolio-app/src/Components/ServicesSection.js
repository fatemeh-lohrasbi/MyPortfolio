import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import ServiceCard from './ServiceCard';
import programming from '../img/web.png';
import AI from '../img/AI.png';
import design from '../img/ui-ux-design.png';
import seo from '../img/seo.png';


function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Services'} span={'services'}/>
                <div className="services">
                    <ServiceCard 
                        image={programming}
                        title={'Web Development'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates a blanditiis? Suscipit reiciendis'  }
                      />
                      <ServiceCard 
                        image={AI}
                        title={'Artificial Intelligence'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates a blanditiis? Suscipit reiciendis'  }
                      />
                      <ServiceCard 
                        image={design}
                        title={'UI/UX design'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates a blanditiis? Suscipit reiciendis'  }
                      />
                      <ServiceCard 
                        image={seo}
                        title={'Seo Content Writing'}
                        paragraph={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates a blanditiis? Suscipit reiciendis'  }
                      />
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
.services{
    margin-top:5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
} 

`;
export default ServicesSection
