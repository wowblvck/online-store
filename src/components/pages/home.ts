import { Page } from "../view/page";

export const homePage: Page = {
  render: `
    <section class="welcome main__welcome">
      <img
        class="welcome__img"
        src="./assets/images/laptop.png"
        alt="laptop">
      <div class="welcome__content">
        <h1 class="welcome__title">Welcome to Online <span>Store</span></h1>
        <div class="multimedia">
          <img
            src="./assets/icons/multimedia/camera.svg"
            class="multimedia__icon"
            alt="Camera icon">
          <img
            src="./assets/icons/multimedia/laptop.svg"
            class="multimedia__icon"
            alt="Laptop icon">
          <img
            src="./assets/icons/multimedia/modem.svg"
            class="multimedia__icon"
            alt="Modem icon">
          <img
            src="./assets/icons/multimedia/tablet.svg"
            class="multimedia__icon"
            alt="Tablet icon">
          <img
            src="./assets/icons/multimedia/tv.svg"
            class="multimedia__icon"
            alt="TV icon">
        </div>
        <p class="welcome__subtitle">Our store sells electronics: the assortment of the store includes smartphones, laptops, smart watches and more.</p>
        <button class="btn btn__welcome">Start shopping</button>
      </div>
    </section>
  `,
};
