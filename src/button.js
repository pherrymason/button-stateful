export default class Button {
    constructor (button) {
        this.button = button;
    }

    loading () {
        Dom.addClass(this.button, 'btn-loader');
        this.button.setAttribute('disabled', true);
    }

    loaded () {
        Dom.removeClass(this.button, 'btn-loader');
        this.button.setAttribute('disabled', false);
    }
}

class Dom {
    static addClass(el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    }

    static removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }
}
