'use strict';
/* global response */

var Template = require('dw/util/Template');
var HashMap = require('dw/util/HashMap');
var Categories = require('*/cartridge/models/categories');
var ArrayList = require('dw/util/ArrayList');

/**
 * Render logic for the storefront.category component.
 * @param {dw.experience.ComponentScriptContext} context The Component script context object.
 * @param {dw.util.Map} [modelIn] Additional model values created by another cartridge. This will not be passed in by Commerce Cloud Platform.
 *
 * @returns {string} The markup to be displayed
 */
module.exports.render = function (context, modelIn) {
    var model = modelIn || new HashMap();
    var content = context.content;

    model.image = {
        url: content.image.file.url,
        focalPointX: (content.image.focalPoint.x * 100) + '%',
        focalPointY: (content.image.focalPoint.y * 100) + '%'
    };

    if(content.alt) {
        model.alt = content.alt;
    }
    
    if(content.textHeadline) {
        model.textHeadline = content.textHeadline;
    }

    if(content.textDescription) {
        model.textDescription = content.textDescription;
    }

    if (content.button) {
        model.button = content.button;
    }

    model.changeTextColor = content.changeTextColor;


    var categoriesToBeDisplayed = new ArrayList();
    var customCategoryNames = new HashMap();


    var cat = content['category1'];
    categoriesToBeDisplayed.push(cat);       
    var categories = new Categories(categoriesToBeDisplayed);
    model.categories = categories.categories;
    model.customCategoryNames = customCategoryNames;

    

    // instruct 24 hours relative pagecache
    var expires = new Date();
    expires.setDate(expires.getDate() + 1); // this handles overflow automatically
    response.setExpires(expires);

    return new Template('experience/components/commerce_assets/centralBanner').render(model).text;
};
