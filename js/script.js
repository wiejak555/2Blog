"use strict";

const optArticleSelector = ".post",
  optTitleSelector = ".post-title",
  optTitleListSelector = ".titles",
  optArticleTagsSelector = ".post-tags .list",
  optTagsListSelector = ".tags.list";

function titleClickHandler(event) {
  event.preventDefault();
  const activeLinks = document.querySelectorAll(".titles a.active");
  for (let activeLink of activeLinks) {
    activeLink.classList.remove("active");
  }
  const clickedElement = this;
  clickedElement.classList.add("active");
  const activeArticles = document.querySelectorAll(".post");
  for (let activeArticle of activeArticles) {
    activeArticle.classList.remove("active");
  }
  const articleSelector = clickedElement.getAttribute("href");
  const targetArticle = document.querySelector(articleSelector);
  targetArticle.classList.add("active");
}

function generateTitleLinks(customSelector = " ") {
  const titleList = document.querySelector(optTitleListSelector);
  titleList.innerHTML = "";
  const articles = document.querySelectorAll(
    optArticleSelector + customSelector
  );
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
  const links = document.querySelectorAll(".titles a");
  for (let link of links) {
    link.addEventListener("click", titleClickHandler);
  }
}

function generateTags() {
  const cloudWapper = document.querySelector(optTagsListSelector);
  const articles = document.querySelectorAll(optArticleSelector);

  for (let article of articles) {
    const tagsWrapper = article.querySelector(optArticleTagsSelector);
    let html = "";
    const articleTags = article.getAttribute("data-tags");
    const articleTagsArray = articleTags.split(" ");
    let allTags = {};
    for (let tag of articleTagsArray) {
      if (!allTags.hasOwnProperty(tag)) {
        allTags[tag] = 1;
      } else {
        allTags[tag]++;
      }
      console.log(allTags);
      let linkhtml = '<li><a href="#tag-' + tag + '">' + tag + "</a></li> ";
      html = linkhtml + html;
    }
    tagsWrapper.innerHTML = html;
    cloudWapper.innerHTML = html;
  }
}

function tagClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute("href");
  const tag = href.replace("#tag-", "");
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  for (let activeTagLink of activeTagLinks) {
    activeTagLink.classList.remove("active");
  }
  const sameTags = document.querySelectorAll('a[href="' + href + '"]');
  for (let sameTag of sameTags) {
    sameTag.classList.add("active");
  }
  generateTitleLinks('[data-tags~="' + tag + '"]');
}

function addClickListenersToTags() {
  const linkTags = document.querySelectorAll(".post-tags .list a");
  for (let linkTag of linkTags) {
    linkTag.addEventListener("click", tagClickHandler);
  }
}

function generateAuthors() {
  const articles = document.querySelectorAll(optArticleSelector);
  for (let article of articles) {
    const authorWrapper = article.querySelector(".post-author");
    let html = "";
    const dataAuthor = article.getAttribute("data-author");
    let linkHtml = '<a href="#tag-' + dataAuthor + '">' + dataAuthor + "</a> ";
    html += linkHtml;
    authorWrapper.innerHTML = html;
  }
}

function authorClickHandler(event) {
  event.preventDefault();
  const clickedElement = this;
  const href = clickedElement.getAttribute("href");
  const tag = href.replace("#tag-", "");
  const activeTagLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  for (let activeTagLink of activeTagLinks) {
    activeTagLink.classList.remove("active");
  }
  const sameTags = document.querySelectorAll('a[href="' + href + '"]');
  for (let sameTag of sameTags) {
    sameTag.classList.add("active");
  }

  generateTitleLinks('[data-author="' + tag + '"]');
}

function addClickListenersToAuthors() {
  const linkTags = document.querySelectorAll(".post-author a");
  for (let linkTag of linkTags) {
    linkTag.addEventListener("click", authorClickHandler);
  }
}

generateTitleLinks();
generateTags();
addClickListenersToTags();
generateAuthors();
addClickListenersToAuthors();
