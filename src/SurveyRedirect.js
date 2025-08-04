import { useEffect } from "react";

const SurveyRedirect = () => {
  const links = [
    "https://dhlim55.github.io/sdfchat1/",
    "https://dhlim55.github.io/sdfchat/"
  ]

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * links.length);
    const selectedLink = links[randomIndex];
    window.location.href = selectedLink;
  }, []);

  return <p>설문 페이지로 이동 중입니다...</p>;
};

export default SurveyRedirect;
