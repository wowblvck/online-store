export default class Footer {
  element: string;

  constructor() {
    this.element = `
      <div class="container footer__container">
        <div class="copyright">
            <div class="authors">
                <p class="authors__title">Authors:</p>
                <a
                    class="authors__link"
                    href="https://github.com/wowblvck"
                    target="_blank">Indar Basto,
                </a>
                <a
                    class="authors__link"
                    href="https://github.com/MikhailStn"
                    target="_blank">Mikhail Stankevich
                </a>
            </div>
            <p class="copyright__year">2022 - 2023</p>
            <a
                class="copyright__school"
                href="https://rs.school/"
                target="_blank">RS School
            </a>
        </div>
      </div>
    `;
    this.generatePage();
  }
  generatePage = () => {
    window.addEventListener("DOMContentLoaded", () => {
      const footer: HTMLElement | null = document.querySelector(".footer");
      if (footer != undefined) {
        footer.innerHTML = this.element;
      }
    });
  };
}
