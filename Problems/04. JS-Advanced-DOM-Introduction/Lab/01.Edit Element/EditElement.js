function editElement(element, match, replacer) {    
    const text = element.textContext;
    const matcher = new RegExp(match, 'g');
    element.textContext = text.replace(matcher, replacer)
}