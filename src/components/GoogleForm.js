import { GoogleFormContainer } from "./styles/GoogleFormContainer.styled";

const GoogleForm = () => (
 <GoogleFormContainer>
    <iframe
      src="https://forms.gle/MqFyAiig9igqCSh68"
      width="100%"
      height="600"
      frameBorder="0"
      marginHeight="0"
      marginWidth="0"
      title="Google Form"
    >
      Loading…
    </iframe>
  </GoogleFormContainer>
);

export default GoogleForm;