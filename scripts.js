/**
 * @typedef TagAttribute
 * @property * {string} any attribute name and any string value
 *
 * @typedef ElementJSON
 * @property name {string} tag name
 * @property attributes {TagAttribute} tag attributes map
 * @property children {ElementJSON[]} children json list
 */

/**
 * create html element
 * @param name {string} tag name to create
 * @param attributes {TagAttribute} tag attributes map
 * @param children {HTMLElement[]} children elements
 * @return {HTMLElement} return created element
 */
function createElement(name, attributes = {}, children= []) {
  if (name) {
    const element = document.createElement(name);
    
    Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
    
    children.forEach(child => element.appendChild(child));
    
    return element;
  } else {
    throw new Error(`'name' is required for createElement() method`);
  }
}

/**
 * append child to specific element
 * @param queryString {string} query string to find element
 * @param elements {HTMLElement[] | HTMLElement} elements to append
 */
function appendChild(queryString, elements = []) {
  if (!(elements instanceof Array)) {
    elements = [elements];
  }
  
  const parent = document.querySelector(queryString);
  
  if (parent) {
    elements.forEach(element => parent.appendChild(element));
  } else {
    throw new Error(`The element with query string '${queryString}' is not found`);
  }
}

/**
 * create multiple elements with json object list
 * @param jsonList {ElementJSON[]} element json list to create
 * @return {HTMLElement[]} created elements array
 */
function createElementsWithJSON(jsonList) {
  return jsonList.map(json => createElementWithJSON(json));
}

/**
 * create a single element with json object
 * @param json {ElementJSON} element json to create
 * @return {HTMLElement} created element
 */
function createElementWithJSON(json) {
  return createElement(json.name, json.attributes, (json.children || []).map(child => createElementWithJSON(child)));
}
