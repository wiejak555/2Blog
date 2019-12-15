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
      let linkhtml = '<li><a href="#tag-' + tag + '">' + tag + "</a></li> ";
      html = linkhtml + html;
    }

    tagsWrapper.innerHTML = html;
  }

  /* generate HTML of the link */

  /* add generated code to html variable */

  /* END LOOP: for each tag */

  /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();

function tagClickHandler(event) {
  /* prevent default action for this event */
  event.preventDefault();
  /* make new constant named "clickedElement" and give it the value of "this" */
  const clickedElement = this;
  /* make a new constant "href" and read the attribute "href" of the clicked element */
  const href = clickedElement.getAttribute("href");

  /* make a new constant "tag" and extract tag from the "href" constant */
  const tag = href.replace("#tag-", "");

  /* find all tag links with class active */
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');

  /* START LOOP: for each active tag link */
  for (activeTagLink of activeTagLinks) {
    /* remove class active */
    activeTagLinks.classList.remove("active");
    /* END LOOP: for each active tag link */
  }
  /* find all tag links with "href" attribute equal to the "href" constant */
  const sameTags = document.querySelectorAll(a.active[href ^= "#tag-"]);
  /* START LOOP: for each found tag link */
  for (link of links) {
    /* add class active */
    sameTags.classList.add("active");
  };
  /* END LOOP: for each found tag link */
  generateTitleLinks('[data-tags~="' + tag + '"]');
  /* execute function "generateTitleLinks" with article selector as argument */
}

function addClickListenersToTags() {
  /* find all links to tags */
  /* START LOOP: for each link */
  /* add tagClickHandler as event listener for that link */
  /* END LOOP: for each link */
}

addClickListenersToTags();