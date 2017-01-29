import $ from "jquery";
import EmojiPicker from "./../../src/js/EmojiPicker";

$(document).ready(() => {

    const icon      = document.querySelector('.fa-smile');
    const container = document.getElementById('container');
    const input     = document.getElementById('text-input');

    const picker = new EmojiPicker();
    picker.listenOn(icon, container, input);

});