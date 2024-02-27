'use client'
import styled from "styled-components";

const LandingPageSection = styled.section`
  background-color: #f4f4f4;
  padding: 50px 120px;
  text-align: center;
  color: #212529;

  @media (max-width: 600px) {
    padding: 50px 30px;
  }
`;

const Heading = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 18px;
  color: #343a40;
`;

const PurposeSection = () => {
  return (
    <LandingPageSection>
      <Heading>Ayın Çalışanını Seçmeye Hoş Geldiniz</Heading>
      <Description>
        Platformumuz, organizasyonumuz içindeki olağanüstü katkıları ve
        başarıları tanımlamak için Ayın Çalışanını aday gösterme ve seçme
        sürecini sorunsuz bir şekilde sağlar. Bugün olağanüstü başarıları
        aday göstermeye ve kutlamaya başlayın!
      </Description>
    </LandingPageSection>
  );
};

export default PurposeSection;
