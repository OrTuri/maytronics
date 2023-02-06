"use strict";

const HashMap = require("dw/util/HashMap");
const Template = require("dw/util/Template");

const component = (context) => {
  const model = new HashMap();
  model.image1 = context.content.image1.file.httpsURL;
  model.image2 = context.content.image2.file.httpsURL;
  model.image3 = context.content.image3.file.httpsURL;
  model.title1 = context.content.title1;
  model.title2 = context.content.title2;
  model.title3 = context.content.title3;
  model.description1 = context.content.description1 || "";
  model.description2 = context.content.description2 || "";
  model.description3 = context.content.description3 || "";
  const template = new Template(
    "experience/components/commerce_assets/bannerCarousel"
  ).render(model).text;
  return template;
};

module.exports.render = component;
