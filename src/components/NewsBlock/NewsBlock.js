import NewsItem from "./NewsItem";
import newsData from "./../../assets/newsData";

const NewsBlock = () => {
  return (
    <div className="news-container">
      {newsData.map((item) => (
        <NewsItem text={item} />
      ))}
    </div>
  );
};

export default NewsBlock;
