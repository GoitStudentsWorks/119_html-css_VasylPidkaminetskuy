import { setupModal } from '../main.js';

setupModal({
  openSelector: "[data-menu-open]",
  closeSelector: "[data-menu-close]",
  modalSelector: "[data-menu]",
  closeOnLink: true,
});