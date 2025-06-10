import { GoogleFormContainer } from "./styles/GoogleFormContainer.styled";

const GoogleForm = () => (
  <GoogleFormContainer>
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLSdvCHcfch3Cbzyy2czr-JHcMUWJ1h8W0TEQ5gq43a4-Q5jvIQ/viewform?embedded=true"
      width="100%"
      height="600"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Google Form"
      allow="fullscreen"
    >
      Loading…
    </iframe>
  </GoogleFormContainer>
);

export default GoogleForm;