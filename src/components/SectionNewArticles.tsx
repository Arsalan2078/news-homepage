import classes from "./SectionNewArticles.module.scss";

interface NewArticleProps {
  heading: {
    link: string;
    text: string;
  };
  paragraph: string;
}

export default function SectionNewArticles() {
  const newArticles: NewArticleProps[] = [
    {
      heading: {
        link: "#",
        text: "Hydrogen VS Electric Cars",
      },
      paragraph: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      heading: {
        link: "#",
        text: "The Downsides of AI Artistry",
      },
      paragraph:
        "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      heading: {
        link: "#",
        text: "Is VC Funding Drying Up?",
      },
      paragraph:
        "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <h2>New</h2>

        <ul className={classes.list}>
          {newArticles.map(({ heading, paragraph }, index) => (
            <li key={index}>
              <a href={heading.link}>
                <h3>{heading.text}</h3>
              </a>

              <p>{paragraph}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
