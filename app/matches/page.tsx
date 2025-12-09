import MatchNavItems from "@/components/matches/MatchNavItems";

import MatchHeroComponent from "./../../components/matches/MatchHeroComponent";

import MatchScheduleCardContainer from "@/components/matches/MatchScheduleCardContainer";
import { matches } from "@/components/home/data";
import SponsorsCarousel from "@/components/home/SponsorsCarousel";

const MatchPage = () => {
  const all = [
    {
      monthAndDate: "January 2025",
      matches: matches.slice(0, 2),
    },
    {
      monthAndDate: "February 2025",
      matches: matches.slice(0, 4),
    },
    {
      monthAndDate: "March 2025",
      matches: matches.slice(0, 3),
    },
    {
      monthAndDate: "April 2025",
      matches: matches.slice(0, 6),
    },
    {
      monthAndDate: "May 2025",
      matches: matches.slice(0, 1),
    },
    {
      monthAndDate: "June 2025",
      matches: matches.slice(0, 5),
    },
    {
      monthAndDate: "July 2025",
      matches: matches.slice(0, 7),
    },
    {
      monthAndDate: "August 2025",
      matches: matches.slice(0, 3),
    },
    {
      monthAndDate: "September 2025",
      matches: matches.slice(0, 2),
    },
    {
      monthAndDate: "October 2025",
      matches: matches.slice(0, 4),
    },
    {
      monthAndDate: "November 2025",
      matches: matches.slice(0, 6),
    },
    {
      monthAndDate: "December 2025",
      matches: matches.slice(0, 1),
    },
  ];

  return (
    <div>
      <MatchNavItems></MatchNavItems>
      <MatchHeroComponent></MatchHeroComponent>
      {all.map((item, idx) => (
        <MatchScheduleCardContainer
          key={idx}
          monthAndDate={item.monthAndDate}
          matches={item.matches}
        />
      ))}
      <SponsorsCarousel></SponsorsCarousel>
    </div>
  );
};

export default MatchPage;
