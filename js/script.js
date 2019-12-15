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

    titleList.innerHTML = titleList.innerHTML + linkHTML;
  }
}

generateTitleLinks();

const links = document.querySelectorAll(".titles a");

for (let link of links) {
  link.addEventListener("click", titleClickHandler);
}

function generateTags() {
  /* find all articles */

  const articles = document.querySelectorAll(optArticleSelector);

  /* START LOOP: for every article: */

  for (let article of articles) {
    /* find tags wrapper */
    let html = "";
    const tagsWrapper = article.querySelector(optArticleTagsSelector);

    const articleTags = article.getAttribute("data-tags");

    const articleTagsArray = articleTags.split(" ");

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */
    for (let tag of articleTagsArray) {
      const linkhtml = '<li><a href="#tag-' + tag + "</a></li>";
      html = linkhtml + html;
    }

    const wrapList = document.querySelector(optArticleTagsSelector);
    wrapList.innerHTML = html;
    console.log(html);
  }

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();
