import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();
  const { article } = useLoaderData();
  console.log(article);

  return (
    <section className="articlePage">
      <h2 className="article-page-title">{article.title}</h2>
    </section>
  );
};

const articleLoader = async ({ params }) => {
  try {
    const res = await fetch(`http://localhost:5001/articles/${params.id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch article");
    }
    const data = await res.json();
    return { article: data };
  } catch (error) {
    console.error("Error fetching article:", error);
    return { article: null };
  }
};

export { ArticlePage as default, articleLoader };
