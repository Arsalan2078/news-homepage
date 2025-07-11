import classes from "./SectionTopArticles.module.scss";

interface TopArticleProps {
  number: string;
  image: string;
  heading: {
    link: string;
    text: string;
  };
  paragraph: string;
}

export default function SectionTopArticles() {
  const topArticles: TopArticleProps[] = [
    {
      number: "01",
      image: "/image-retro-pcs.jpg",
      heading: {
        link: "#",
        text: "Reviving Retro PCs",
      },
      paragraph: "What happens when old PCs are given modern upgrades?",
    },
    {
      number: "02",
      image: "/image-top-laptops.jpg",
      heading: {
        link: "#",
        text: "Top 10 Laptops of 2022",
      },
      paragraph: "Our best picks for various needs and budgets.",
    },
    {
      number: "03",
      image: "/image-gaming-growth.jpg",
      heading: {
        link: "#",
        text: "The Growth of Gaming",
      },
      paragraph: "How the pandemic has sparked fresh opportunities.",
    },
  ];

  return (
    <div className={classes.container}>
      <section className={classes.section}>
        <ul className={classes.list}>
          {topArticles.map(({ number, image, heading, paragraph }) => (
            <li key={number} className={classes.card}>
              <img src={image} alt="" />

              <div className={classes.column}>
                <div className={classes.number}>{number}</div>

                <a href={heading.link}>
                  <h4>{heading.text}</h4>
                </a>

                <p>{paragraph}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
