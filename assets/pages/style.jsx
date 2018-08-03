

import bootstrap from "bootstrap/js/src";
import $ from "jquery";
import Popper from "popper.js";
import toastr from "toastr";

import "toastr/build/toastr.min.css";
import "@stylesheets/reboot";
import "@stylesheets";
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/scss/fontawesome';
import '@fortawesome/fontawesome-free/js/brands';
import '@fortawesome/fontawesome-free/scss/brands';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/scss/regular';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/scss/solid';

Object.assign(window, { $, Popper, bootstrap, toastr });
toastr.options.preventDuplicates = true;
toastr.options.progressBar = true;
