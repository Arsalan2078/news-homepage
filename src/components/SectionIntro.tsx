import classes from "./SectionIntro.module.scss";
import heroDesktop from "/image-web-3-desktop.jpg";
import heroMobile from "/image-web-3-mobile.jpg";
import ButtonLink from "./ButtonLink";

export default function SectionIntro() {
  return (
    <div className={classes.container}>
      <section id="intro" className={classes.section}>
        <picture>
          <source srcSet={heroDesktop} media="(min-width: 768px)" />
          <source srcSet={heroMobile} media="(max-width: 767px)" />
          <img src={heroMobile} alt="" />
        </picture>

        <div className={classes.content}>
          <h1>The Bright Future of Web 3.0?</h1>

          <div className={classes.column}>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>

            <ButtonLink href="#">Read More</ButtonLink>
          </div>
        </div>
      </section>
    </div>
  );
}
