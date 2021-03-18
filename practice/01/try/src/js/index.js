(function () {
  'use strict';

  const company = {
    company_id: 1234,
    company_name: '会社名'
  }

  const article = {
    article_id: 9876,
    article_title: 'タイトル'
  }

  const mergedObj = Object.assign(company, article)

  console.log(mergedObj)
})()