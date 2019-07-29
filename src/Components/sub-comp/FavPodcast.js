import React from "react";

const FavPodcast = () => {
  const podList = [
    {
      title: "How I Built This with Guy Raz",
      host: "NPR",
      desc: "Founder's stories of their successful buisness.",
      link: "https://www.npr.org/podcasts/510313/how-i-built-this",
      id: "yuyghihwojwoejfef"
    },
    {
      title: "Planet Money",
      host: "NPR",
      desc: "Eventful and interestings discussions of the economy",
      link: "https://www.npr.org/podcasts/510289/planet-money",
      id: "iwehfeiofhefwhfoewjdwefew"
    },
    {
      title: "Outside/In",
      host: "New Hampshire Public Radio",
      desc: "Show about the natural world and how we use it",
      link: "http://outsideinradio.org/",
      id: "uiehfeiwfgeiul"
    },
    {
      title: "The Tim Ferriss Show",
      host: "Tim Ferris",
      desc: "Interviewing successfull and insperational buisnessmen",
      link: "https://tim.blog/podcast/",
      id: "wioehoiewhefjepo"
    }
  ];
  const renderList = () => {
    return podList.map(doc => {
      return (
        <div className=" hover mb-3 " key={doc.id}>
          <a href={doc.link} target="_target">
            <h5 className="ml-1 row">{doc.title}</h5>
            <div className="text-muted text-small">{doc.host}</div>
            <div className="text-muted text-small">{doc.desc}</div>
          </a>
        </div>
      );
    });
  };
  return (
    <div className="border">
      <h3 className="pb-4 text-center">Our Favorite Podcasts</h3>
      {renderList()}
    </div>
  );
};

export default FavPodcast;
