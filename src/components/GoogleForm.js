import { GoogleFormContainer } from "./styles/GoogleFormContainer.styled";

const GoogleForm = () => (
 <GoogleFormContainer>
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSePxvo42oja71yMjaTLQd-UZaLvR9umpTiuTgktiFCQ6VR9gw/viewform"
    width="415"
    height="600"
    frameborder="0"
    marginheight="0"
    marginwidth="0"
  >
    Loading…
  </iframe>
</GoogleFormContainer>
);

export default GoogleForm;
