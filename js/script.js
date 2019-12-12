"use strict";

function titleClickHandler(event) {
  event.preventDefault();
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll(".titles a.active");

  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  /* add class 'active' to the clicked link */
  const clickedElement = this;

  clickedElement.classList.add("active");

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll(".post");

  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }
  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute("href");

  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */

  targetArticle.classList.add("active");
}


const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = ".post-tags .list";

function generateTitleLinks() {
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = "";

  const articles = document.querySelectorAll(optArticleSelector);

  let html = "";

  for (let article of articles) {
    const articleId = article.getAttribute("id");

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    const linkHTML =
      '<li><a href="#' +
      articleId +
      '"><span>' +
      articleTitle +
      "</span></a></li>";

    html = html + linkHTML;
    console.log(html)
    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }



}


generateTitleLinks();

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

console.log(links);